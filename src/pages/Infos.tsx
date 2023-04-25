import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import styled from 'styled-components'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Affix } from 'antd';

export default function Infos() {
  return (
    <>
      <Background>
        <Affix offsetTop={0}>
          <Navbar />
        </Affix>
        <div className='content'>
          <h1>Olá mundo, eu sou o <br></br> <span>Gabriel Queiroz</span></h1>
          <p>Bem-vindo ao meu portfólio! Aqui, você encontrará informações sobre mim e meu background profissional.</p>
          <div className="icons">
            <a href='https://github.com/GabrielZolk'><FaGithub size={30} className="icon" /></a>
            <a href='https://www.linkedin.com/in/gabriel-zolk/'><FaLinkedin size={30} className="icon" /></a>
            <a href='https://api.whatsapp.com/send/?phone=%2B5511950674214&text&type=phone_number&app_absent=0'><FaWhatsapp size={30} className="icon" /></a>
          </div>
        </div>
      </Background>
    </>
  )
}

const Background = styled.div`
background-color: #111111;
display: flex;
font-family: 'Nunito', sans-serif;
width: 100%;
height: 100%;
overflow-y: hidden;

.content {
  margin: 200px auto;
  width: 600px;
  text-align: center;
}

h1 {
  font-weight: 200;
  font-size: 3.2rem;
  color: white;
  margin-bottom: 20px;
}

h1 span {
  color: #2196F3;
}

p {
  color: white;
  font-size: 1.2;
}

.icon {
  color: #2196F3;
  margin-top: 10px;
  margin-right: 7px;
}


@media (max-width: 480px) {

h1 {
  font-size: 1.8rem;
}

p {
  font-size: 1rem;
}

}
`
