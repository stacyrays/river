import * as React from 'react';
import {styles} from '../helpers/tailwindstyles';

export default async function Services() {
    return (
        <div className={styles.componentContainer}>
            <div className={styles.subComponentContainer}>
                <h1 className={styles.h1}>Services</h1>
                <p>Contrary to popular belief...</p>
                <div className={styles.innerContent}>
                    <h2 className={styles.h3}>Favorite Meditation Videos</h2>
                    <iframe 
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/W19PdslW7iw?si=Q7YMXo-XGkDUaapx"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}