import React from "react";
import LogoImg from "../../../assets/images/logo-v1.png";
import { Button } from "../../atoms";
import {
  Wrapper,
  Container,
  Right,
  Entrar,
  MenuLink,
  MenuFont,
  ListLinks,
  Logo,
} from "./sytles";

export const Header = () => {
  const handleEnter = () => {
    console.info("abrir o modal/pagina de login");
  };

  return (
    <Wrapper>
      <Container>
        <Logo src={LogoImg} alt="Logo app" />
        <Right>
          <ListLinks>
            <MenuLink>
              <MenuFont semibold>Como funciona</MenuFont>
            </MenuLink>
            <MenuLink>
              <MenuFont semibold>Planos</MenuFont>
            </MenuLink>
            <MenuLink>
              <MenuFont semibold>Quem Somos</MenuFont>
            </MenuLink>
            <MenuLink>
              {/* <Button label="entrar" /> */}
              <MenuFont semibold>Acessar</MenuFont>
            </MenuLink>
            <MenuLink>
              <MenuFont semibold>Cadastre-se</MenuFont>
            </MenuLink>
          </ListLinks>
        </Right>
      </Container>
    </Wrapper>
  );
};