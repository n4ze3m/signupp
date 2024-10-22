"use client";

import { useCallback, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { FieldAndStep } from "./steps/fieldAndStep";
import { steps as stepsData } from "@/lib/steps";
import { Loader2 } from "lucide-react";
import { Field } from "@/lib/data/type";

export function SignupForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState(stepsData);
  const [isLoading, setIsLoading] = useState(false);
  const [isSendingMagicLink, setIsSendingMagicLink] = useState(false);
  const [showRickRoll, setShowRickRoll] = useState(false);

  const handleNext = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      if (isLoading || isSendingMagicLink) {
        return;
      }
      if (currentStep < steps.length - 1) {
        setIsLoading(true);
        setTimeout(() => {
          setCurrentStep((prevStep) => prevStep + 1);
          setIsLoading(false);
        }, 5000);
      } else {
        setIsSendingMagicLink(true);
        setTimeout(() => {
          setShowRickRoll(true);
          setIsSendingMagicLink(false);
          setCurrentStep(0);
        }, 5000);
      }
    },
    [currentStep, steps, isLoading, isSendingMagicLink]
  );

  if (showRickRoll) {
    return (
      <div className="my-6 sm:mx-auto sm:w-full sm:max-w-lg">
        <iframe
          width="100%"
          height="315"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
          title="Rick Roll"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <Button
          onClick={() => setShowRickRoll(false)}
          className="w-full mt-4"
        >
          Want to try sign up once more?
        </Button>
      </div>
    );
  }
  return (
    <ScrollArea className="flex-grow ">
      <Card className="my-6 sm:mx-auto sm:w-full sm:max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">
            Sign Up
          </CardTitle>
          <CardDescription className="text-center italic">
            {"Fillout the form below to get started."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleNext} className="space-y-4">
            {steps[currentStep].map(
              (step: { fields: Field[] }, index: number) => (
                <FieldAndStep handleValidation={(e) => {}} key={index} fields={step.fields} />
              )
            )}
            <Button
              type="submit"
              className="w-full"
              disabled={isLoading || isSendingMagicLink}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Loading...
                </>
              ) : isSendingMagicLink ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending Magic Link...
                </>
              ) : currentStep < steps.length - 1 ? (
                "Next"
              ) : (
                "Send Me Magic Link"
              )}
            </Button>
          </form>
          <span className="text-[10px] italic text-center mt-3 text-gray-500 block">
            All data stays on your device. Nothing is saved externally.
          </span>
        </CardContent>
      </Card>
    </ScrollArea>
  );
}
