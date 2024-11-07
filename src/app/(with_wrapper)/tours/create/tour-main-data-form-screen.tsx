import TourImages from "@/components/imagedropper";
import TourButton from "@/components/tour-button";

const TourMainDataFormScreen = () => {
  return <>
    <TourImages />
    <TourButton tourbutton={{
      title: 'Отзывы о туре',
      description: 'Если у вас есть отзывы в других сервисах, пожалуйста, напишите их тут',
      btnText: 'Добавить отзыв',
    }}/>
  </>;
};

export default TourMainDataFormScreen;
