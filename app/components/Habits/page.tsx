import React from 'react';
import HabitsItem from './HabitsItem';
import './styles.css';

const HabitsContainer = () => {
    const habitItems = [
        {
            icon: 'SmokingIcon',
            title: 'Smoking',
            description: 'Do you struggle with quitting? A few sessions show high success rate to finish for good.'
        },
        {
            icon: 'FastFoodIcon',
            title: 'Over-eating',
            description: 'Hard to resist grabbing something out of the fridge when you feel anxious?  A few sessions show high success rate to finish for good.'
        },
        {
            icon: 'CoffeeIcon',
            title: 'Caffeine',
            description: 'Do you struggle sleeping well and feeling anxious? Might be time to give up or lighten up caffeine.'
        }
    ]
    return (
        <>
            <div className="container">
                <h2 className="hph2">Our treatment process helps squash unhealthy habits like these:</h2>
                <div className="habit-items">
                    {habitItems.map((item) => (<HabitsItem icon={item.icon} title={item.title} description={item.description} key={item.title} />))}
                </div>
            </div>
        </>
    );
};

export default HabitsContainer;