import React from 'react'

const Footer = () => {
    return (
        <div className='w-full py-8 max-md:py-4 max-md:pb-6 relative'>
            <div className="absolute w-[300px] right-[-230px] top-[-180px] h-[300px] " style={{ background: 'radial-gradient(circle, rgba(0, 255, 170, 0.5), rgba(0, 0, 0, 0))', filter: 'blur(125px)', zIndex: 0, }}></div>

            <div className='max-w-screen-lg mx-auto max-md:px-4 flex max-md:flex-col items-center  gap-8'>
                <div className='max-md:order-2'>
                    <h2 className='text-[7rem] font-semibold leading-none tracking-tighter max-md:text-[6rem]'>ReFokus.</h2>
                </div>
                <div className='w-1/2 min-h-[14rem] max-md:order-1 p-4 max-md:w-full flex justify-between items-center'>
                    <div className='flex flex-col min-h-[10rem] justify-between'>
                        <h3 className='text-zinc-500'>Socials</h3>
                        <div className='flex flex-col'>
                            {['Instagram', 'Twitter(X?)', 'LinkeDin'].map((e, index) => <a key={index} href='#' className='mb-2 text-zinc-500'>{e}</a>)}
                        </div>
                    </div>

                    <div className='flex flex-col min-h-[10rem] justify-between'>
                        <h3 className='text-zinc-500'>Socials</h3>
                        <div className='flex flex-col'>
                            {['Instagram', 'Twitter(X?)', 'LinkeDin'].map((e, index) => <a key={index} href='#' className='mb-2 text-zinc-500'>{e}</a>)}
                        </div>
                    </div>

                    <div className='min-h-[10rem] p-2 w-[40%] flex flex-col justify-between items-end text-right'>
                        <p className='text-sm'>Refokus is pionnering digital agency driven by design and empowered by technology</p>
                        <img className='w-40' src="https://assets-global.website-files.com/628ea50806d12b349bebc1ea/6482428d42dc637abdafb81a_Blue%20Label%201.png" alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer