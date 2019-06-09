import React from "react"
import {Header} from '../components/header';
import { Link } from "gatsby"

export default () => (
  <div style={{ color: `teal` }}>
    <Header
      headerText='About page title'
    />
    <p>Such wow. Very React.</p>
    <p><Link to='/'>Home Link</Link></p>
  </div>
)
