import React from "react";
import * as S from "./styles";
import { IoLogoGithub, IoLogoLinkedin, IoMailOutline } from "react-icons/io5";
const Contacts: React.FC = () => {
  return (
    <S.contactContainer>
      <S.title>Contacts</S.title>
      <S.pContact>
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </S.pContact>
      <S.email>felipenarciso15@gmail.com</S.email>
      <S.phonenumber>+55 (21) 99534-1050</S.phonenumber>
      <S.secondPContact>
        You may also find me on these platforms!
      </S.secondPContact>
      <S.divImg>
        <IoLogoGithub
          style={{
            width: "2rem",
            height: "2rem",
            marginRight: "0.5rem",
          }}
        />

        <IoLogoLinkedin
          style={{
            width: "2rem",
            height: "2rem",
            marginRight: "0.5rem",
          }}
        />
        <IoMailOutline
          style={{
            width: "2rem",
            height: "2rem",
            marginRight: "0.5rem",
          }}
        />
      </S.divImg>
    </S.contactContainer>
  );
};

export default Contacts;
