import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import styled from 'styled-components'
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';




export default function Resume() {
    return (
        <>
            <Background>
                <Navbar />
                <div className="content">
                    <h1>Desenvolvedor Frontend</h1>
                    <h2>Experiência</h2>
                    <div className="works">
                        <div className="icons">
                            <FaBriefcase size={30} color="#4009e5" />
                            <span>Gama Academy</span>
                        </div>
                        <p>• Gama Experience | Jun 2022 - Dez 2022
                            <br></br><br></br>
                            - Desenvolvimento de software frontend <br></br>
                            - Construção de aplicativos web utilizando Typescript, JS,
                            SASS, React/Redux, Styled-Components e mais <br></br>
                            - Trabalhei em projetos de equipe usando metodologias
                            ágeis e ferramentas de versionamento</p>
                    </div>
                    <div className="works">
                        <div className="icons">
                            <FaBriefcase size={30} color="#4009e5" />
                            <span>Recepcionista Administrativo</span>
                        </div>
                        <p>•  Notredame Intermédica | Ago 2022 - Nov 2022
                            <br></br><br></br>
                            - Área da saúde <br></br>
                            - Atendimento ao paciente <br></br>
                            - Administração geral
                        </p>
                    </div>
                    <div className="works">
                        <div className="icons">
                            <FaBriefcase size={30} color="#4009e5" />
                            <span>Auxiliar Administrativo Geral</span>
                        </div>
                        <p>• Centro Automotivo | Jun 2020 - Out 2022
                            <br></br><br></br>
                            - Atendimento ao cliente <br></br>
                            - Gestão Financeira <br></br>
                            - Logística de entrada e saída de produtos <br></br>
                        </p>
                    </div>
                    <h2>Educação</h2>
                    <div className='education'>
                        <div className="icons">
                            <FaGraduationCap size={50} color="#09ea32" />
                            <span>Gama Academy</span>
                        </div>
                        <p>• Bootcamp de desenvolvimento Full-Stack | Jun 2022 - Dez 2022
                            <br></br><br></br>
                            • Conhecimento front e back, com ênfase em frontend<br></br>
                            • +800 horas de conteúdo assíncrono<br></br>
                            • Aulas ao vivo durante a semana<br></br>
                            • Acesso 1:1 com instrutores para suporte em qualquer<br></br>
                            questão ou área de confusão<br></br>
                            • Experiências do dia-a-dia no mundo real de um
                            desenvolvedor<br></br>
                        </p>

                    </div>
                    <div className='education'>
                        <div className="icons">
                            <FaGraduationCap size={50} color="#09ea32" />
                            <span>Curso Desenvolvedor Sênior</span>
                        </div>
                        <p>
                            • Desenvolvimento de aplicações do
                            começo ao fim como um programador<br></br>
                            • Criar sites atrativos e funcionais
                            implementando as últimas tecnologias<br></br>
                            • Conhecimento aprimorado em Javascript<br></br>
                            • jQuery<br></br>
                            • Angular<br></br>
                        </p>

                    </div>
                    <div className='education'>
                        <div className="icons">
                            <FaGraduationCap size={50} color="#09ea32" />
                            <span>Computação</span>
                        </div>
                        <p>• Help CNI | Mar 2013 - Mar 2014<br></br>
                            <br></br>
                            • Html, Css e JS<br></br>
                            • Microinformática<br></br>
                            • Hardware do Computador<br></br>
                            • Software do Computador<br></br>
                        </p>

                    </div>
                    <div className='education'>
                        <div className="icons">
                            <FaGraduationCap size={50} color="#09ea32" />
                            <span>Inglês</span>
                        </div>
                        <p>• Help CNI | Mar 2013 - Mar 2014
                            <br></br><br></br>
                            • Língua Inglesa e suas
                            literaturas<br></br>
                            • Conversações diárias
                            entre os estudantes<br></br>
                            simulando o ambiente real
                            do dia-a-dia<br></br>
                        </p>

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
  width: 70vw;

  h1 {
    color: #2196F3;
    font-size: 4rem;
  }

  h2 {
    margin: 8rem 0 0 0;
    color: white;
    font-size: 2rem;
  }
}

.icons {
    display: flex;
    margin: 3rem 0 3rem 0;
    align-items: center;
    span {
        font-size: 2.5rem;
        color: #4009e5;
        margin: 0 0 0 1rem;
    }
}

.works {
    margin: 6rem 0 0 0;
    color: white;
    p {
        font-size: 1.5rem;
        line-height: 2.2rem;
    }
}

.education {
    margin: 6rem 0 0 0;
    color: white;
    p {
        font-size: 1.5rem;
        line-height: 2.2rem;
    }
}
`