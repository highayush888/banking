
import React from 'react';

const ICONS = [
    'https://placehold.co/50',
    'https://placehold.co/50',
    'https://placehold.co/50',
    'https://placehold.co/50',
    'https://placehold.co/50',
    'https://placehold.co/50',
    'https://placehold.co/50',
    'https://placehold.co/50'
];

const iconClasses = "w-8 h-8";
const containerClasses = "flex justify-between items-center bg-zinc-100 dark:bg-zinc-800 p-4 mb-4";

const Icon = ({ src }) => {
    return <img alt="icon" src={src} className={iconClasses} />;
};

const IconRow = () => {
    return (
        <div className={containerClasses}>
            <div className="flex items-center overflow-hidden">
                {ICONS.map((icon, index) => (
                    <Icon key={index} src={icon} />
                ))}
            </div>
        </div>
    );
};

const IconsContainer = () => {
    return (
        <div className="flex flex-col items-center">
            <IconRow />
            <IconRow />
            <IconRow />
            <IconRow />
        </div>
    );
};

const App = () => {
    return <IconsContainer />;
};

export default App;
