import * as React from 'react';
import {styles} from '../helpers/tailwindstyles';

export default async function How() {
    return (
        <div className={styles.componentContainer}>
            <div className={styles.subComponentContainer}>
                <h1 className={styles.h1}>How It Helps</h1>
                <p>Contrary to popular belief...</p>
            </div>
        </div>
    );
}