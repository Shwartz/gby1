import React from "react"
import {Header} from '../components/Header';
import { Link } from "gatsby"
import { Container } from "../components/container/Container"

export default () => (
  <Container>
    <p><Link to='/'>Home Link</Link></p>
    <Header
      headerText='About page title'
    />
    <p>Such wow. Very React.</p>
  </Container>
)
