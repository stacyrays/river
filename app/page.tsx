import Hero from "./components/Hero/page";
import HabitsContainer from "./components/Habits/page";

export default function Home() {

  const items = [
    {
      title: "You deserve to be free from unwanted habits",
      image: "bg-[url('/images/hero1.jpg')]",
      link: "/how",
    },
    {
      title: "You deserve to be free from unwanted habits",
      image: "bg-[url('/images/hero2.jpg')]",
      link: "/how",
    },
    {
      title: "You deserve to be free from unwanted habits",
      image: "bg-[url('/images/hero3.jpg')]",
      link: "/how",
    },
    {
      title: "You deserve to be free from unwanted habits",
      image: "bg-[url('/images/hero4.jpg')]",
      link: "/how",
    },
  ]

  return (
    <div className="w-screen">
      <main className="flex flex-col items-center sm:items-center">
        <Hero items={items} />
        <HabitsContainer />
      </main>
    </div>
  );
}
