"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import type React from "react";

interface ParallaxProps {
    children: React.ReactNode;
}

export const Parallax = ({ children }: ParallaxProps) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

    return (
        <motion.div ref={ref} style={{ y }}>
            {children}
        </motion.div>
    );
};
