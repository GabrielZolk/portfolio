import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import styled from 'styled-components'
import photo from '../imgs/photo.jpeg'
import ServiceCard from '../components/ServiceCard'
import design from '../imgs/design.svg'
import intelligence from '../imgs/intelligence.svg';
import gamedev from '../imgs/game-dev.svg';

export default function About() {
  const handleClick = () => {
    window.location.href = "../../public/dev-port-pasqua.pdf";
  };

  return (
    <>
      <Background>
        <Navbar />
        <div className="content">
          <h1>QUEM SOU EU?</h1>
          <div className='image'>
            <img src={photo} />
          </div>
          <h3>Oi!</h3>
          <p>Desenvolvedor apaixonado por soluções simples para problemas difíceis. Entusiasta de métodos ágeis, ambientes flexíveis e entrega contínua.</p>
          <ul className='about-me'>
            <li className='about-item'>Nome completo: Gabriel da Silva Queiroz</li>
            <li className='about-item'>Idade: 22</li>
            <li className='about-item'>Nacionalidade: Brasileiro</li>
            <li className='about-item'>Idiomas: Portugues, Inglês</li>
            <li className='about-item'>Localização: São Paulo, Brasil</li>
          </ul>
          <button className="pdf-download-button" onClick={handleClick}>Visualizar CV</button>
          <h2>Serviços</h2>
          <div className='services'>
          <ServiceCard
            title={'Web Design'}
            image={design} />
          <ServiceCard
            image={intelligence}
            title={'Data Analytics'} />
          <ServiceCard
            image={gamedev}
            title={'Solução de Problemas'} />
            </div>
        </div>
      </Background>

    </>
  )
}

const Background = styled.div`
background-color: #111111;
display: flex;
font-family: Nunito, sans-serif;

.content {
  padding: 100px;
  width: 80vw;
}

h1 {
  font-weight: 200;
  font-size: 60px;
  color: white;
}

.image img {
  margin-top: 80px;
  width: 500px;
}

h3 {
  color: #2196F3;
  font-size: 60px;
  margin: 50px 0 50px 0;
}

p { 
  color: white;
  font-size: 20px;
}

.about-me{
  font-size: 25px;
  margin: 30px 0 30px 0;
  list-style-type: none;
  color: #2196F3;
}

.about-item {
  margin: 15px 0 0 0;
}

button {
  border-radius: 20px;
  color: white;
  text-align: center;
  width: 230px;
  height: 40px;
  font-size: 20px;
  background-color: #2196F3;
}

h2 {
  font-weight: 300;
  font-size: 90px;
  margin: 120px 0 0 0;
  color: white;
}

.services {
  margin: 40px 0 0 0;
  display: flex;
}
`