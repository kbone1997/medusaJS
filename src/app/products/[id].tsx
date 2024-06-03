// pages/products/[id].tsx

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetailPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await axios.get(`/api/products/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        if (id) {
            fetchProduct();
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Product Detail</h1>
            <p>Name: {product.name}</p>
            <p>Price: ${product.price}</p>
            {/* Add more details here */}
        </div>
    );
};

export default ProductDetailPage;
