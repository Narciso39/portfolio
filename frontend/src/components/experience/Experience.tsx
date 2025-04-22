import React from "react";
import * as S from "./styles";
import xps from "./xp.json";
import CardExperience from "./CardExperience";

const Experience: React.FC = () => {
  return (
    <S.container id="experiencia">
      <S.title>Experiência profissional</S.title>
      <S.p>Resumo das minha experiências profissionais:</S.p>
      {xps.experiences.map((xp) => (
        <CardExperience
          key={xp.id}
          enterprise={xp.enterprise}
          position={xp.role}
          date={xp.period}
          work={xp.type}
          func={xp.description}
        />
      ))}
    </S.container>
  );
};

export default Experience;
