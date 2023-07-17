import React, { useContext, useEffect, useState } from 'react'
import styles from './Modal.module.scss'
import Link from 'next/link'
import { ModalContext } from '../Global/Layout'
import { addArticle, addBookMark, addComment } from '@/lib/DynamoAPI'
import { Auth } from 'aws-amplify'
import { randomUUID } from 'crypto'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Modal = () => {
    const { setModalVisible } = useContext(ModalContext)
    const [isSaved, setIsSaved] = useState(false)
    const [url, setUrl] = useState('')
    const [comment, setComment] = useState('')
    const handleSubmit = async () => {
        const user = await Auth.currentAuthenticatedUser()
        const email = user.attributes.email
        const uuid = await String(randomUUID)
        console.log(uuid)
        Promise.all([
            addComment(
                {
                    id: uuid,
                    content: comment,
                    userId: email,
                    articleId: 'article1'
                }
            ),
            addBookMark(
                {
                    id: uuid,
                    userId: email,
                    articleId: 'article1'
                }
            ),

            addArticle(
                {
                    id: uuid,
                    title: 'test',
                    link: url
                }
            )])
            .then(response => {
                console.log(response);
                setUrl('')
                setComment('')
                setIsSaved(true)
                setTimeout(() => {
                    setIsSaved(false)
                    setModalVisible(false)
                },1000)
            })
            .catch(error => {
                console.error(error);
            });
    }

    return (
        <div onClick={() => setModalVisible(false)} className={styles['modal-container']}>
            <div onClick={(e) => e.stopPropagation()} className={styles['modal']}>
                <input className={styles['modal-input']} type="text" placeholder='URL' onChange={(e) => setUrl(e.target.value)} />
                <input className={styles['modal-input']} type="text" placeholder='Comment' onChange={(e) => setComment(e.target.value)} />
                <button className={styles['modal-button']} onClick={handleSubmit}>Submit</button>
            </div>
            {
                isSaved &&
                <div className={styles['modal-check']}>
                    <div className={styles['modal-check-container']}>
                        <FontAwesomeIcon icon={faCircleCheck} className={styles['modal-check-icon']} />
                        <span>Saved!</span>
                    </div>
                </div>
            }
        </div>
    )
}

export default Modal
