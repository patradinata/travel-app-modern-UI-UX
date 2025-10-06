import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import MenuMobile from "@/components/MenuMobile";

export default function Home() {
  return (
    <>
      <MenuMobile />
      <Hero />

      <Camp />
      <Guide />
      <Features />
      <GetApp />
    </>
  );
}
