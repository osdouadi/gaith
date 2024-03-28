import Activities from "./_components/ActivitySection";
import Hero from "./_components/Hero";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col py-24">
      <Hero />
      <Activities />
    </main>
  );
}
