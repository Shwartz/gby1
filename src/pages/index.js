import React from "react"
import { Container } from "../templates/container/Container"
import { graphql } from "gatsby"
import { Header } from "../components/header/Header"

export default ({ data }) => {
  console.log("data: ", data)

  return (
    <Container>
      <Header
        logo={data.imgLogo}
      />
      <p>Meta data from graphQL: {data.site.siteMetadata.title}</p>

      <h3>Yar Pirate Ipsum</h3>

      <p>Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast
        quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon
        starboard
        grog black jack gangway rutters.</p>

      <p>Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a
        spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry
        doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to.</p>

      <p>Trysail Sail ho Corsair red ensign hulk smartly boom jib rum gangway. Case shot Shiver me timbers gangplank
        crack Jennys tea cup ballast Blimey lee snow crow's nest rutters. Fluke jib scourge of the seven seas
        boatswain
        schooner gaff booty Jack Tar transom spirits.</p>
    </Container>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    imgLogo: file(relativePath: { eq: "icons/Logo.png" }) {    
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.    
        fixed(width: 243, height: 43) {
          ...GatsbyImageSharpFixed_withWebp_noBase64
        }      
      }
    }   
  }
`
