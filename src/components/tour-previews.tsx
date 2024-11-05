import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Button } from '@/components/ui/button';

const TourPreview = ({tourpreview}: {tourpreview: TourPreviewEntity}) => {
    const [seatCount, setSeatCount] = useState(1);

    const incrementSeat = () => {
        setSeatCount(prevCount => prevCount + 1);
    };

    const decrementSeat = () => {
        if (seatCount > 1) {
            setSeatCount(prevCount => prevCount - 1);
        }
    };

    return (
        <div className="w-full md:w-1/2 lg:w-1/4 bg-white rounded-md py-4 px-4">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between relative">
                <div className="flex space-x-2">
                {tourpreview.discount && (
                    <div className="bg-[#4ABCA9] py-1 px-2 rounded-md absolute right-1">
                    <h1 className="text-lg text-white">{tourpreview.discount}%</h1>
                    </div>
                )}
                <span className="text-xl font-semibold">{tourpreview.price} ₽</span>
                {tourpreview.previousPrice && (
                    <span className="text-sm line-through text-foreground-alternative">
                    {tourpreview.previousPrice} ₽
                    </span>
                )}
                </div>
            </div>
            <div className="w-full py-2 px-2 bg-[#F2F2F2] items-center mt-3 rounded-md flex justify-between">
                <h1>Кол-во мест:</h1>
                <div className="flex items-center space-x-4">
                    <button onClick={decrementSeat} className="bg-white py-1 px-2 w-6 rounded-md">-</button>
                    <h1>{seatCount}</h1>
                    <button onClick={incrementSeat} className="bg-white py-1 px-2 w-6 rounded-md">+</button>
                </div>
            </div>
            <div className="w-full py-3 px-2 bg-[#F2F2F2] mt-3 rounded-md">
                <h1>{tourpreview.date}</h1>
            </div>
            <div className="space-y-2 mt-3">
                <div className="w-full py-2 px-2 mt-2 rounded-md flex space-x-2">
                    <div className="flex items-center">
                        <Icon icon="solar:sun-bold" className="text-lg text-[#4ABCA9]" />
                        <h1 className="ml-2">{tourpreview.howLongDays} дня</h1>
                    </div>
                    <div className="flex items-center">
                        <Icon icon="solar:moon-bold" className="text-lg text-[#4ABCA9]" />
                        <h1 className="ml-2">{tourpreview.howLongNights} ночи</h1>
                    </div>
                </div>
                <Button
                    variant="outline"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary hover:opacity-85 hover:text-primary-foreground"
                >
                    Забронировать
                </Button>
            </div>
        </div>
    );
};

export default TourPreview;
