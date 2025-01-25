import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
            console.log(e.clientY)
        };

        let cont = document.querySelector('.cursor-none')

        cont.addEventListener('mousemove', updatePosition);

        return () => {
            cont.removeEventListener('mousemove', updatePosition);
        };
    }, []);


    return (
        <div
            className={`w-[20px] z-50 h-[20px] rounded-full absolute -translate-x-1/2 -translate-y-1/2 bg-white ${position.y >= 645 && 'hidden'}`}
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
                mixBlendMode: 'difference',
                // cursor: 'none',
            }}
        ></div>
    );
};

export default Cursor;
