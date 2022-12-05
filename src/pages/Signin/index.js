import React, { useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import img from "../../img/logo.svg";
import * as C from './styles';
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { CheckBox } from "../../components/Input/styles";

const Signin = () => {
    const { signin } = useAuth();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (!email | !senha) {
          setError("Preencha todos os campos");
          return;
        }
    
        const res = signin(email, senha);
    
        if (res) {
          setError(res);
          return;
        }
    
        navigate("/home");
      };

 

    return (
        <C.Container>
            <C.Container2>
                <C.ImageLogo><img src={img}></img></C.ImageLogo>
                <C.Main>
                    <C.FormLogin>
                        <h1>Entrar</h1>
                        <div className="form-g">
                            <Input type="email" placeholder="Email ou Número de telefone" value={email} onChange={(e) => [setEmail(e.target.value), setError("")]}></Input>
                            <Input type="password" placeholder="Senha" value={senha} onChange={(e) => [setSenha(e.target.value), setError("")]}></Input>
                            <C.labelError>{error}</C.labelError>
                            <Button Text="Entrar" onClick={handleLogin}></Button>

                            <div className="form-footer">
                                <CheckBox type="checkbox"/>
                                <label>Lembre-se de mim</label>
                                <a href={"/siginin"}>Precisa de ajuda?</a>
                            </div>
                        </div>
                    </C.FormLogin>
                    <C.Description>
                        <p>Novo por aqui?<a href={"/signup"} className="assine">Assine agora</a></p>
                        <p className="width-descri">Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô.
                            <a href={"/siginout"}  className="descri-mais">Saiba mais.</a>
                        </p> 
                    </C.Description>
                </C.Main>
                <C.Divider/>
                <C.Footer>
                    <C.BoxFooter>
                        <p>Dúvidas? Ligue <a href={"/signin"}>0800 591 8942</a></p>
                        <div class="box-single">
                            <ul>
                                <li><a href={"/signin"}>Perguntas frequentes</a></li>
                                <li><a href={"/signin"}>Privacidade</a></li>
                                <li><a href={"/signin"}>Central de Ajuda</a></li>
                                <li><a href={"/signin"}>Preferências de cookies</a></li>
                                <li><a href={"/signin"}>Termos de Uso</a></li>
                                <li><a href={"/signin"}>Informações corporativas</a></li>
                            </ul>
                        </div>
                    </C.BoxFooter>
                </C.Footer>
            </C.Container2>
        </C.Container>
    );
};

export default Signin;