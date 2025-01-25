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
import Cursor from './components/Cursor';

const App = () => {
    const scroll = new LocomotiveScroll();
    return (
        <div className="h-full main overflow-x-hidden w-full text-white bg-[#0c0c0c]">
            <div className="relative cursor-none">
                <Cursor />
                <Navbar />
                <Work />
                <Stripes />
            </div>
            <Products />
            <Marquees />
            <Cards />
            <Footer />
        </div>
    );
};

export default App;
