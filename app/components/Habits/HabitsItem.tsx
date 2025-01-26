import SmokingIcon from '../../../public/images/svgs/SmokingIcon';
import FastFoodIcon from '../../../public/images/svgs/FastFoodIcon';
import CoffeeIcon from '../../../public/images/svgs/CoffeeIcon';
import './styles.css';

interface HabitsItemProps {
    icon: string,
    title: string,
    description: string,
}

const HabitsItem: React.FC<HabitsItemProps> = ({icon, title, description}) => {
    const habitIcon = () => {
        switch (icon) {
            case 'SmokingIcon':
                return <SmokingIcon />;
            case 'FastFoodIcon':
                return <FastFoodIcon />;
            case 'CoffeeIcon':
                return <CoffeeIcon />;
            default:
                return <SmokingIcon />;
        }
    }
    return (
        <div className="flex flex-col dark:bg-white basis-1/3 rounded-3xl border mx-5 px-6 pb-6 mb-5">
            {/* {habitIcon()} */}
            <h2 className="lg:text-2xl md:text-xl sm:text-l sm:text-left xs:text-2xl font-bold font-[family-name:var(--font-geist-mono)] mb-5 dark:text-sky-700 mt-5">{title}</h2>
            <p className="font-[family-name:var(--font-geist-mono)]">{description}</p>
        </div>     
    );
};

export default HabitsItem;