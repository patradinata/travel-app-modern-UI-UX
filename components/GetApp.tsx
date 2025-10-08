import React from "react";
import Button from "./Button";
import Image from "next/image";

const GetApp = () => {
  return (
    <section className="flex justify-center items-center flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-40 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:bold-64 max-w-[350px] capitalize">get for free now</h2>
          <p className="font-semibold text-lg text-gray-300">available on IOS and Android</p>
          <div className="flex w-full flex-col gap-4 whitespace-nowrap lg:flex-row">
            <Button type="button" title="App Store" icon="/apple.svg" variant="btn_white" />
            <Button type="button" title="Play Store" icon="/android.svg" variant="btn_dark_green_outline" />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={860} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
