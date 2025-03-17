"use client"
import Hero from "./components/Hero";
//import { CardStackDemo } from "./components/Testimonials";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div>
     <Hero/>
     <Services/>
     <Skills/>
     {/* <CardStackDemo/> */}
     <Contact/>
    </div>
  );
}
