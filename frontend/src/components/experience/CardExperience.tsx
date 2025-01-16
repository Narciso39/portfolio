import React from "react";
import * as S from "./styles";

const CardExperience: React.FC<{
  enterprise: string;
  date: string;
  work: string;
  func: string[];
  position: string;
}> = ({ enterprise, date, work, func, position }) => {
  return (
    <S.card>
      <S.position>{position}</S.position>
      <S.nameCompany>{enterprise}</S.nameCompany>
      <S.date>{date}</S.date>
      <S.work>{work}</S.work>
      <S.func>{func}</S.func>
    </S.card>
  );
};

export default CardExperience;
