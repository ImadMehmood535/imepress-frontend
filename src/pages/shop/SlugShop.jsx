import React from 'react'
import ShopSlug from '../../components/shop/ShopSlug'
import { useParams } from 'react-router-dom'

const SlugShop = () => {
    const { slug } = useParams();
    return <ShopSlug slug={slug} />
}

export default SlugShop