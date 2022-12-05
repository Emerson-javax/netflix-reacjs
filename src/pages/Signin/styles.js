import styled from "styled-components";
import img from "../../img/netflix.jpg";

export const Container = styled.div`
    background: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 100vh;

    @media (max-width: 550px) {
        background: none;
        background-color: black;
    }
`;

export const Container2 = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    min-height: 100vh;
    
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;

`;

export const ImageLogo = styled.div`

    img {
        width: 167px;
        height: 45px;
        margin-top: 25px;
        margin-left: 50px;
    }

`;

export const Main = styled.main`
    background-color: #000101a8;
    max-width: 450px;
    margin: 0 auto 80px;
    padding: 60px 60px;
    padding-bottom: 80px;
    color: #737373;
    margin-top: 25px;
    border-radius: 4px;
`;

export const FormLogin = styled.form`
    h1 {
        color: #ffff;
        margin: 10px 0 20px 0;
        font-size: 32px;
        margin-bottom: 28px;
    }

    .form-footer {
        font-size: 13px;
    }

    .form-footer label {
        margin-left: 30px;
        color: #b3b3b3;
        position: absolute;
        margin-top: 18px;
    }

    .form-footer a {
        float: right;
        color: #b3b3b3;
        margin-top: 18px;
        }

        .form-footer a:hover {
        color: white;
        }
`;

export const Description = styled.div`
    padding-top: 100px;
    margin-bottom: 40px;

    .descri-mais {
        color: #0071eb;     
        margin-left: 5px;
    }

    p {
        margin: 12px 0;
        letter-spacing: 0.35px;
    }

    .assine {
        color: white;
        margin-left: 5px;
    }
    .assine:hover {
        color: red;
    }

    .width-descri {
        font-size: 13px;
    }

    p> span {
        color: white;
        margin-left: 5px;
    }
`;

export const labelError = styled.label`
    font-size: 14px;
    color: red;
`;

export const Divider = styled.div`
    background-color: #212121;
    width: 100%;
    height: 4px;
    display: none;
`;

export const Footer = styled.footer`
    padding: 50px 20px;
    line-height: 40px;
    background-color: rgba(0, 0, 0, .75);
`;

export const BoxFooter = styled.div`
    max-width: 1000px;
    margin: 0 auto;

    p {
        color: #737373;
    }

    p > a {
        color: #737373;
    }
    
    p > a:hover {
        color: red;
    }

    .box-single ul {
        list-style: none;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
    }

    .box-single ul li {
        width: 25%;
    }

    .box-single ul li a {
        color: #737373;
        
    }

    .box-single ul li a:hover {
        color: red;
        
    }

    @media (max-width: 1000px) {
        .box-single ul li {
            width: 33.3%;
        }
    }
    @media (max-width: 800px) {
        .box-single ul li {
            width: 50%;
        }
    }
    @media (max-width: 450px) {
        .box-single ul {
            flex-direction: column;
        }
    }

`;
