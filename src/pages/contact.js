import React, {Fragment}  from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Intersect from "../components/useIntersect"
// import ScrollTrigger from "../components/scrollTrigger"
import "../components/layout.css"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
   {/* <ScrollTrigger/> */}
   <Intersect/>
  </Layout>
)

export default Contact