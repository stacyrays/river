import * as React from 'react';
import {styles} from '../helpers/tailwindstyles';

export default async function How() {
    return (
        <div className={styles.componentContainer}>
            <div className={styles.subComponentContainer}>
                <h1 className={styles.h1}>How It Works</h1>
                <h3 className={styles.h3}> Neuro Linguistic Programming</h3>
                <p className="mb-5">NLP stands for Neuro Linguistic Programming and is a tool for repatterning your thoughts on a deep and unconscious level. It allows you to create new behaviors and new strategies for navigating your world. By negotiating with the unconscious mind, rapid or instantaneous changes are generated. By understanding how you make a map of your particular reality, a skilled NLP practitioner can shift you from your present state to one that allows you to easily change your patterns and behaviors. </p>

                <h3 className={styles.h3}>Hypnosis</h3>
                <p className="mb-5">Hypnosis refers to an altered state of consciousness. You experience this all the time - have you ever found yourself arriving at your destination but don’t remember the drive? Or zoning out during a tv show or lecture? This is a hypnotic state where your conscious mind drifts, and your unconscious mind can move freely and create new connections, much like a dream state.
                In the hands of a trained hypnotist, you can be guided into a deeply relaxed state, allowing you to make changes at a deep level using NLP.</p>
            </div>
        </div>
    );
}