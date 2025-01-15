import React from "react";
import NavBar from "../../components/navbar/NavBar";
import Hero from "../../components/hero/Hero";
import Skills from "../../components/skills/Skills";
import Experience from "../../components/experience/experience";
type HomeProps = {
  themeDark: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
};
const Home: React.FC<HomeProps> = ({themeDark, value})=> {
  return (
    <>
    <NavBar themeDark={themeDark} value={value}/>
    <Hero />
    <Skills />
    <Experience />
    </>
);
};

export default Home;
