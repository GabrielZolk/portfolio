import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar/Navbar'
import img1 from '../imgs/portfolio/netflix.png';
import img2 from '../imgs/portfolio/mario.png';
import img3 from '../imgs/portfolio/soundgarden.png';
import img4 from '../imgs/portfolio/lavie.png';
import img5 from '../imgs/portfolio/spotify.png';
import img6 from '../imgs/portfolio/parrot.png';
import img7 from '../imgs/portfolio/skatepark.png';
import img8 from '../imgs/portfolio/gzlogin.png';
import img9 from '../imgs/portfolio/pokedex.png';
import img10 from '../imgs/portfolio/vidaemdia.png';
import img11 from '../imgs/portfolio/workshop.png';
import img12 from '../imgs/portfolio/churrascometro.png';
import img13 from '../imgs/portfolio/tesla.png';
import riotclient from '../imgs/portfolio/riotclient.png';
import nubankangular from '../imgs/portfolio/nubankangular.png';
import pokedex2 from '../imgs/portfolio/pokedex2.png';
import lolgame from '../imgs/portfolio/lolgame.png'
import piano from '../imgs/portfolio/piano.png'
import nuuberwallet from '../imgs/portfolio/nuuberwallet.png'

export default function Projects() {
  return (
    <Background>
      <Navbar />
      <div className="projects">
        <div className='project'>
          <a href='https://github.com/GabrielZolk/spotify-clone' target="_blank">
            <img src={img1} alt="netflix clone project" />
            <p>Clone de um dos serviços de streaming mais utilizados atualmente</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://tesla-clone-ten-sigma.vercel.app/' target="_blank">
            <img src={img13} alt="tesla-clone" />
            <p>Versão Brasileira da LangingPage da TESLA com os carros mais lindos que existem</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://gabrielzolk.github.io/javascript-mario-game/' target="_blank">
            <img src={img2} alt="mario game" />
            <p>Criação de jogo utilizando as lógicas do css + javascript</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://fernandopredes.github.io/soundgarden-front/' target="_blank">
            <img src={img3} alt="soundgarden events" />
            <p>Criação de uma página web que cadastra e recebe dados, exibindo as requests em tela</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://github.com/GabrielZolk/LaVie-ApiCRUD-handsOn3' target="_blank">
            <img src={img4} alt="laVie project" />
            <p>O laVie, foi um projeto visando o estudo do backend tendo como principal foco a criação de APIs e documentações</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://github.com/GabrielZolk/spotify-clone' target="_blank">
            <img src={img5} alt="spotify clone project" />
            <p>Clone de uma das plataformas digitais mais utilizadas atualmente</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://github.com/GabrielZolk/parrot-frontReact-handsOn4' target="_blank">
            <img src={img6} alt="parrot social media" />
            <p>Criação da interface de uma rede social, visando o estudo em react bem como suas ferramentas. O principal foco neste projeto era o uso de Hooks como useState</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://gabrielzolk.github.io/skatepark-bootstrap-libs/' target="_blank">
            <img src={img7} alt="skatepark" />
            <p>Projeto feito inteiramente utilizando a ferramenta Bootstrap</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://github.com/GabrielZolk/gz-login' target="_blank">
            <img src={img8} alt="login interface" />
            <p>Mini projeto criado com o intuito de aprimorar habilidades avançadas em CSS</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://pokedex-sk.vercel.app/' target="_blank">
            <img src={img9} alt="pokedex" />
            <p>Projeto complexo desenvolvido utilizando Typescript e React, usando componentes dinâmicos e aplicando estruturas de rotas, páginas e suas melhores práticas. Tem como principal característica o uso de hooks como useState e useEffect, consumo de API e Redux</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://vida-em-dia.vercel.app/' target="_blank">
            <img src={img10} alt="life in day web app" />
            <p>Produto criado do zero em equipe utilizando métodologias ágeis. Desde a criação de design com equipe de UX, interface com frontend, dados com backend até o build e deploy</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://gabrielzolk.github.io/workshop2/' target="_blank">
            <img src={img11} alt="workshop webpage" />
            <p>Página de captura criada através de javascript</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://gabrielzolk.github.io/churrascometro-barbecue-meter/' target="_blank">
            <img src={img12} alt="churrascometro app" />
            <p>Projeto Churrascômetro criado através de javascript</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://gabrielzolk.github.io/riot-client/' target="_blank">
            <img src={riotclient} alt="riot client" />
            <p>Interface do client da Riot Games</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://nubank-angular.vercel.app/' target="_blank">
            <img src={nubankangular} alt="nubank em angular" />
            <p>Aplicativo do Nubank versão web, desenvolvido com Angular</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://gabrielzolk.github.io/pokedex-2.0/' target="_blank">
            <img src={pokedex2} alt="pokedex 2.0" />
            <p>Pokedex 2.0 desenvolvida em JS Vanilla</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://gabrielzolk.github.io/LoL-Memory-Game/' target="_blank">
            <img src={lolgame} alt="Memory Game League of Legends" />
            <p>Jogo da memória com tema do League of Legends criado em JS Vanilla</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://github.com/GabrielZolk/enchanted-piano' target="_blank">
            <img src={piano} alt="Piano" />
            <p>Piano feito em JS Vanilla</p>
          </a>
        </div>
        <div className='project'>
          <a href='https://github.com/GabrielZolk?tab=repositories' target="_blank">
            <img src={nuuberwallet} alt="Aplicativo Nubank Wallet, Nubank e Uber Mobile" />
            <p>Alguns aplicativos Mobile desenvolvidos com react-native e flutter. São eles: NuWallet App, Nubank e Uber.</p>
          </a>
        </div>
      </div>
    </Background>
  )
}

const Background = styled.div`
background-color: #111111;
display: flex;
font-family: 'Nunito', sans-serif;
width: 100%;
height: 100%;

a {
  text-decoration: none;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin: 0 auto;
  width: 100%;
  height: 100%;
  text-align: center;
}

.project {
  margin: 4rem 1rem 1rem 1rem;
  

  p {
    width: 20rem;
    font-size: 1.1rem;
    margin: 1.3rem 0 0 0;
    color: white;
  }

  img {
    width: 20rem;
    max-height: 10.351rem;
  }
  img:hover {
    border: 4px solid white;
    border-radius: 5px;
  }
}

@media (max-width: 1189px) {
  .projects {
  grid-template-columns: repeat(2, 1fr);
}
}

@media (max-width: 1000px) {

.projects {
  grid-template-columns: repeat(1, 1fr);
}

}

@media (max-width: 565px) {
  .project { 

  p {
    width: 15rem;
  }

  img {
    width: 15rem;
  }
}
}

@media (max-width: 480px) {
  .project {

  p {
    width: 10rem;
  }

  img {
    width: 10rem;
  }
}
}
`
