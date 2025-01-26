import React, { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';

import Navbar from './components/Navbar';
import Work from './components/Work';
import Stripes from './components/Stripes';
import Products from './components/Products';
import Cards from './components/Cards';
import Footer from './components/Footer';
import Cursor from './components/Cursor';
import Marqs from './components/Marqs';

const App = () => {
    const scroll = new LocomotiveScroll();
    return (
        <div className="h-full main overflow-x-hidden w-full text-white bg-[#0c0c0c]">
            {/* <Cursor /> */}
            <Navbar />
            <Work />
            <Stripes />
            <Products />
            <Marqs />
            <Cards />
            <Footer />
        </div>
    );
};

export default App;
