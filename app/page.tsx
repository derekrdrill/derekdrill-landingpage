import { Contact } from "@/components/contact/Contact";
import { Hero } from "@/components/hero/Hero";
import { Services } from "@/components/services/Services";
import { Work } from "@/components/work/Work";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <Services />
      <Work />
      <Contact />
    </main>
  );
}
