import React from "react";
import * as S from "./styles";
import { c, d, n, p } from "./utils";
import {
  IoLocation,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOutline,
  IoPowerOutline,
} from "react-icons/io5";

const Hero: React.FC = () => {
  return (
    <>
      <S.hero>
        <S.name>{n}</S.name>
        <S.presentation>{p}</S.presentation>
        <S.city>
          <IoLocation
            style={{
              color: "red",
              width: "1.3rem",
              height: "1.3rem",
              marginRight: "0.5rem",
            }}
          />{" "}
          {c}
        </S.city>

        <S.projects>
          <IoPowerOutline
            style={{
              color: "green",
              width: "1.3rem",
              height: "1.3rem",
              marginRight: "0.5rem",
            }}
          />{" "}
          {d}
        </S.projects>
        <S.divLink>
          <S.link>
            <IoLogoGithub
              style={{
                width: "2rem",
                height: "2rem",
                marginRight: "0.5rem",
              }}
            />
          </S.link>
          <S.link>
            <IoLogoLinkedin
              style={{
                width: "2rem",
                height: "2rem",
                marginRight: "0.5rem",
              }}
            />
          </S.link>
          <S.link>
            <IoMailOutline
              style={{
                width: "2rem",
                height: "2rem",
                marginRight: "0.5rem",
              }}
            />
          </S.link>
        </S.divLink>
      </S.hero>
    </>
  );
};

export default Hero;
