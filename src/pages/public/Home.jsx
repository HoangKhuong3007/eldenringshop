import React from 'react';
import { Navbar } from '../../components/navbar/Navbar';
import { Footer } from '../../components/footer/Footer';
import '../../styles/public/homepage/homepage.css';

const products = [
    {
        id: 1,
        name: 'Stylish Watch',
        image: 'https://via.placeholder.com/150',
        description: 'A classic timepiece that complements any outfit.',
    },
    {
        id: 2,
        name: 'Leather Wallet',
        image: 'https://via.placeholder.com/150',
        description: 'Handcrafted leather wallet for all your essentials.',
    },
    {
        id: 3,
        name: 'Elegant Sunglasses',
        image: 'https://via.placeholder.com/150',
        description: 'Sunglasses that add style and protection to your look.',
    },
];

export const Home = () => {
    return (
        <div className='home-container'>
            <Navbar />
            <div className="home-header">
                <h2>Welcome to EldenRing - Men's Accessories</h2>
                <p>Your destination for stylish and high-quality men's accessories.</p>
            </div>
            <div className="home-content">
                <div className="products">
                    {products.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <p>{product.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
