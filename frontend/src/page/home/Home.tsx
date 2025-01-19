import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Hero from "../../components/hero/Hero";
import Skills from "../../components/skills/Skills";
import Experience from "../../components/experience/Experience";
import { HomeProps } from "../../types/Home.type";
import Portifolio from "../../components/portifolio/Portifolio";


const Home: React.FC<HomeProps> = ({ themeDark, value }) => {
  return (
    <>
      <NavBar themeDark={themeDark} value={value} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Portifolio />
      </main>
    </>
  );
};

export default Home;
