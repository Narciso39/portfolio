import React from "react";
import * as S from "./styles";
const Contacts: React.FC = () => {
  return (
    <S.contactContainer>
      <S.title>Contacts</S.title>
      <S.pContact>
        What’s next? Feel free to reach out to me if you're looking for a
        developer, have a query, or simply want to connect.
      </S.pContact>
      <S.email>reachsagarshah@gmail.com</S.email>
      <S.phonenumber>+91 8980500565</S.phonenumber>
      <S.secondPContact>
        You may also find me on these platforms!
      </S.secondPContact>
    </S.contactContainer>
  );
};

export default Contacts;
