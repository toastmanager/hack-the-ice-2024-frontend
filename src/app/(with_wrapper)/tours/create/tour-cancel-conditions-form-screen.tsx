import TourCancel from "@/components/tour-cancel";
import { UseFormReturn } from "react-hook-form";

const TourCancelConditionScreen = ({
  form,
  className = "",
}: {
  form: UseFormReturn;
  className?: string;
}) => {
  return (
    <section className={className}>
      <TourCancel />
    </section>
  );
};

export default TourCancelConditionScreen;
