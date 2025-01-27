import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Hero from "../../components/hero/Hero";
import Skills from "../../components/skills/Skills";
import Experience from "../../components/experience/Experience";
import { HomeProps } from "../../types/Home.type";
import Portifolio from "../../components/portifolio/Portifolio";
import Contacts from "../../components/contacts/Contacts";
import Footer from "../../components/footer/Footer";


const Home: React.FC<HomeProps> = ({ themeDark, value }) => {
  return (
    <>
      <NavBar themeDark={themeDark} value={value} />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Portifolio />
        <Contacts />
      </main>
      <Footer />
    </>
  );
};

export default Home;
