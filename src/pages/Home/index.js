import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <C.Title>BEM VINDO!</C.Title>
      <C.Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </C.Button>
    </C.Container>
  );
};

export default Home;