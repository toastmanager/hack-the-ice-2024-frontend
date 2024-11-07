import TourImages from "@/components/imagedropper";
import TourStartEndInput from "@/components/journey-input";
import TourButton from "@/components/tour-button";
import TourMainInfoInputs from "@/components/tour-info";

const TourMainDataFormScreen = () => {
  return <>
    <TourMainInfoInputs />
    <TourStartEndInput />
    <TourImages />
    <TourButton tourbutton={{
      title: 'Отзывы о туре',
      description: 'Если у вас есть отзывы в других сервисах, пожалуйста, напишите их тут',
      btnText: 'Добавить отзыв',
    }}/>
  </>;
};

export default TourMainDataFormScreen;
