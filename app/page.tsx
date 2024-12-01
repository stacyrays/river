'use client'
import Hero from "./components/Hero/page";
import HabitsContainer from "./components/Habits/page";


export default function Home() {

  return (
    <div className="w-screen">
      <main className="flex flex-col items-center sm:items-center">
        <Hero />
        <HabitsContainer />
      </main>
    </div>
  );
}
