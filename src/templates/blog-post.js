import React from "react"
import { graphql, Link } from "gatsby"
import { Container } from "./container/Container"
import { Header } from "../components/header/Header"
import styles from "./blogPost.module.scss"
import Footer from "../components/footer/Footer"

export default ({ data }) => {
  const post = data.markdownRemark
  console.log("data: ", data)
  return (
    <Container>
      <Header
        logo={data.imgLogo}
      />
      <section className={styles.blogContainer}>
        <div className={styles.wrap}>
          <div className={styles.breadcrumb}>
            <Link to='/'>
              Home
            </Link>&nbsp;/&nbsp;
            <Link
              to='/blog'>
              Blog
            </Link>&nbsp;/&nbsp;<span>{post.frontmatter.title}</span>
          </div>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }}/>
        </div>
      </section>
      <Footer/>
    </Container>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
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
  }`
