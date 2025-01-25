import React, { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        // Add event listener once
        window.addEventListener('mousemove', updatePosition);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('mousemove', updatePosition);
        };
    }, []); // Empty dependency array ensures this effect runs only once

    return (
        <div
            className="w-[20px] h-[20px] rounded-full fixed -translate-x-1/2 -translate-y-1/2 bg-white"
            style={{
                top: `${position.y}px`,
                left: `${position.x}px`,
                mixBlendMode: 'difference',
                pointerEvents: 'none', // Prevent the cursor from interfering with clicks
            }}
        ></div>
    );
};

export default Cursor;
