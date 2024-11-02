import React from 'react';
import SmokingIcon from '../../public/images/svgs/SmokingIcon';
import FastFoodIcon from '../../public/images/svgs/FastFoodIcon';
import CoffeeIcon from '../../public/images/svgs/CoffeeIcon';

const HabitsContainer = () => {
  return (
    <div className='flex w-screen justify-center -mt-36'>
        <div className="flex xs:flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row hero-content-container w-screen xs:mx-4 sm:mx-4 md:mx-4 lg:mx-16">
            <div className="flex flex-col items-center justify-center dark:bg-white basis-1/3 rounded-3xl border mx-5 p-10">
                <SmokingIcon />
                <h2 className="list-inside list-decimal lg:text-2xl md:text-xl sm:text-l xs:text-2xl font-bold sm:text-left font-[family-name:var(--font-geist-mono)] mb-5 dark:text-sky-700 mt-5">Smoking</h2>
                <p className="font-[family-name:var(--font-geist-mono)]">Do you struggle with quitting? A few sessions show high success rate to finish for good.</p>
            </div>
            <div className="flex flex-col items-center justify-center dark:bg-white basis-1/3 rounded-3xl border mx-5 p-10 md:mt-10 lg:mt-0">
                <FastFoodIcon />
                <h2 className="list-inside list-decimal lg:text-2xl md:text-xl sm:text-l xs:text-2xl font-bold sm:text-left font-[family-name:var(--font-geist-mono)] mb-5 dark:text-sky-700 mt-5">Over-eating</h2>
                <p className="font-[family-name:var(--font-geist-mono)]">Hard to resist grabbing something out of the fridge when you feel anxious?  A few sessions show high success rate to finish for good.</p>
            </div>
            <div className="flex flex-col items-center justify-center dark:bg-white basis-1/3 rounded-3xl border mx-5 p-10 md:mt-10 lg:mt-0">
                <CoffeeIcon />
                <h2 className="list-inside list-decimal lg:text-2xl md:text-xl sm:text-l xs:text-2xl font-bold sm:text-left font-[family-name:var(--font-geist-mono)] mb-5 dark:text-sky-700 mt-5">Caffeine</h2>
                <p className="font-[family-name:var(--font-geist-mono)]">Do you struggle sleeping well and feeling anxious? Might be time to give up or lighten up caffeine.</p>
            </div>
        </div>
    </div>
  );
};

export default HabitsContainer;