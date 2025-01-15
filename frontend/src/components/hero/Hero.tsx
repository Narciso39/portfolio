import React from "react";
import * as S from "./styles";
import { c, d, n, p } from "./utils";

const Hero: React.FC = () => {
  return (
    <>
      <S.hero>
        <S.name>{n}</S.name>
        <S.presentation>{p}</S.presentation>
        <S.city>{c}</S.city>
        <S.projects>{d}</S.projects>
        <S.link>GiHub</S.link>
        <S.link>Linkedin</S.link>
        <S.link>email</S.link>
      </S.hero>
    </>
  );
};

export default Hero;
