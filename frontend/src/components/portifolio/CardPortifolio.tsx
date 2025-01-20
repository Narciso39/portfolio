import React from "react";
import * as S from "./styles";

import { CardPortifolioProps } from "../../types/CardPortifolio.types";
import { IoLinkOutline, IoLogoGithub } from "react-icons/io5";

const CardPortifolio: React.FC<CardPortifolioProps> = ({
  title,
  pInfo,
  imageUrl,
  tecnologias,
  repoLink,
  deployLink,
}) => {
  return (
    <S.cardXp>
      <S.divPhoto>
        <S.projectPhoto src={imageUrl} />
      </S.divPhoto>

      <S.divInfo>
        <S.projectTitle>{title}</S.projectTitle>
        <S.projectP>{pInfo}</S.projectP>
        <S.divSkills>
          {tecnologias.map((tec, index) => (
            <S.projectTec key={index}>{tec}</S.projectTec>
          ))}
        </S.divSkills>
      </S.divInfo>
      <S.divLinks>
        <S.gitLink href={repoLink}>
          <IoLogoGithub
            style={{
              width: "2.5rem",
              height: "2.5rem",
              marginRight: "0.5rem",
            }}
          />
        </S.gitLink>

        <S.deployLink href={deployLink}>
          <IoLinkOutline
            style={{
              width: "2.5rem",
              height: "2.5rem",
              marginRight: "0.5rem",
            }}
          />
        </S.deployLink>
      </S.divLinks>
    </S.cardXp>
  );
};

export default CardPortifolio;
