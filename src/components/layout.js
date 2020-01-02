/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import ScrollBar from "./scrollBar"
import VerticalSocial from "./verticalFooter"
import Menu from './menu'
import "./layout.css"
import "./index.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <Header siteTitle={data.site.siteMetadata.title} /> */}
      <ScrollBar name='nav'>
        <Menu/>
      </ScrollBar>
      
      <main>{children}</main>
        
      <ScrollBar name='vert-footer'>
        <VerticalSocial/>
      </ScrollBar>
        
        {/* <footer>
          © {new Date().getFullYear()}, Brett Miller
        </footer> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
