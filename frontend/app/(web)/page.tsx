import About from "./../_components/_sections/about/About";
import Activities from "./../_components/_sections/activity/ActivitySection";
import ContactSection from "./../_components/_sections/contact/ContactSection";
import EventsSection from "./../_components/_sections/events/EventsSection";
import Hero from "./../_components/_sections/hero/Hero";
import Members from "./../_components/_sections/members/Members";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Activities />
      <About />
      <EventsSection />
      <ContactSection />
      {/*
      <Members />
   
     

  
  
    */}
    </main>
  );
}
