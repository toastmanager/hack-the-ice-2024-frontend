import { twMerge } from "tailwind-merge";

const StepsBar = ({ step }: { step: number }) => {
  return (
    <div
      className={twMerge(
        `w-full h-12 bg-card rounded-lg bg-gradient-to-r from-primary to-card p-[2px]`,
        `to-${step * 20}%`
      )}
    >
      <div className="w-full h-full bg-card rounded-md flex items-center px-3">
        <div className="w-full text-center">
          <span className={step === 1 ? "text-primary" : ""}>
            1.Основная информация &gt;
          </span>
        </div>
        <div className="w-full text-center">
          <span className={step === 2 ? "text-primary" : ""}>
            2.Описание маршрута &gt;
          </span>
        </div>
        <div className="w-full text-center">
          <span className={step === 3 ? "text-primary" : ""}>
            3.Маршрут &gt;
          </span>
        </div>
        <div className="w-full text-center">
          <span className={step === 4 ? "text-primary" : ""}>
            4.Условие отмены &gt;
          </span>
        </div>
        <div className="w-full text-center">
          <span className={step === 5 ? "text-primary" : ""}>
            5.Цены и даты &gt;
          </span>
        </div>
      </div>
    </div>
  );
};

export default StepsBar;
