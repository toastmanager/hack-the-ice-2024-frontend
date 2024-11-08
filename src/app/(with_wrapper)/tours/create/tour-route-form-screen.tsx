import RouteForm from "@/components/route-form";
import { UseFormReturn } from "react-hook-form";

const TourRouteFormScreen = ({
  form,
  className = "",
}: {
  form: UseFormReturn;
  className?: string;
}) => {
  return <section className={className}>
    <RouteForm  routeform={{
      countdown: '1',
      description: '',
      etapi: 'Этап маршрута',
      routesCount: 1,
      title: 'Заголовок этапа',
      titleEtapi: 'Заголовок этапа'
    }}/>
  </section>;
};

export default TourRouteFormScreen;
