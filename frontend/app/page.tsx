import About from "./_components/_sections/about/About";
import Activities from "./_components/_sections/activity/ActivitySection";
import Events from "./_components/_sections/events/Events";
import Hero from "./_components/_sections/hero/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Activities />
      <About />
      <Events />
    </main>
  );
}
