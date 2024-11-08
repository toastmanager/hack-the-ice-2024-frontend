import TourImages from "@/components/imagedropper";
import TourStartEndInput from "@/components/journey-input";
import TourButton from "@/components/tour-button";
import TourMainInfoInputs from "@/components/tour-info";
import { UseFormReturn } from "react-hook-form";

const TourMainDataFormScreen = ({
  form,
  className = "",
}: {
  form: UseFormReturn;
  className?: string;
}) => {
  return (
    <section className={className}>
      <TourMainInfoInputs form={form} />
      <TourStartEndInput form={form} />
      <TourImages />
      <TourButton
        tourbutton={{
          title: "Отзывы о туре",
          description:
            "Если у вас есть отзывы в других сервисах, пожалуйста, напишите их тут",
          btnText: "Добавить отзыв",
        }}
      />
    </section>
  );
};

export default TourMainDataFormScreen;
