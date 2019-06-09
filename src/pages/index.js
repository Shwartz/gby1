import React from 'react';
import {Header} from '../components/header';
import {Link} from 'gatsby';

class Main extends React.Component {
  render() {
    return (
      <div style={{ color: `purple`, fontSize: `36px` }}>
        <Header
          headerText='Home page title'
        />
        <p>Let's roll</p>
        <p><Link to='about'>About Link</Link></p>
      </div>
    )
  }
}

export default Main;
