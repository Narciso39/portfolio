import React from "react";
import * as S from "./styles"
import CardExperience from "./cardExperience";
import xps from "./xp.json"; 

const Experience: React.FC = () => {
  return (
  <S.container>
    <S.title>Experiência profissional</S.title>
    <S.p>Here is a quick summary of my most recent experiences:</S.p>
   {xps.experiences.map((xp) => <CardExperience
          key={xp.id}
          enterprise={xp.enterprise}
          position={xp.role}
          date={xp.period}
          work={xp.type}
          func={xp.description}
        />)} 
  </S.container>
);
};

export default Experience;
