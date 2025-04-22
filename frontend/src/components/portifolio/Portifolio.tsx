import React from "react";
import port from "./portifolio.json";
import * as S from "./styles";
import CardPortifolio from "./CardPortifolio";
import { p } from "./utils";

const Portifolio: React.FC = () => {
  return (
    <S.container id="projetos">
      <S.divTitle>
        <S.title>Portifolio</S.title>
        <S.p>{p}</S.p>
      </S.divTitle>
      {port.portifolio.map((po, index) => (
        <CardPortifolio
          key={po.id || index}
          title={po.title}
          pInfo={po.pInfo}
          imageUrl={po.imageUrl}
          tecnologias={po.tecnologias}
          repoLink={po.repoLink}
          deployLink={po.deployLink}
          id={0}
        />
      ))}
    </S.container>
  );
};

export default Portifolio;
