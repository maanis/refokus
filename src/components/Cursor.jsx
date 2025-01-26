import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({
                x: e.clientX + window.scrollX,
                y: e.clientY + window.scrollY,
            });
        };

        window.addEventListener('mousemove', updatePosition);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, []);

    return (
        <div
            className={`w-[20px] z-50 h-[20px] custom-cursor rounded-full absolute -translate-x-1/2 -translate-y-1/2 bg-white`}
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
                mixBlendMode: 'difference',
                pointerEvents: 'none',
            }}
        ></div>
    );
};

export default Cursor;
