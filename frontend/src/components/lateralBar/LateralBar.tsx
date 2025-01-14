import React from "react";
import * as S from "./styles";
import { logo } from "./logo";

const LateralBar: React.FC = () => {
  return (
    <>
      <S.Header>
        <S.logo>
          {logo}
        </S.logo>
        <S.navbar>
          <S.ul>
            <S.li>Sobre mim</S.li>
            <S.li>Meu trabalho</S.li>
            <S.li>Contatos</S.li>
          </S.ul>
        </S.navbar>
      </S.Header>
    </>
  );
};

export default LateralBar;
