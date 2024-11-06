import TourSectionItem from "./tour-section-item";

const TourScheduleSection = ({scheduleItems}: {scheduleItems: TourSectionItemEntity[]}) => {
    return (
        <section className="bg-card rounded-2xl p-5 space-y-5">
            <span className="text-3xl font-semibold">Программа тура</span>
            <ul className="space-y-5">
                {scheduleItems.map((item) => {
                    return <li>
                        <TourSectionItem item={item} />
                    </li>
                })}
            </ul>
        </section>
    );
}
 
export default TourScheduleSection;