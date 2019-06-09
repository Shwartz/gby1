import React from 'react';
import {Header} from '../components/Header';
import {Container} from '../components/container/Container';
import {Link} from 'gatsby';
import { Button } from "../components/button/Button"

class Main extends React.Component {
  render() {
    return (
      <Container>
          <p><Link to='about'>About Link..</Link></p>
          <Header
            headerText='Home page title'
          />
          <p>Let's roll</p>
          <Button>Styled component Button</Button>
      </Container>
    )
  }
}

export default Main;
