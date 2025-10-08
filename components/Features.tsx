import { FEATURES } from "@/constants";
import Image from "next/image";
import React from "react";

const Features = () => {
  return (
    <section className="flexCenter flex-col overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex justify-end group">
        <div className="flex flex-1 lg:min-h-[850px]">
          <Image src="/phone.png" alt="phone" width={430} height={700} className="feature-phone" />
        </div>
        <div className="z-20 w-full flex flex-col lg:w-[60%]">
          <div className="relative">
            <Image src="/camp.svg" alt="camp" width={50} height={50} className="absolute left-[5px] -top-6 w-10 lg:w-[50px]" />
            <h2 className="bold-40 lg:bold-64 capitalize mt-6">our features</h2>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-8 ">
            {FEATURES.map((feature) => (
              <FeatureItem key={feature.title} title={feature.title} icon={feature.icon} description={feature.description} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

type FeatureItem = {
  title: string;
  icon: string;
  // variant: string;
  description: string;
};

const FeatureItem = ({ title, icon, description }: FeatureItem) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start border-2 px-4 py-2 rounded-lg border-green-50 shadow-lg">
      <div className="bg-green-50 rounded-full p-4 md:p-6  md:mx-auto inline-block">
        <Image src={icon} alt="map" width={28} height={28} />
      </div>
      <h2 className="font-bold text-center text-xl lg:text-3xl mt-5 capitalize text-green-50">{title}</h2>
      <p className="font-medium text-base mt-5 bg-white/80 text-gray-600 lg:bg-none lg:mt-6 lg:text-center selection:text-green-50">{description}</p>
    </li>
  );
};

export default Features;
