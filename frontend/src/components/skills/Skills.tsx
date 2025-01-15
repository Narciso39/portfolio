import React from "react";
import * as S from "./styles";
import logos from "./logos";
const Skills: React.FC = () => {
  return (
    <S.devContainer>
      <S.title>Minhas habilidades</S.title>
      <S.logosContainer>
        {Object.values(logos.markupLanguages).map((logo, index) => (
          <S.imgDev key={index} src={logo} alt={`Markup Logo ${index}`} />
        ))}

        {Object.values(logos.programmingLanguages).map((logo, index) => (
          <S.imgDev key={index} src={logo} alt={`Programming Logo ${index}`} />
        ))}

        {Object.values(logos.frameworksAndLibraries).map((logo, index) => (
          <S.imgDev key={index} src={logo} alt={`Framework Logo ${index}`} />
        ))}

        {Object.values(logos.databases).map((logo, index) => (
          <S.imgDev key={index} src={logo} alt={`Database Logo ${index}`} />
        ))}

        {Object.values(logos.tools).map((logo, index) => (
          <S.imgDev key={index} src={logo} alt={`Tool Logo ${index}`} />
        ))}
      </S.logosContainer>
    </S.devContainer>
  );
};

export default Skills;
