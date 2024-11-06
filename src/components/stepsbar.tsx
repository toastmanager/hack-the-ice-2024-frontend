import { Icon } from "@iconify/react";

const StepsBar = ({ stepbar }: { stepbar: StepBarEntity }) => {
  return (
    <div className={`static w-${stepbar.step}/5 h-12 bg-gradient-to-r from-[#4ABCA9] to-transparent rounded-l-lg`}>{/* Set 'to-transparent' here */}
      <div className="flex py-0.5 w-full">
        <div className="grid grid-cols-5 absolute p-2 ml-0.5 bg-white w-full rounded-md h-11 items-center gap-5 pl-12">
          <span className={stepbar.step === 1 ? "text-[#4ABCA9]" : ""}>1.Основная информация &gt;</span>
          <span className={stepbar.step === 2 ? "text-[#4ABCA9]" : ""}>2.Описание маршрута &gt;</span>
          <span className={stepbar.step === 3 ? "text-[#4ABCA9]" : ""}>3.Маршрут &gt;</span>
          <span className={stepbar.step === 4 ? "text-[#4ABCA9]" : ""}>4.Условие отмены &gt;</span>
          <span className={stepbar.step === 5 ? "text-[#4ABCA9]" : ""}>5.Цены и даты &gt;</span>
        </div>
      </div>
    </div>
  );
};

export default StepsBar;
