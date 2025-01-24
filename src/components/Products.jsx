import React from 'react'
import Product from './Product'

const Products = () => {
    const products = [
        {
            id: 1,
            title: 'Arqitel',
            description: 'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',
            btn2: false,
        },
        {
            id: 2,
            title: 'cula',
            description: `We immersed ourselves in a 3D world we created to explain how Cula's platform collects data from carbon removal processes and converts them into carbon credit certificates.`,
            btn2: false,
        },
        {
            id: 3,
            title: 'TTR',
            description: `We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.`,
            btn2: true,
        },
        {
            id: 4,
            title: 'YIR',
            description: `We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.`,
            btn2: false,
        },
        {
            id: 6,
            title: 'Yahoo!',
            description: 'With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.',
            btn2: true,
        },
        {
            id: 6,
            title: 'Remind',
            description: 'We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.',
            btn2: true,
        }

    ]
    return (
        <div className='mt-24'>
            {products.map(product => <Product key={product.id} title={product.title} description={product.description} btn2={product.btn2} />)}
        </div>
    )
}

export default Products