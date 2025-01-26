import { motion } from 'framer-motion'
import { linearGradient } from 'framer-motion/client'
import React from 'react'

const Marq = ({ dir }) => {
    const img = ['https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e12177716cb3f2ea_basf.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27505e3a120466b87aa_singularity.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275c2fcf540272672ef_intenseeye.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d27518bb52e4d642644e_bcgp.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d2756e8df24e52915c71_flowcode.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275e1d5aa08ccc379dd_ypo.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d275909535ff431975cf_lavender.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2d36963b956910ca67534_remind.svg',
        'https://assets-global.website-files.com/6334198f239547d0f9cd84b3/65b2ce14e6c85b010c2e1e3c_Logo%20White%201.svg'
    ]
    motion
    return (
        <div className="flex" style={{ maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent' }} >
            <motion.div initial={{ x: dir === 'left' ? "0" : "-100%" }} animate={{ x: dir === 'left' ? "-100%" : "0" }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className='w-full py-2 max-sm:py-0 flex flex-shrink-0 gap-14'>
                {img.map((e, ind) => <img key={ind} src={e} alt='logo' className='w-32 h-32 max-md:w-20 max-md:h-20' />)}
            </motion.div>
            <motion.div initial={{ x: dir === 'left' ? "0" : "-100%" }} animate={{ x: dir === 'left' ? "-100%" : "0" }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} className='pl-14 max-md:pl-48 w-full py-2 max-sm:py-0 flex flex-shrink-0 gap-14 max-md:gap-32'>
                {img.map((e, ind) => <img key={ind} src={e} alt='logo' className='w-32 h-32 max-md:w-20 max-md:h-20' />)}
            </motion.div>
        </div>
    )
}

export default Marq