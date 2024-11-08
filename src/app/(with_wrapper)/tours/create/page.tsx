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

const TourCreatePage = () => {
  const [step, setStep] = useState(1);
  const form = useForm();

  const handleSubmit = (values: any) => {
    console.log(values)
  };

  const handleNextStep = () => {
    if (step <= 5) {
      setStep(step + 1);
    }
  };

  return (
    <div className="min-h-full w-full flex justify-center px-3">
      <main className="max-w-[1200px] w-full h-full mt-5 mb-60 space-y-5">
        <span className="text-2xl font-semibold">Создание тура</span>
        <StepsBar step={step} />
        <Form {...form}>
          <form className="space-y-5" onSubmit={form.handleSubmit(handleSubmit)}>
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
            <div className="flex gap-2">
              {step > 1 && (
                <Button
                  className="w-full bg-card text-primary hover:bg-card"
                  variant="outline"
                  type="button"
                  onClick={() => setStep(step - 1)}
                >
                  Предыдущий шаг
                </Button>
              )}
              <Button
                className="w-full"
                onClick={handleNextStep}
                type={step === 6 ? "submit" : "button"}
              >
                Следующий шаг
              </Button>
            </div>
          </form>
        </Form>
      </main>
    </div>
  );
};

export default TourCreatePage;
