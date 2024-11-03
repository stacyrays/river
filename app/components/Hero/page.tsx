'use client'
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from 'next/link'
import './styles.css';

interface CarouselProps {
    items: any[]; // Replace 'any' with the type of your items
    interval?: number; // Time in milliseconds between transitions
}

const Hero: React.FC<CarouselProps> = ({items, interval = 5000}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, interval);
    
        return () => clearInterval(timer);
      }, [items, interval]);

    return (
        <div className="flex w-screen justify-left">
            <div className="flex flex-row hero-content-container w-screen">
                <div style={{zIndex: '1000'}} className="flex flex-col xl:basis-1/3 lg:basis-1/3 md:basis-1/2 sm:basis-1/2 xs:basis-1/2 mt-16 lg:mx-20 md:mx-20 sm:mx-10 xs:mx-10">
                    <div className="list-inside list-decimal lg:text-4xl md:text-4xl sm:text-3xl xs:text-2xl font-bold sm:text-left font-[family-name:var(--font-geist-mono)] mb-5 dark:text-sky-700">
                        <h1>
                            You deserve to be free from <span className="dark:text-sky-500">unwanted habits</span>
                        </h1>
                    </div>
                    <Link
                        className="rounded-full border border-solid border-black/[.08] bg-amber-500 light:border-white/[.145] transition-colors flex items-center justify-center hover:bg-amber-600 hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                        href="/how"
                    >
                        How it works
                    </Link>
                </div>
                {items.map((item, index) => (
                <div
                    key={index}
                    style={{position: 'absolute', zIndex: 1}}
                    className={`carousel-item ${index === activeIndex ? 'active' : 'inacticve'}`}
                >
                    <div style={{position: 'absolute', zIndex: 1}} className={`flex w-screen justify-left ${items[index].image} w-[500px] h-[700px] bg-no-repeat bg-center bg-cover`} />
                </div>
                ))}
            </div>
        </div>
    );
};

export default Hero;
