import { useState } from 'react';
import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const RouteForm = ({ routeform }: { routeform: RouteFormEntity }) => {
    const [seatCounts, setSeatCounts] = useState(Array.from({ length: routeform.routesCount }, () => 1));

    const incrementSeat = (index: number) => {
        setSeatCounts(prevCounts => {
            const newCounts = [...prevCounts];
            newCounts[index] = newCounts[index] + 1;
            return newCounts;
        });
    };

    const decrementSeat = (index: number) => {
        if (seatCounts[index] > 1) {
            setSeatCounts(prevCounts => {
                const newCounts = [...prevCounts];
                newCounts[index] = newCounts[index] - 1;
                return newCounts;
            });
        }
    };

    const renderRouteSections = () => {
        return Array.from({ length: routeform.routesCount }, (_, index) => (
            <div key={index} className="space-y-4 border-b-2 border-[#1A1A1A33] mt-2">
                <div className="flex items-center gap-4 pb-4">
                    <span className="border py-2 px-4 rounded-md font-semibold">{index + 1}</span>
                    <p className="font-semibold">{routeform.etapi}</p>
                </div>
                <p className="font-semibold text-sm">{routeform.titleEtapi}</p>
                <div className="flex items-center gap-x-4">
                    <Input type="email" placeholder="Email" className="mt-1 w-full h-10" />
                    <div className="py-2 px-2 bg-background items-center rounded-md flex w-1/3 h-10">
                        <span className="text-xs w-full">{routeform.countdown}</span>
                        <div className="flex items-center space-x-4">
                            <button onClick={() => decrementSeat(index)} className="bg-card py-1 px-2 w-6 rounded-md">-</button>
                            <h1>{seatCounts[index]}</h1>
                            <button onClick={() => incrementSeat(index)} className="bg-card py-1 px-2 w-6 rounded-md">+</button>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label
                        htmlFor={`dropzone-file-${index}`}
                        className="flex flex-col items-center justify-center h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-background"
                    >
                        <div className="flex flex-col items-center">
                            <div className="">
                                <Icon className="w-24 h-full mb-4 text-[#1A1A1A33]" icon="mage:image-fill" />
                            </div>
                            <span className="font-semibold">Загрузить фотографию</span>
                        </div>
                        <input id={`dropzone-file-${index}`} type="file" className="hidden" />
                    </label>
                </div>
                <div className="grid w-full gap-1.5">
                    <Label htmlFor={`message-${index}`}>{routeform.description}</Label>
                    <Textarea placeholder="Type your message here." id={`message-${index}`} />
                </div>
            </div>
        ));
    };

    return (
        <div className="w-full">
            <div className="bg-card text-card-foreground w-full rounded-t-2xl p-6 border-b-2 border-[#1A1A1A33]">
                <div>
                    <span className="text-2xl font-bold">Опишите маршрут путешествия по этапам</span>
                </div>
            </div>
            <div className="bg-card text-card-foreground w-full p-6 space-y-4">
                {renderRouteSections()}
            </div>
            <div className='bg-card text-card-foreground w-full p-6 space-y-4 rounded-b-2xl'>
                <Button className="w-full">
                    Добавить следующий этап
                </Button>
            </div>
        </div>
    );
};

export default RouteForm;
