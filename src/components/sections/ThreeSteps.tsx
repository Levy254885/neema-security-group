"use client";

import { Phone, FileCheck, Briefcase } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Let Us Call You",
    text: "Send us a request and we will call you to help assess your security needs.",
    icon: Phone,
  },
  {
    number: "2",
    title: "Free Survey and Quote",
    text: "Receive a free security quotation by phone or at your location from one of our security experts.",
    icon: FileCheck,
  },
  {
    number: "3",
    title: "Deployment",
    text: "With our professional team you will be set up with reliable security coverage suited to your site.",
    icon: Briefcase,
  },
];

export default function ThreeSteps() {
  return (
    <section className="bg-cream py-14 sm:py-16 lg:py-20">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6">
        <h2 className="text-center text-[20px] sm:text-[24px] lg:text-[26px] font-bold text-black uppercase tracking-wide mb-10 sm:mb-14">
          Get Secured in 3 Easy Steps
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-8">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.number} className="text-center">
                <div className="mx-auto w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] rounded-full bg-red flex items-center justify-center mb-5">
                  <Icon size={36} className="text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-[14px] sm:text-[15px] font-bold text-red uppercase tracking-wide">
                  {step.number}. {step.title}
                </h3>
                <p className="mt-2 text-[13px] text-gray leading-relaxed max-w-[240px] mx-auto">
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
