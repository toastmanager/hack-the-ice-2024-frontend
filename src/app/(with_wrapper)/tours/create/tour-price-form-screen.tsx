import TourPrice from "@/components/tourprice";
import { UseFormReturn } from "react-hook-form";

const TourPriceFormScreen = ({
  form,
  className = "",
}: {
  form: UseFormReturn;
  className?: string;
}) => {
  return <section className={className}>
    <TourPrice />
  </section>;
};

export default TourPriceFormScreen;
