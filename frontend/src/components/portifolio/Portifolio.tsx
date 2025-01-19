import React from "react";
import * as S from "./styles";
import { p } from "./utils";
const Portifolio: React.FC = () => {
  return (
    <S.container>
      <S.divTitle>
        <S.title>Portifolio</S.title>
        <S.p>{p}</S.p>
      </S.divTitle>

      <S.cardXp>
        <S.divPhoto>
          <S.projectPhoto />
        </S.divPhoto>

        <S.divInfo>
          <S.projectTitle>titulo do projeto</S.projectTitle>
          <S.projectP>paragrafo do projeto</S.projectP>
          <S.projectTec>tecnologias do projeto</S.projectTec>
        </S.divInfo>
      </S.cardXp>
    </S.container>
  );
};

export default Portifolio;
