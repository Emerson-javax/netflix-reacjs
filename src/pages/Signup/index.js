import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import * as C from "./styles";
import img from "../../img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [emailConf, setEmailConf] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { signup } = useAuth();

  const handleSignup = () => {
    if (!email | !emailConf | !senha) {
      setError("Preencha todos os campos");
      return;
    } else if (email !== emailConf) {
      setError("Os e-mails não são iguais");
      return;
    }

    const res = signup(email, senha);

    if (res) {
      setError(res);
      return;
    }

    alert("Usuário cadatrado com sucesso!");
    navigate("/");
  };


  return (
    <C.Container>
            <C.Container2>
                <C.ImageLogo>
                  <img src={img}></img>       
                </C.ImageLogo>          
                <C.Texto>Filmes, séries e muito mais.</C.Texto>
                <C.Texto>Sem limites.</C.Texto>
                <C.subTexto>Assista onde quiser. Cancele quando quiser.</C.subTexto>
                <C.subTexto2>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</C.subTexto2>
                  <C.Divider>
                    <Input type="email" placeholder="Email" ></Input>
                    <Button Text="Vamos lá >"></Button>
                  </C.Divider>
                  <C.Container3>
                    <C.Content>
                      <Input
                        type="email"
                        placeholder="Digite seu E-mail"
                        value={email}
                        onChange={(e) => [setEmail(e.target.value), setError("")]}
                      />
                      <Input
                        type="email"
                        placeholder="Confirme seu E-mail"
                        value={emailConf}
                        onChange={(e) => [setEmailConf(e.target.value), setError("")]}
                      />
                      <Input
                        type="password"
                        placeholder="Digite sua Senha"
                        value={senha}
                        onChange={(e) => [setSenha(e.target.value), setError("")]}
                      />
                      <C.labelError>{error}</C.labelError>
                      <Button Text="Inscrever-se" onClick={handleSignup} />
                      <C.LabelSignin>
                        Já tem uma conta?
                        <C.Strong>
                          <Link to="/">&nbsp;Entre</Link>
                        </C.Strong>
                      </C.LabelSignin>
                    </C.Content>
                  </C.Container3>
            </C.Container2>
    </C.Container>

  );
};

export default Signup;