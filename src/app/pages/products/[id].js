import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Medusa } from '@medusajs/medusa-js'
import { useCart } from '../../context/CartContext'

const medusa = new Medusa({ baseUrl: 'http://localhost:9000', maxRetries: 3 })

const ProductDetails = () =>
{
    const router = useRouter()
    const { id } = router.query
    const { addToCart } = useCart()
    const [product, setProduct] = useState(null)

    useEffect(() =>
    {
        if (id)
        {
            medusa.products.retrieve(id)
                .then(({ product }) =>
                {
                    setProduct(product)
                })
        }
    }, [id])

    if (!product) return <div>Loading...</div>

    return (
        <div>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default ProductDetails
