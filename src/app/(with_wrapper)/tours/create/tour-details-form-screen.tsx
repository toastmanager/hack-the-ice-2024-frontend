import TourButton from "@/components/tour-button";
import TourDescriptionInput from "@/components/tour-description-input";

const TourDetailsFormScreen = () => {
  return (
    <>
      <TourDescriptionInput />
      <TourButton
        tourbutton={{
          title: "Впечатления",
          description:
            "Опишите основные впечатления (или места), которые ждут путешественников",
          btnText: "Добавить",
        }}
      />
      <TourButton
        tourbutton={{
          title: "Важная информация о туре",
          description:
            "Все вопросы попадут в блок “Важно”. Отметьте нужные вопросы и заполните поле с текстом или создайте свой вариант вопроса.",
          btnText: "Добавить вопрос",
        }}
      />
    </>
  );
};

export default TourDetailsFormScreen;
