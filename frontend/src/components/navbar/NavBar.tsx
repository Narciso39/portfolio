import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { logo } from "./logo";
import { IoCloseSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";

const NavBar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 1000 && !menuOpen) {
      setMenuOpen(true);
    }

    if (window.innerWidth < 426 && menuOpen) {
      setMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen]);
  return (
    <>
      <S.Header>
        <S.contentMobile >
          <S.logoMobile>
            <S.logo>{logo}</S.logo>
            <S.menuIcon onClick={toggleMenu}>
              {menuOpen ? <IoCloseSharp /> : <TiThMenu />}
            </S.menuIcon>
          </S.logoMobile>
          {menuOpen || window.innerWidth > 1000 ? (
            <S.navbar>
              <S.ul>
                <S.li>
                  <a>Sobre mim</a>
                </S.li>
                <S.li>
                  <a>Meu trabalho</a>
                </S.li>
                <S.li>
                  <a>Contatos</a>
                </S.li>
                <S.li>
                  <a>Contatos</a>
                </S.li>
              </S.ul>
              <S.theme>
                <S.ul>
                  <S.li>
                    <a>switch theme</a>
                  </S.li>
                </S.ul>
                <S.button>Download CV</S.button>
              </S.theme>
            </S.navbar>
          ) : (
            <></>
          )}
        </S.contentMobile>
      </S.Header>
    </>
  );
};

export default NavBar;
