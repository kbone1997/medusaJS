import { useEffect, useState } from 'react'
import { Medusa } from '@medusajs/medusa-js'

const medusa = new Medusa({ baseUrl: 'http://localhost:9000', maxRetries: 3 })

const Products = () =>
{
    const [products, setProducts] = useState([])

    useEffect(() =>
    {
        medusa.products.list()
            .then(({ products }) =>
            {
                setProducts(products)
            })
    }, [])

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {products.map(product => (
                    <li key={product.id}>
                        <a href={`/products/${product.id}`}>{product.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Products
