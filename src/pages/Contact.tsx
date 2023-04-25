import React from 'react'
import ContactForm from '../components/Contact/Contact'
import Navbar from '../components/Navbar/Navbar'
import styled from 'styled-components'

export default function Contact() {
  return (
    <>
      <Background>
        <Navbar />
          <ContactForm />
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
`
