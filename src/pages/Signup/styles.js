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

    Button {
      width: 80px;
      height: 40px;
      margin-top: 0;
    }

`;

export const ImageLogo = styled.div`
    img {
        width: 167px;
        height: 45px;
        margin-top: 25px;
        margin-left: 50px;
    }

    margin-bottom: 200px;

`;

export const Texto = styled.h1`
    text-align: center;
    color: white;
    font-size: 45px;

`;

export const subTexto = styled.h3`
    text-align: center;
    flex-wrap: wrap;
    color: #f1f1f1;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 22px;
    font-weight: 500;
`;

export const subTexto2 = styled.h4`
    text-align: center;
    flex-wrap: wrap;
    color: #f1f1f1;
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: 500;
`;

export const Divider = styled.div`
    display: flex;
    justify-content: center;

    Input {
      border-radius: 2px 0 0px 2px;
      width: 33.3%;
      background-color: white;
      color: black;
      height: 55px;
    }
    

    Button {
      width: 150px;
      height: 55px;
      font-size: 22px;
      border-radius: 0 2px 2px 0;
    }
`;

export const Container3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 50vh;
`;

export const Content = styled.div`
  gap: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-shadow: 0 1px 2px #0003;
  background-color: white;
  max-width: 350px;
  padding: 20px;
  border-radius: 5px;

  Button {
    width: 50%;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  font-weight: 600;
  color: #676767;
`;

export const LabelSignin = styled.label`
  font-size: 16px;
  color: #676767;
`;

export const labelError = styled.label`
  font-size: 14px;
  color: red;
`;

export const Strong = styled.strong`
  cursor: pointer;
  a {
    text-decoration: none;
    color: #676767;
  }
`;
