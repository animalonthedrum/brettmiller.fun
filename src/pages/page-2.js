import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'
// import Layout from "../components/layout"
import SectionWipes2 from "../components/test"
import SEO from "../components/seo"

const Container = styled('div')`
height:100vh;
width:100%;
position:sticky;
z-index:1;
background-color:purple;
  color: wheat;
  & > a {
    color: hotpink;
  }
`

const SecondPage = () => (
  <div>
    <SEO title="Page two" />
    <Container>
      <h1>Page Title</h1>
      <h3>page heading</h3>
      <h4>page sub heading</h4>
    </Container>
    <SectionWipes2/>
  </div>
)

export default SecondPage
