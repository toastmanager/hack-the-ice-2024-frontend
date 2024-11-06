import React, { useState, useEffect } from 'react';

const TourSchedule = ({ schedule }: { schedule: ScheduleEntity }) => {
    const [showFullText, setShowFullText] = useState(false);
    const [isTextOverflowing, setIsTextOverflowing] = useState(false);

    const toggleShowFullText = () => {
        setShowFullText(!showFullText);
    };

    useEffect(() => {
        const descriptionElement = document.getElementById('description-text');

        if (descriptionElement) {
            const isOverflowing = descriptionElement.scrollHeight > descriptionElement.clientHeight;
            setIsTextOverflowing(isOverflowing);
            if (!isOverflowing) {
                setShowFullText(false);
            }
        }
    }, [schedule.description]);

    return (
        <div className="w-3/5 bg-white rounded-md h-96 py-4 px-6">
            <span className="text-3xl font-semibold">Программа тура</span>
            <div className="flex">
                <div className="w-1/3 mt-5">
                    <h1 className="py-2 border rounded-full w-2/5 text-center">День {schedule.day}</h1>
                </div>
                <div className="w-2/3 max-w-2xl mt-5">
                    <h1 className="mb-4 text-xl font-bold">{schedule.title}</h1>
                    
                    <div className="flex space-x-4 w-2/3">
                        <img src={schedule.imageUrl} alt="" className="w-36 rounded-md"/>
                        <img src={schedule.imageUrl} alt="" className="w-36 rounded-md"/>
                        <img src={schedule.imageUrl} alt="" className="w-36 rounded-md"/>
                    </div>
                    
                    <div className="font-normal text-gray-700 pt-5 overflow-hidden" id="description-text" style={{ maxHeight: showFullText ? 'none' : '100px', transition: 'max-height 0.3s ease' }}>
                        {schedule.description}
                    </div>
                    
                    {isTextOverflowing && (
                        <button onClick={toggleShowFullText} className="text-blue-500 underline mt-2">
                            {showFullText ? 'бебру нюхай' : 'Развернуть описание'}
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TourSchedule;