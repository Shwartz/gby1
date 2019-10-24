import React from 'react';
import {graphql, Link} from 'gatsby';
import {MDXRenderer} from 'gatsby-plugin-mdx';
import {Container} from './container/Container';
import {Header} from '../components/header/Header';
import styles from '../styles/global.module.scss';
import blogStyles from './blogPost.module.scss';
import Footer from '../components/footer/Footer';

export default ({data}) => {
    const shareConfig = {
        title:         data.mdx.frontmatter.title,
        url:           `https://migraine-detective.com${data.mdx.fields.slug}`,
        hashTags:      ['migraine', 'diary', 'headache', 'blog'],
        twitterHandle: data.site.siteMetadata.twitterHandle,
    };

    const post = data.mdx;
    return (
        <Container>
            <Header
                logo={data.imgLogo}
            />
            <section className={styles.page}>
                <div className={styles.textWrap}>
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
                    <div className={blogStyles.blogPost}>
                        <MDXRenderer>{post.body}</MDXRenderer>
                    </div>
                </div>
            </section>
            <Footer
                shareConfig={shareConfig}
            />
        </Container>
    );
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {     
      frontmatter {
        title
      }
      fields {
        slug
      }
      body  
    }   
    site {
      siteMetadata {       
        twitterHandle
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
  }`;
