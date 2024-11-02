import React from 'react';
import Image from "next/image";
import Link from 'next/link'

const Hero = () => {
  return (
    <div
        className={`flex w-screen justify-left bg-[url('/images/hero4.jpg')] w-[500px] h-[700px] bg-no-repeat bg-cover bg-center`} >
        <div className="flex flex-row hero-content-container w-screen">
            <div className="flex flex-col lg:basis-1/3 md:basis-1/2 sm:basis-1/2 xs:basis-1/2 mt-16 lg:mx-20 md:mx-20 sm:mx-10 xs:mx-10">
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
            <div className="lg:basis-2/3 md:basis-1/2 sm:basis-1/2 xs:basis-1/2">
            </div>
        </div>
    </div>
  );
};

export default Hero;