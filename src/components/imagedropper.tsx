import { Icon } from "@iconify/react";

const TourImages = () => {
  return (
    <div className="bg-card text-card-foreground w-full rounded-3xl p-5">
      <span className="text-2xl font-semibold">Фотографии тура</span>

      <div className="space-y-3 pt-4">
        <span className="">
          Сделайте ваш тур привлекательнее: загрузите атмосферные фотографии в
          высоком качестве. Поддерживаемые форматы: JPG, JPEG, PNG, WEBP.
          Рекомендуемое минимальное разрешение 960x720 px. Размер файла до 10MB
        </span>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-[#F2F2F2]"
          >
            <div className="flex flex-col items-center">
              <div className="rounded-full bg-white px-3">
                <Icon
                  className="w-24 h-full mb-4 text-[#F2F2F2]"
                  icon="mdi-light:camera"
                />
              </div>

              <span className="font-semibold">
                Загрузите одну или несколько фотографии
              </span>
            </div>
            <input id="dropzone-file" type="file" className="hidden" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default TourImages;
