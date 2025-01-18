import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Hero from "../../components/hero/Hero";
import Skills from "../../components/skills/Skills";
import Experience from "../../components/experience/Experience";
import { HomeProps } from "../../types/Home.type";


const Home: React.FC<HomeProps> = ({ themeDark, value }) => {
  return (
    <>
      <NavBar themeDark={themeDark} value={value} />
      <main>
        <Hero />
        <Skills />
        <Experience />
      </main>
    </>
  );
};

export default Home;
