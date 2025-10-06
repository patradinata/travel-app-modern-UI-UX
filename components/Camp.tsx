import { PEOPLE_URL } from "@/constants";
import Image from "next/image";
import React from "react";

interface CampSite {
  backgroundImage: string;
  title: string;
  subTitle: string;
  peopleJoined: string;
}

const CampSite = ({ backgroundImage, title, subTitle, peopleJoined }: CampSite) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-3xl 2xl:rounded-4xl`}>
      <div className="flex h-full flex-col items-start justify-between px-6 p-6 lg:px-20 lg:py-10 ">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-[#30AF5B] p-2">
            <Image src="/folded-map.svg" alt="map" width={28} height={28} />
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14  text-white">{subTitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6 relative">
          <span className="flex -space-x-4 overflow-hidden relative">
            {PEOPLE_URL.map((url) => (
              <Image className="inline-block h-10 w-10 rounded-full" src={url} key={url} alt="person" width={52} height={52} />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white absolute -right-24">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="max-container padding-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <CampSite backgroundImage="bg-bg-img-2" title="Putuk Truno Camp" subTitle="Prigen, Pasuruan" peopleJoined="50+ Joined" />
        <CampSite backgroundImage="bg-bg-img-1" title="Mountain View" subTitle="Somehere in the Wilderness" peopleJoined="50+ Joined" />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-[#30AF5B] p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="regular-24 md:regular-32  text-white ">Feeling Lost and Not Knowing The Way</h2>
          <p className="regular-14 xl:regular-16 mt-5 text-white">
            starting from anxiety the climbers when visiting a new climbing location, the possibility of getting lost is very large, Thats why are here for these of you who want start an adventure.
          </p>

          <Image src={"/quote.svg"} 
          alt="quote" 
          width={70} 
          height={70} 
          className="camp-quote" />
        </div>
      </div>
    </section>
  );
};

export default Camp;
