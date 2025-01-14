import React, { useState } from "react";
import * as S from "./styles";
import { logo } from "./logo";
import { IoCloseSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <S.Header>
        <S.logoMobile>
        <S.logo>{logo}</S.logo>
        <S.menuIcon onClick={toggleMenu}>
          {menuOpen ? <IoCloseSharp /> : <TiThMenu />}
        </S.menuIcon>
        </S.logoMobile>
        <S.navbar>
          <S.ul>
            <S.li><a>Sobre mim</a></S.li>
            <S.li><a>Meu trabalho</a></S.li>
            <S.li><a>Contatos</a></S.li>
          </S.ul>

          <S.theme></S.theme>
        </S.navbar>
      </S.Header>
    </>
  );
};

export default NavBar;
