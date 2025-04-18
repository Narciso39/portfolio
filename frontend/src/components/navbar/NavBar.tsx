import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { logo } from "./logo";
import { IoCloseSharp, IoMoon, IoSunny } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import { NavBarProps } from "../../types/Nav.type";


const NavBar: React.FC<NavBarProps> = ({ themeDark, value }) => {
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
  
  const handleDownload = () => {
    
    const pdfUrl = '../../assets/cv/curriculo.pdf';
   
    const fileName = 'curriculo.pdf';
    
   
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = fileName;
    
 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <>
      <S.Header>
        <S.contentMobile>
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
                  <S.link>Sobre mim</S.link>
                </S.li>
                <S.li>
                  <S.link>Meu trabalho</S.link>
                </S.li>
                <S.li>
                  <S.link>Contatos</S.link>
                </S.li>
                <S.li>
                  <S.link>Contatos</S.link>
                </S.li>
              </S.ul>
              <S.theme>
                <S.ul>
                  <S.li>
                    <S.themeBtn onClick={() => themeDark((prev) => !prev)}>
                      <a>switch theme </a>
                      {!value ? (
                        <IoMoon style={{ color: "#F9FAFB" }} />
                      ) : (
                        <IoSunny />
                      )}
                    </S.themeBtn>
                  </S.li>
                </S.ul>
                <S.button onClick={handleDownload}>Download CV</S.button>
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
