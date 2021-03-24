import React from 'react'

import { Container, Main, Title, Description } from './styles'

export default function Home() {
  return (
    <Container>
      <Main>
        <Title>Electron + React app!</Title>

        <Description>
          Um setup básico de uma aplicação Electron integrada com um ambiente
          ReactJS!
        </Description>
      </Main>
    </Container>
  )
}
