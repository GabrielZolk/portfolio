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
      </div>
    </Background>
  )
}

const Background = styled.div`
background-color: #111111;
display: flex;
font-family: Nunito, sans-serif;

a {
  text-decoration: none;
}

.projects {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.project {
  margin: 4rem 0 0 2rem;
  

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
}

@media (max-width: 480px) {

  .projects {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  .project {
    margin: 4rem 0 0 1rem;

    p {
    width: 13.5rem;
    font-size: 1.1rem;
    margin: 1.3rem 0 2rem 0;
    color: white;
    }

    img {
      width: 13rem;
      max-height: 10.351rem;
    }

  }
}


`
