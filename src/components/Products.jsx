import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'
import video1 from '../assets/vid1.webm'
import video2 from '../assets/vid2.mp4'
import video3 from '../assets/vid3.webm'
import video4 from '../assets/vid4.webm'

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
        }

    ]
    const [pos, setpos] = useState({ y: 0, show: false })
    return (
        <div className='mt-24 relative'>
            {products.map((product, index) => (
                <div key={index}>
                    <Product title={product.title} index={index} setPos={setpos} description={product.description} btn2={product.btn2} />
                    <div className="absolute h-full w-full top-[0] pointer-events-none">

                        <motion.div initial={{ y: 0, x: "-50%" }} transition={{ ease: [0.87, 0, 0.13, 1], duration: .6 }} animate={{ y: pos.y + `rem` }} className="window h-[14rem] w-80 absolute overflow-hidden pointer-events-none  left-[45%] -translate-x-1/2">
                            <motion.div animate={{ y: -pos.y + `rem` }} className=" h-full w-full"><video width={"450px"} transition={{ ease: [0.87, 0, 0.13, 1], duration: .5 }} src={video1} autoPlay muted loop className={`w-full h-full rounded-lg object-cover ${!pos.show ? 'hidden' : ''}`}></video></motion.div>
                            <motion.div animate={{ y: -pos.y + `rem` }} className=" h-full w-full"><video width={"450px"} transition={{ ease: [0.87, 0, 0.13, 1], duration: .5 }} src={video2} autoPlay muted loop className={`w-full h-full rounded-lg object-cover ${!pos.show ? 'hidden' : ''}`}></video></motion.div>
                            <motion.div animate={{ y: -pos.y + `rem` }} className=" h-full w-full"><video width={"450px"} transition={{ ease: [0.87, 0, 0.13, 1], duration: .5 }} src={video3} autoPlay muted loop className={`w-full h-full rounded-lg object-cover ${!pos.show ? 'hidden' : ''}`}></video></motion.div>
                            <motion.div animate={{ y: -pos.y + `rem` }} className=" h-full w-full"><video width={"450px"} transition={{ ease: [0.87, 0, 0.13, 1], duration: .5 }} src={video4} autoPlay muted loop className={`w-full h-full rounded-lg object-cover ${!pos.show ? 'hidden' : ''}`}></video></motion.div>
                        </motion.div>
                    </div >
                </div>
            ))
            }
        </div >
    )
}

export default Products