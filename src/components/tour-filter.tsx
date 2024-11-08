import { useState } from 'react';
import { Icon } from "@iconify/react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Switch } from "@/components/ui/switch";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const TourFilter = () => {
  const [date, setDate] = React.useState<Date>();
  const [rating, setRating] = useState<number>(0);
  const [filledStars, setFilledStars] = useState<number>(0);
  const [showAdditionalParams, setShowAdditionalParams] = React.useState(false);


  const toggleAdditionalParams = () => {
    setShowAdditionalParams(!showAdditionalParams);
  };

  const handleStarClick = (selectedRating: number) => {
    if (selectedRating === filledStars) {
      setFilledStars(0); 
    } else {
      setFilledStars(selectedRating);
    }
    setRating(selectedRating);

  };

  return (
    <div className="bg-card text-card-foreground rounded-3xl py-6 px-4 relative pb-12">
      {/* Initial content */}
      <span className="text-2xl font-semibold "></span>

      <div className="flex items-center gap-4 py-2 relative">
        <Input
          placeholder='dinaxu'
          className="pl-12"
        />
        <Icon
          icon='il:search'
          className={`absolute left-3 top-1/2 transform -translate-y-1/2`}
          style={{ fontSize: "24px" }}
        />
      </div>

      <div className='flex gap-4'>
      <div className="flex gap-4 py-2 relative w-1/2 ">
                  <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full justify-start text-left font-normal",
                            !date && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {date ? format(date, "PPP") : <div className='pb-1'><span className='text-xs'>Когда</span><p className='text-xs'>Любое время</p></div> }
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={date}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex gap-4 py-2 relative w-1/2">
                      <Input
                          placeholder='Куда'
                          className="pl-12"
                      />
                      <Icon
                          icon='healthicons:geo-location'
                          className={`absolute left-3 top-1/2 transform -translate-y-1/2`}
                          style={{ fontSize: "24px" }}
                      />
                  </div>
      </div>

      <div className='grid grid-cols-8 gap-4'>
      <div className="flex gap-4 py-2 relative" >
                      <Input
                          placeholder='Цена от'
                         
                      />
                      
                  </div>
                  <div className="flex gap-4 py-2 relative">
                      <Input
                          placeholder='Цена до'
                          
                      />
                     
                  </div>
                  <div className="flex gap-4 py-2 relative col-span-2">
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full">
                            <option>Тип тура</option>
                            <option>Экспедиция</option>
                            <option>Маорская экскурсия</option>
                            <option>Путешествие в горы</option>
                            <option>Путешествие в джунгли</option>
                            <option>Исследование пещер</option>
                            <option>Плавание в океане</option>
                        </select>


                  </div>
                  <div className="flex gap-4 py-2 relative col-span-2">
                      <div className='w-full bg-white border rounded-md relative py-2 px-2'>
                        <span className=''>Туры со скидкой</span>
                      <Switch className='absolute right-3 top-2'/>
                      </div>
                  </div>
                  <div className="flex gap-4 py-2 relative col-span-2">

  <div className='w-full bg-white border rounded-md relative py-2 px-2'>

    <span className=''>Рейтинг</span>

    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex">

        {[1, 2, 3, 4, 5].map((starNumber) => (

          <Icon

            key={starNumber}

            icon="typcn:star"

            className={`text-xl cursor-pointer ${

              starNumber <= filledStars ? 'text-yellow-500' : 'text-gray-300'

            }`}

            onClick={() => handleStarClick(starNumber)}

          />

        ))}

      </div>

  </div>

</div>
                  
      </div>

    

      {showAdditionalParams && (
        <div className='grid grid-cols-4 gap-4'>
                  <div className="flex gap-4 py-2 relative" >
                  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full">
                            <option>Язык группы</option>
                            <option>Русский</option>
                            <option>Английский</option>
                      
                        </select>
                      
                  </div>
                  <div className="flex gap-4 py-2 relative">
                  <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full">
                            <option>Длительность</option>
                            <option>1-2 дня</option>
                            <option>3-4 дня</option>
                            <option>5-6 дней  </option>
                            <option>7+ дней</option>
                      
                        </select>
                     
                  </div>
                  <div className="flex gap-4 py-2 relative">
                        <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full">
                            <option>Тип проживания</option>
                            <option>Хостел</option>
                            <option>Отель</option>
                            <option>Гостиница</option>
                            <option>Мотель</option>
                            <option>Курорт</option>
                            <option>Пансионат</option>
                            <option>Апартаменты</option>
                            <option>Гестхаус</option>
                            <option>Бунгало</option>
                            <option>Шале</option>
                            <option>Вилла</option>
                            <option>Кемпинг</option>
                            <option>Хижина</option>
                            <option>Лодж</option>
                        </select>


                  </div>
                  <div className="flex relative p-[5px]">
                      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full">
                            <option>Активность</option>
                            <option>Базовый</option>
                            <option>Средний</option>
                            <option>Продвинутый</option>
                            <option>Сложный</option>
                        </select>
                  </div>
                  <div className="flex gap-4 relative ">
                      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full">
                            <option>Осталось мест</option>
                            <option>1-2</option>
                            <option>3-4</option>
                            <option>5-6</option>
                            <option>7+</option>
                        </select>
                  </div>
                  <div className="flex gap-4 relative ">
                      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full">
                            <option>Средний возраст группы</option>
                            <option>10-20</option>
                            <option>40+</option>
                        </select>
                  </div>
                  <div className="flex relative ">
                      <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 w-full">
                            <option>Комфорт</option>
                            <option>Низкий</option>
                            <option>Средний</option>
                            <option>Высокий</option>
                            <option>Идеальный</option>
                        </select>
                  </div>
                </div>
      )}

      <Button onClick={toggleAdditionalParams}>Все параметры</Button>
      <div className="flex gap-4 py-2 px-12 bg-background rounded-lg absolute bot-0 right-5">
        <span>Найдено 1312 туров</span>
      </div>
    </div>
    
  );
};

export default TourFilter;
 
