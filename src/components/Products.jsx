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
            id: 7,
            title: 'Remind',
            description: 'We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.',
            btn2: true,
        }

    ]
    return (
        <div className='mt-24 relative'>
            {products.map(product => (
                <>
                    <Product key={product.id} title={product.title} description={product.description} btn2={product.btn2} />
                    <div className="absolute h-[14rem] w-80 left-[36%] bg-blue-600   z-50 top-[0] rounded-md">
                        {/* <video src="https://aditya-pawar-1.github.io/Refokus-UI-Clone-React/assets/Arqitel-BXWnuhhk.webm" autoPlay muted loop className='w-full h-full rounded-xl'></video>
                        <video src="https://aditya-pawar-1.github.io/Refokus-UI-Clone-React/assets/Cula-ZDOHQMHU.mp4" autoPlay muted loop className='w-full h-full rounded-xl'></video>
                        <video src="https://aditya-pawar-1.github.io/Refokus-UI-Clone-React/assets/TTR-C2lTQdRZ.webm" autoPlay muted loop className='w-full h-full rounded-xl'></video>
                        <video src="https://aditya-pawar-1.github.io/Refokus-UI-Clone-React/assets/yahoo--FL9ySUE.webm" autoPlay muted loop className='w-full h-full rounded-xl'></video>
                        <video src="https://aditya-pawar-1.github.io/Refokus-UI-Clone-React/assets/Cula-ZDOHQMHU.mp4" autoPlay muted loop className='w-full h-full rounded-xl'></video>
                        <video src="https://aditya-pawar-1.github.io/Refokus-UI-Clone-React/assets/Arqitel-BXWnuhhk.webm" autoPlay muted loop className='w-full h-full rounded-xl'></video> */}
                        <div className=" h-full w-full  bg-blue-300"></div>
                        <div className=" h-full w-full  bg-red-300"></div>
                        <div className=" h-full w-full  bg-violet-300"></div>
                        <div className=" h-full w-full  bg-pink-300"></div>
                        <div className=" h-full w-full  bg-yellow-300"></div>
                        <div className=" h-full w-full  bg-yellow-300"></div>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Products