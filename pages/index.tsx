import About from "@/components/About";
import ExperienceCard from "@/components/ExperienceCard";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Head from "next/head";


export default function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    // first prevent the default behavior
    e.preventDefault();
    // get the href and remove everything before the hash (#)
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");
    // get the element by id and use scrollIntoView
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-[#1E1E1E] text-white h-screen snap-mandatory overflow-y-scroll overflow-x-hidden z-0  scrollbar-track-gray-400/2 scrollbar-thumb-[#f7ab0a] scrollbar-thin">
      <Head>
        <title>Muyiwa Portofolio</title>
      </Head>

      <section id="header">
        <Header />
      </section>

      <section id="hero" className="lg:mt-[240px] mt-[170px]">
        <Hero />
      </section>

      <section id="about" className="lg:mt-[240px] mt-[170px]">
        <About />
      </section>

      <section id="skills" className="lg:mt-[240px] mt-[170px]">
        <Skills />
      </section>

      <section id="experience" className="lg:mt-[240px] mt-[170px]">
        <ExperienceCard />
      </section>

      <section id="#footer" className="lg:mt-[240px] mt-[170px]">
        <Footer />
      </section>
    </div>
  );
}
