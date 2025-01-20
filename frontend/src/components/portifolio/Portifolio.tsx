import React from "react";
import port from "./portifolio.json";
import * as S from "./styles";
import CardPortifolio from "./CardPortifolio";
import { p } from "./utils";

const Portifolio: React.FC = () => {
  return (
    <S.container>
      <S.divTitle>
        <S.title>Portifolio</S.title>
        <S.p>{p}</S.p>
      </S.divTitle>
      {port.portifolio.map((po) => (
        <CardPortifolio
          key={po.id}
          title={po.title}
          pInfo={po.pInfo}
          imageUrl={po.imageUrl}
          tecnologias={po.tecnologias}
          repoLink={po.repoLink}
          deployLink={po.deployLink} id={0}       />
      ))}
    </S.container>
  );
};

export default Portifolio;
