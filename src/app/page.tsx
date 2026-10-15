import { Hero } from "@/components/sections/hero/Hero";
import { Audiences } from "@/components/sections/Audiences";
import { Interventions } from "@/components/sections/Interventions";
import { Architecture } from "@/components/sections/Architecture";
import { Projects } from "@/components/sections/Projects";
import { Missions } from "@/components/sections/Missions";
import { Stack } from "@/components/sections/Stack";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Audiences />
      <Interventions />
      <Architecture />
      <Projects />
      <Missions />
      <Stack />
      <Contact />
    </>
  );
}
