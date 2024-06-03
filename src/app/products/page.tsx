// Import useState, useEffect, Link, and axios
"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

const ProductListPage = () => {
    // Define state to store products
    const [products, setProducts] = useState([]);

    // Fetch products when component mounts
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                // Fetch products from the backend API
                const response = await axios.get('http://localhost:9000/store/products');
                setProducts(response.data.products);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-semibold mb-6">Product List</h1>
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Iterate over products and render each one */}
                {products && products.map(product => (
                    <li key={product.id} className="bg-white rounded shadow-md p-6">
                        {/* Link to product detail page */}
                        <div className="overflow-hidden">
                            {/* Display images without horizontal scrollbar */}
                            <div className="flex" style={{ 'WebkitOverflowScrolling': 'auto', 'overflowX': 'auto', 'scrollbarWidth': 'none', 'msOverflowStyle': 'none' }}>
                                {/* Display images */}
                                {product.images.map((image, index) => (
                                    <img key={index} src={image.url} alt={product.title} className="max-w-64 h-auto mr-4" />
                                ))}
                            </div>
                            {/* Product details */}
                            <div>
                                <h2 className="text-gray-600 text-xl font-semibold mb-2">{product.title}</h2>
                                <p className="text-gray-600">{product.description}</p>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductListPage;