"use client";

import StepsBar from "@/components/stepsbar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import TourMainDataFormScreen from "./tour-main-data-form-screen";
import TourDetailsFormScreen from "./tour-details-form-screen";
import TourRouteFormScreen from "./tour-route-form-screen";
import TourCancelConditionScreen from "./tour-cancel-conditions-form-screen";
import TourPriceFormScreen from "./tour-price-form-screen";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { Icon } from "@iconify/react/dist/iconify.js";
import api from "@/lib/api-client";
import { toast } from "@/hooks/use-toast";
import { twMerge } from "tailwind-merge";

const TourCreatePage = () => {
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm();

  const handleSubmit = async (values: any) => {
    console.log(values);

    try {
      const response = await (await api.get("tours")).data;
      console.log(response);
    } catch (error: any) {
      console.error(error);
      toast({
        title: "Ошибка",
        description: error.message,
      });
    }

    setIsLoading(false);
  };

  const handleNextStep = () => {
    if (step === 5) {
      setIsLoading(true);
    }
    if (step < 6) {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-full w-full flex justify-center px-3">
      <main className="max-w-[1200px] w-full h-full mt-5 mb-60 space-y-5">
        <span className="text-2xl font-semibold">Создание тура</span>
        <StepsBar step={step} />
        <Form {...form}>
          <form
            className="space-y-5"
            onSubmit={form.handleSubmit(handleSubmit)}
          >
            {step === 1 && (
              <TourMainDataFormScreen form={form} className="space-y-5" />
            )}
            {step === 2 && (
              <TourDetailsFormScreen form={form} className="space-y-5" />
            )}
            {step === 3 && (
              <TourRouteFormScreen form={form} className="space-y-5" />
            )}
            {step === 4 && (
              <TourCancelConditionScreen form={form} className="space-y-5" />
            )}
            {step === 5 && (
              <TourPriceFormScreen form={form} className="space-y-5" />
            )}
            {step === 6 && (
              <>
                <div className="bg-card p-5 rounded-2xl w-full text-center">
                  {isLoading ? (
                    <>
                      <Icon
                        icon={"lineicons:spinner-2-sacle"}
                        className="animate-spin mx-auto w-12 h-12 mb-5 text-primary"
                      />
                      <span>Ожидайте, ваш тур отправляется на модерацию</span>
                    </>
                  ) : (
                    <>
                      <Icon
                        icon={"check-circle-fill"}
                        className="mx-auto w-12 h-12 mb-5 text-primary"
                      />
                      <span>Ваш тур успешно отправлен на модерацию!</span>
                    </>
                  )}
                </div>
                {!isLoading && (
                  <Button className="w-full" onClick={() => (window.location.href = "/")}>
                    Перейти в главное меню
                  </Button>
                )}
              </>
            )}
            <div className="flex gap-2">
              {step > 1 && step < 6 && (
                <Button
                  className="w-full bg-card text-primary hover:bg-card"
                  variant="outline"
                  type="button"
                  onClick={() => setStep(step - 1)}
                >
                  Предыдущий шаг
                </Button>
              )}
              {step < 5 && (
                <Button
                  className="w-full"
                  onClick={handleNextStep}
                  type="button"
                >
                  Следующий шаг
                </Button>
              )}
              <Button
                className={twMerge("w-full", step === 5 ? "flex" : "hidden")}
                onClick={handleNextStep}
                type="submit"
              >
                Отправить
              </Button>
            </div>
          </form>
        </Form>
      </main>
    </div>
  );
};

export default TourCreatePage;
