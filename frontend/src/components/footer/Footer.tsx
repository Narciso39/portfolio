import React from 'react';
import * as S from "./styles";
import { date } from './utils';


const Footer: React.FC = () => {
  return (
    <S.footerContainer>
        <S.pFooter>Página desenvolvida por Luis felipe ❤️| {date.getFullYear()} © &#x1F1E7;&#x1F1F7;</S.pFooter>
    </S.footerContainer>
  )
}

export default Footer;