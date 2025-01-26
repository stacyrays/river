import React from 'react';
import HabitsItem from './HabitsItem';
import './styles.css';

const HabitsContainer = () => {
    const habitItems = [
        {
            icon: 'SmokingIcon',
            title: 'Overcome unwanted habits',
            description: 'Do you struggle with habits that interferes with your health, relationships, or career? NLP is a powerful tool to help you break free.'
        },
        {
            icon: 'FastFoodIcon',
            title: 'Eliminate phobias',
            description: 'Do you have a phobia of flying? Spiders? Heights? Public speaking? NLP is a speedy way to free yourself of these fears and phobias.'
        },
        {
            icon: 'CoffeeIcon',
            title: 'Create new behaviors',
            description: 'Remove blocks to success, increase confidence, become more resourceful when faced with challenges and expand your capacity for bliss and well-being.'
        }
    ]
    return (
        <>
            <div className="container">
                <h2 className="hph2">River facilitates shifts in consciousness to create lasting change.</h2>
                <div className="habit-items">
                    {habitItems.map((item) => (<HabitsItem icon={item.icon} title={item.title} description={item.description} key={item.title} />))}
                </div>
            </div>
        </>
    );
};

export default HabitsContainer;