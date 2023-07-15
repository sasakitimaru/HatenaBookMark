import React, { useContext, useState } from 'react'
import styles from './Modal.module.scss'
import Link from 'next/link'
import { ModalContext } from '../Global/Layout'
const Modal = () => {
    const { setModalVisible } = useContext(ModalContext)
    const [url, setUrl] = useState('')
    const [comment, setComment] = useState('')

    return (
        <div onClick={() => setModalVisible(false)} className={styles['modal-container']}>
            <div onClick={(e) => e.stopPropagation()} className={styles['modal']}>
                <input className={styles['modal-input']} type="text" placeholder='URL' onChange={(e) => setUrl(e.target.value)} />
                <input className={styles['modal-input']} type="text" placeholder='Comment' onChange={(e) => setComment(e.target.value)} />
                <button className={styles['modal-button']}>Submit</button>
            </div>
        </div>
    )
}

export default Modal
