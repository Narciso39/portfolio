import React from "react";
import NavBar from "../../components/navbar/NavBar";
type HomeProps = {
  themeDark: React.Dispatch<React.SetStateAction<boolean>>;
  value: boolean;
};
const Home: React.FC<HomeProps> = ({themeDark, value})=> {
  return (
    <>
    <NavBar themeDark={themeDark} value={value}/>
    </>
);
};

export default Home;
