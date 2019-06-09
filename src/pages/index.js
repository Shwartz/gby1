import React from 'react';
import {Header} from '../components/Header';
import {Link} from 'gatsby';
import { Button } from "../components/button/Button"

class Main extends React.Component {
  render() {
    return (
      <div style={{ color: `purple`, fontSize: `36px` }}>
        <Header
          headerText='Home page title'
        />
        <p>Let's roll</p>
        <p><Link to='about'>About Link..</Link></p>
        <Button>Styled component Button</Button>
      </div>
    )
  }
}

export default Main;
