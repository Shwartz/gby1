import React from "react"
import { Helmet } from "react-helmet"

export const HeaderMetaData = ({title, description, link}) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <link rel="canonical" href="https://migraine-detective.com" />
      <meta property="og:url"           content={link} />
      <meta property="og:type"          content="website" />
      <meta property="og:title"         content={title} />
      <meta property="og:description"   content={description} />
      <meta property="og:image"         content="./images/icons/Logo.png" />
      <meta name="description" content={description} />
    </Helmet>
  )
}
