import React from 'react'
import BlogSlug from "../../components/blog/BlogSlug"
import { useParams } from 'react-router-dom'


const Slug = () => {
    const { slug } = useParams();
    return (
        <BlogSlug slug={slug} />
    )
}

export default Slug