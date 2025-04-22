export type NavBarProps = {
    themeDark: React.Dispatch<React.SetStateAction<boolean>>;
    value: boolean;
    refs: {
      sobreRef: React.RefObject<HTMLDivElement>;
      experienciaRef: React.RefObject<HTMLDivElement>;
      projetosRef: React.RefObject<HTMLDivElement>;
      contatoRef: React.RefObject<HTMLDivElement>;
    };
  };