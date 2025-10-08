import Image from "next/image";
import React from "react";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="container mx-auto max-w-[1340px] px-8 lg:px-32 relative min-h-screen flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 lg:flex-row ">
      <Image src="/pattern-bg.png" alt="Background pattern" fill className="object-cover object-center " loading="lazy" />
      {/* Kiri */}
      <div className="relative z-10 md:w-1/2 ">
        <Image src="/camp.svg" alt="camp" width={60} height={60} />
        <h1 className="text-3xl lg:text-4xl font-poppins font-bold my-2 max-w-[370px] uppercase text-green-50">mari berkemah bersama keluarga tercinta</h1>
        <p className="text-gray-600 font-medium lg:max-w-[460px] mt-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, quaerat odio quis pariatur quae vel deleniti ut optio?</p>
        <div className="my-4 flex flex-wrap gap-2">
          <div className="flex items-center gap-2">
            {Array(6)
              .fill(1)
              .map((_, index) => (
                <Image src="/star.svg" key={index} alt="star" width={25} height={25} />
              ))}
          </div>
          <p className="font-semibold text-gray-500">
            198k.
            <span className="ml-1 underline tracking-wider">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row drop-shadow-lg">
          <Button type="button" title="Download App" variant="btn_green" icon="/tech.svg" />
          <Button type="button" title="Bagaimana kami bekerja?" icon="/play.svg" variant="btn_white" />
        </div>
      </div>

      {/* Right */}
      <div className="relative flex flex-1 items-start ">
        <div className="z-40 w-[270px] flex flex-col rounded-3xl bg-[#292C27] px-7 py-8">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="text-white font-semibold text-lg capitalize">location</p>
              <Image src="/close.svg" alt="close" width={23} height={23} loading="lazy" className="cursor-pointer" />
            </div>
            <p className="text-white font-semibold text-lg">Krui, Pesisir-Barat</p>
            <div className="flex justify-between">
              <div className="flex flex-col">
                <p className="text-white block font-medium">ketinggian</p>
                <p className="text-white font-bold">173.28 mi</p>
              </div>
              <div className="flex flex-col">
                <p className="text-white block capitalize font-medium">elevation</p>
                <p className="text-white font-bold">2.040 kilometer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
