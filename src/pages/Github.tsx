import React from 'react'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

import Navbar from '../components/Navbar/Navbar'

type RepoType = {
    name: string
    description: string
    svn_url: string
}

export default function Github() {
    const [repositories, setRepositories] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.github.com/users/gabrielzolk/repos')
            const data = await response.json()

            setRepositories(data)
        }

        fetchData()
    }, []);


    return (
        <>
            <Background>
                <Navbar />
                <div className='content-repo'>
                    <ul>
                        {repositories.map((repo: RepoType) => (
                            <div className='repo-name'>
                                <li>{repo.name.toUpperCase()}</li>
                                <p>{repo.description ? repo.description : "Sem descrição"}</p>
                                <a href={repo.svn_url}>Diretório</a>
                            </div>
                        ))}
                    </ul>
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

.content-repo {
    display: flex;
    margin: 100px auto;
    text-align: center;
    width: 60vw;
}

.repo-name li{
    color: #2196F3;
    font-size: 35px;
    list-style-type: none;
    padding-bottom: 10px;
    padding-top: 40px;
}

.repo-name p {
    font-size: 20px;
    color: white;
    padding-bottom: 20px;

}


.repo-name a {
  color: #2196F3;
  text-decoration: none;
  

  &:hover {
    color: #21f2f2;
  }
}

@media (max-width: 1189px) {

.repo-name li{
    font-size: 1.7rem;
}

.repo-name p {
    font-size: 1rem;
}

}

@media (max-width: 510px) {

.repo-name li{
    font-size: 18px;
}

.repo-name p {
    font-size: 0.8rem;
}

}

`
