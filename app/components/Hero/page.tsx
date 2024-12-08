'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import './styles.css';

//2px 2px 4px rgba(255, 255, 255, 0.5)

// const Hero: React.FC<CarouselProps> = ({items, interval = 5000}) => {
export default function Hero() {
    const [activeIndex, setActiveIndex] = useState(0);
    const items = [
        {
          title: "You deserve to be free from unwanted habits",
          image: 'bg-[url("/images/hero1.jpg")]',
          link: "/how",
        },
        {
          title: "You deserve to be free from unwanted habits",
          image: 'bg-[url("/images/hero2.jpg")]',
          link: "/how",
        },
        {
          title: "You deserve to be free from unwanted habits",
          image: 'bg-[url("/images/hero3.jpg")]',
          link: "/how",
        },
        {
          title: "You deserve to be free from unwanted habits",
          image: 'bg-[url("/images/hero4.jpg")]',
          link: "/how",
        },
      ]

    useEffect(() => {
        const timer = setInterval(() => {
          setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, 5000);
    
        return () => clearInterval(timer);
      }, [items, 5000]);

    return (
        <div className="flex flex-col w-screen justify-left">
            {/* <div className='carousel'>
                {items.map((item, index) => (
                    <div
                        key={index}
                        style={{position: 'absolute', zIndex: 1}}
                        className={`carousel-item ${index === activeIndex ? 'active' : 'inacticve'}`}
                    >
                        <div style={{position: 'absolute', zIndex: 1}} className={`flex w-screen justify-left ${items[index].image} w-[500px] h-[700px] bg-no-repeat bg-center bg-cover`} />
                    </div>
                ))}
            </div> */}
            <div className='hero-background' />

            <div className="flex flex-row hero-content-container w-screen">
                <div className="hero-bottom-content">
                    <h1 className='heroh1'>
                        You deserve to be free from unwanted habits
                    </h1>
                    <Link
                        className="rounded-full bg-amber-500 transition-colors flex items-center justify-center hover:bg-amber-600 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-44 text-white"
                        href="/how"
                    >
                        How it works
                    </Link>
                </div>
            </div>
        </div>
    );
};

// export default Hero;
