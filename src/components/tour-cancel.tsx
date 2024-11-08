import React, { useState } from "react";

const TourCancel = () => {
  const [selectedDiv, setSelectedDiv] = useState<number | null>(null);

  const handleDivClick = (index: number) => {
    setSelectedDiv(selectedDiv === index ? null : index);
  };

  const getBorderClass = (index: number) => {
    return selectedDiv === index ? "border border-green-500" : "";
  };

  return (
    <div className="bg-card text-card-foreground w-2/3 rounded-3xl py-6 px-4 space-y-4">
    <span className="text-2xl font-semibold">Условия отмены</span>
    <div
      className={`bg-[#F2F2F2] w-full px-4 rounded-md border ${getBorderClass(1)}`} /* border changes div?? */
      onClick={() => handleDivClick(1)}
    >
      <div className="flex items-center mt-4">
        <span className="text-2xl font-semibold py-3 px-3">Гибкие</span>
      </div>
      <div className="grid grid-cols-3">
        <div className="p-4">
          <span className="font-semibold">100% возврат предоплаты</span>
          <p className="text-gray-400 text-sm">Не позднее чем за 15 дней до начала тура или в течение 24 часов после бронирования.</p>
        </div>
        <div className="p-4">
          <span className="font-semibold">Бесплатная отмена</span>
          <p className="text-gray-400 text-sm">Не позднее чем за 15 дней до начала тура или в течение 24 часов после бронирования.</p>
        </div>
        <div className="p-4">
          <span className="font-semibold">На выбор даты и маршрута</span>
          <p className="text-gray-400 text-sm">Не позднее чем за 15 дней до начала тура или в течение 24 часов после бронирования.</p>
        </div>
      </div>
    </div>
    <div
      className={`bg-[#F2F2F2] w-full px-4 rounded-md border ${getBorderClass(2)}`}
      onClick={() => handleDivClick(2)}
    >
      <div className="flex items-center mt-4">
        <span className="text-2xl font-semibold py-3 px-3">Умеренные</span>
      </div>
      <div className="grid grid-cols-3">
      <div className="p-4">
          <span className="font-semibold">100% возврат предоплаты</span>
          <p className="text-gray-400 text-sm">Не позднее чем за 15 дней до начала тура или в течение 24 часов после бронирования.</p>
        </div>
        <div className="p-4">
          <span className="font-semibold">Бесплатная отмена</span>
          <p className="text-gray-400 text-sm">Не позднее чем за 15 дней до начала тура или в течение 24 часов после бронирования.</p>
        </div>
        <div className="p-4">
          <span className="font-semibold">На выбор даты и маршрута</span>
          <p className="text-gray-400 text-sm">Не позднее чем за 15 дней до начала тура или в течение 24 часов после бронирования.</p>
        </div>
      </div>
    </div>
    <div
      className={`bg-[#F2F2F2] w-full px-4 rounded-md border ${getBorderClass(3)}`}
      onClick={() => handleDivClick(3)}
    >
      <div className="flex items-center mt-4">
        <span className="text-2xl font-semibold py-3 px-3">Строгие</span>
      </div>
      <div className="grid grid-cols-3">
      <div className="p-4">
          <span className="font-semibold">100% возврат предоплаты</span>
          <p className="text-gray-400 text-sm">Не позднее чем за 15 дней до начала тура или в течение 24 часов после бронирования.</p>
        </div>
        <div className="p-4">
          <span className="font-semibold">Бесплатная отмена</span>
          <p className="text-gray-400 text-sm">Не позднее чем за 15 дней до начала тура или в течение 24 часов после бронирования.</p>
        </div>
        <div className="p-4">
          <span className="font-semibold">На выбор даты и маршрута</span>
          <p className="text-gray-400 text-sm">Не позднее чем за 15 дней до начала тура или в течение 24 часов после бронирования.</p>
        </div>
      </div>
    </div>
    <div
      className={`bg-[#F2F2F2] w-full px-4 rounded-md border ${getBorderClass(4)}`}
      onClick={() => handleDivClick(4)}
    >
      <div className="flex items-center mt-4">
        <span className="text-2xl font-semibold py-3 px-3">Очень строгие</span>
      </div>
      <div className="grid grid-cols-3">
      <div className="p-4">
          <span className="font-semibold">Полное ограничение</span>
          <p className="text-gray-400 text-sm">В течение 24 часов после бронирования путешественнику возвращается 100%, по истечении этого срока путешественнику не возвращаются средства</p>
        </div>
        <div className="p-4">
          <span className="font-semibold">ТЕКСТ ПОМЕНЯЙТЕ ПЖ МНЕ ЛЕНЬ</span>
          <p className="text-gray-400 text-sm">вова</p>
        </div>
        <div className="p-4">
          <span className="font-semibold">На выбор даты и маршрута</span>
          <p className="text-gray-400 text-sm">Не позднее чем за 15 дней до начала тура или в течение 24 часов после бронирования.</p>
        </div>
      </div>
    </div>
  </div>
);

};

export default TourCancel;
