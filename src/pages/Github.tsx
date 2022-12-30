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
                            <div>
                                <li className='repo-name'>{repo.name.toUpperCase()}</li>
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

font-family: Nunito, sans-serif;

.content-repo {
    display: flex;
    margin: 8vh 0 0 8vw;
    text-align: center;
    width: 800px;
}

.repo-name {
    color: #2196F3;
    font-size: 35px;
    list-style-type: none;
    padding-bottom: 20px;
    padding-top: 80px;
}

p {
    font-size: 20px;
    color: white;
    padding-bottom: 20px;
   
}


a {
  color: #2196F3;
  text-decoration: none;
  

  &:hover {
    color: #21f2f2;
  }
}

@media (max-width: 1189px) {
    .content-repo {
    display: flex;
    margin: 3.5vh 15px 0 3.5vw;
    text-align: center;
    width: 800px;
}


.repo-name {
    font-size: 25px;
}

p {
    font-size: 18px;
   
}

}

@media (max-width: 410px) {
    .content-repo {
    display: flex;
    margin: 1.5vh 8px 0 1.5vw;
    text-align: center;
    width: 800px;
}


.repo-name {
    font-size: 18px;
}

p {
    font-size: 15px;
   
}

}

`
