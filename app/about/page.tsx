import * as React from 'react';
import { styles } from '../helpers/tailwindstyles';

const NASA_KEY='F92qbLPrgBbrrhkLwVTCe76X30gAL07fCautPnkf'

export default async function About() {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`);
    const data = await response.json();

    return (
        <div className={styles.componentContainer}>
            <div className={styles.subComponentContainer}>
                <h1 className={styles.h1}>Meet River</h1>
                <p>I am a certified Hypnotherapist and NLP practitioner specializing in overcoming unwanted habits and anxieties. These tools released me from years of depression and debilitating anxiety, improved my focus, creativity, productivity, and outlook on life. It brings me great joy to help others improve their well being and change their lives for the better. </p>
                <div className={styles.innerContent}>
                    <h2 className="text-xl font-bold mb-2">NASA Astronomy Picture of the Day</h2>
                    <img src={data.url} className='w-1/2 h-1/2' />
                    <h3 className="text-lg font-bold mt-5 mb-2">{data.title}</h3>
                    <p>{data.explanation}</p>
                </div>
            </div>
        </div>
    );
}