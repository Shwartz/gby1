import React from "react"
import { Header } from "../components/header/Header"
import { Container } from "../templates/container/Container"

export default () => (
  <Container>
    <Header
      headerText='About'
    />
    <p>Some text for about page</p>
  </Container>
)
