import React from "react"
import styled from '@emotion/styled'
import SectionWipes2 from "../components/test"
import SEO from "../components/seo"
import Layout from "../components/layout"

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
  <Layout>
    <SEO title="Page two" />
    <Container>
      <h1>Page Title</h1>
      <h3>page heading</h3>
      <h4>page sub heading</h4>
    </Container>
    <SectionWipes2/>
  </Layout>
)

export default SecondPage

