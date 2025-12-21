import Hero from "@/components/Hero";
import Awards from "@/components/Awards";
import Story from "@/components/Story";
import SeenOn from "@/components/SeenOn";
import Menu from "@/components/Menu";
import Support from "@/components/Support";
import Sponsors from "@/components/Sponsors";
import Access from "@/components/Access";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Awards />
      <Story />
      <SeenOn />
      <Menu />
      <Support />
      <Sponsors />
      <Access />
      <Footer />
    </main>
  );
}