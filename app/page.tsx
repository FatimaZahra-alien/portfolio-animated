"use client";
import HeroSection from "@/components/HeroSection";
import Aboutsection from "@/components/Aboutsection";
import Servicesection from "@/components/Servicesection";
import Worksection from "@/components/Worksection";
import Stacksection from "@/components/Stacksection";
import Contactsection from "@/components/Contactsection";

export default function Home() {
  return (
    <main>
      <HeroSection />
     
      <Servicesection />
       <Aboutsection />
      <Worksection />
      <Stacksection />
      <Contactsection />
    </main>
  );
}