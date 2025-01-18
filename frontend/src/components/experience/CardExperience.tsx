import React from "react";
import * as S from "./styles";
import { CardExperienceProps } from "../../types/CardExperience.type";

const CardExperience: React.FC<CardExperienceProps> = ({
  enterprise,
  date,
  work,
  func,
  position,
}) => {
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
