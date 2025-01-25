import React from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

const ScrollTracker = () => {
    const { scrollY } = useScroll(); // Tracks scroll position

    // Logs the latest scroll position
    useMotionValueEvent(scrollY, "change", (latest) => {
        console.log("Scroll position:", latest);
    });

    return (
        <div style={{ height: "200vh", background: "#f0f0f0", padding: "20px" }}>
            <h1>Scroll to see the console logs</h1>
        </div>
    );
};

export default ScrollTracker;
