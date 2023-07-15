import React from 'react'
import Link from 'next/link'
import styles from './Article.module.scss'

interface ArticleProps {
    link: string
    title: string
    liked: number
}
const Article: React.FC<ArticleProps> = ({ link, title, liked }) => {
    return (
        <div className={styles['article-container']}>
            <div className={styles['article-title']}>
                <Link href={link}>
                    {title}
                </Link>
            </div>
            <div className={styles['article-liked']}>
                <span>{liked}</span>
            </div>
        </div>
    )
}

export default Article