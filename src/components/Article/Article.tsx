import React from 'react'
import Link from 'next/link'
import styles from './Article.module.scss'
import { Card } from '@mui/material'

interface ArticleProps {
    link: string
    title: string
    liked: number
}
const Article: React.FC<ArticleProps> = ({ link, title, liked }) => {
    return (
        // <Card className={styles['article-container']}>
        <div className={styles['article-container']}>
            <div className={styles['article-title']}>
                <Link href={`/articles/${title}`}>
                    {title}
                </Link>
            </div>
            <div className={styles['article-liked']}>
                <span>{`${liked} Users`}</span>
            </div>
        </div>
        // </Card>
    )
}

export default Article