import { GetStaticPaths } from 'next'
import React from 'react'
export const getStaticPaths: GetStaticPaths = async () => {
    const paths = [
        { params: { articletitle: 'article1' } },
        { params: { articletitle: 'article2' } },
        { params: { articletitle: 'article3' } },
        { params: { articletitle: 'article4' } },
        { params: { articletitle: 'article5' } }
    ]
    return {
        paths,
        fallback: false
    }
}


const BookMarkPage = () => {
    return (
        <div></div>
    )
}

export default BookMarkPage