import { Icon } from "@iconify/react";

const TourFeatures = ({ tourfeat }: { tourfeat: TourFeaturesEntity }) => {
    const totalIcons = 5;

    const renderScoreIcons = (type: 'activity' | 'comfort') => {
        const score = type === 'activity' ? tourfeat.scoreActivity : tourfeat.scoreComfort;
        const activityLevelText = getLevelText(score);

        return (
            <div className="flex space-x-4">
                <span className="text-foreground-alternative">{activityLevelText}</span>
                <div className="flex items-center">
                    {renderIcons(score)}
                </div>
            </div>
        );
    };

    const getLevelText = (score: number) => {
        const textLevels = ["Базовый", "Средний", "Продвинутый", "Сложный"];

        if (score === 5) {
            return textLevels[3]; // Сложный
        }
        if (score === 4) {
            return textLevels[2]; // Продвинутый
        }
        if (score >= 2) {
            return textLevels[1]; // Средний
        }
        return textLevels[0]; // Базовый
    };

    const renderIcons = (score: number) => {
        return Array.from({ length: totalIcons }, (_, index) => (
            <Icon
                key={index}
                icon={index < score ? "mdi:circle-outline" : "material-symbols:circle"}
                className="text-primary"
            />
        ));
    };

    return (
        <div className="w-full py-4 px-2 sm:px-5 bg-card rounded-md grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div className="flex flex-col">
                <span className="pb-2 text-lg font-semibold">Активность</span>
                {renderScoreIcons('activity')}
            </div>

            <div className="flex flex-col">
                <span className="pb-2 text-lg font-semibold">Комфорт</span>
                {renderScoreIcons('comfort')}
            </div>

            <div className="flex flex-col">
                <span className="pb-2 text-lg font-semibold">Группа</span>
                <span className="text-foreground-alternative">До {tourfeat.gapGroup} человек</span>
            </div>

            <div className="flex flex-col">
                <span className="pb-2 text-lg font-semibold">Длительность</span>
                <span className="text-foreground-alternative">{tourfeat.tourDuration} дней</span>
            </div>

            <div className="flex flex-col">
                <span className="pb-2 text-lg font-semibold">Языки</span>
                <span className="text-foreground-alternative">{tourfeat.languageSupport}</span>
            </div>
        </div>
    );
};

export default TourFeatures;
