import Image from "next/image";
import Hero from "./components/Hero";
import HabitsContainer from "./components/HabitsContainer";
// import Layout from './layout';

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
