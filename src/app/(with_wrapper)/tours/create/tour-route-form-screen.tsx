import RouteForm from "@/components/route-form";

const TourRouteFormScreen = () => {
  return <>
    <RouteForm  routeform={{
      countdown: '1',
      description: '',
      etapi: 'Этап маршрута',
      routesCount: 1,
      title: 'Заголовок этапа',
      titleEtapi: 'Заголовок этапа'
    }}/>
  </>;
};

export default TourRouteFormScreen;
