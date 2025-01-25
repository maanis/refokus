import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Marquees from './components/Marquees';
import Cards from './components/Cards';
import Footer from './components/Footer';

const App = () => {
    const scrollContainerRef = useRef(null);


    // useEffect(() => {
    //     const scrollInstance = new LocomotiveScroll({
    //         el: scrollContainerRef.current,
    //         smooth: true, // Enable smooth scrolling
    //         lerp: 0.05,    // Adjust smoothness (higher value = less smooth)
    //     });

    //     // return () => {
    //     //     scrollInstance.destroy(); // Cleanup Locomotive Scroll on unmount
    //     // };
    // }, []);




    return (
        <div ref={scrollContainerRef} data-scroll-container className="h-full overflow-x-hidden w-full text-white bg-[#0c0c0c]">
            <Navbar />
            <Work />
            <Stripes />
            <Products />
            <Marquees />
            <Cards />
            <Footer />
        </div>
    );
};

export default App;
