import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <div style={{backgroundColor:"#ff6e0b", height: "100vh"}}>
    <SEO title="SP TIGERS" />
    <div style={{display: "flex", alignItems:"center", justifyContent: "center", height:"100%", flexFlow:"column"}}>
      <h1>São Paulo Tigers</h1>
      <div style={{width:"300px"}}>
        <Image />
      </div>
    </div>
  </div>
)

export default IndexPage
