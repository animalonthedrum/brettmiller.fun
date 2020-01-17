import React, {useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import Header from "./header"
import ScrollBar from "./scrollBar"
import VerticalSocial from "./verticalFooter"
import Menu from './menu'
import styled from '@emotion/styled'
import "./layout.css"
import "./index.scss"

const Footer = styled('footer')`
  background-color:#363738;
  color:white;
  display:flex;
  justify-content:center;
  align-items:center;
  a {
      text-decoration:none;
      color:white;
    }
`
const FooterLinks = styled('ul')`
  display:flex;
  margin-top:0;
  margin-bottom:0;
  margin-left:0;
  margin-right:0;
  padding-top:0;
  padding-bottom:0;
  padding-left:0;
  padding-right:0;
  li {
    padding-top:0;
    padding-bottom:0;
    padding-left:8px;
    padding-right:8px;
    margin-bottom:0;
    list-style:none;
    a {
      text-decoration:none;
      color:white;
    }
  }
  
`

const Layout = ({ children }) => {
  useEffect(() => {
    var isScrolling;
    console.log('scroll');
    const stopScroll = () => {
      window.clearTimeout( isScrolling );

      // Set a timeout to run after scrolling ends
      isScrolling = setTimeout(function() {
        // Run the callback
        console.log( 'Scrolling has stopped.' );
        document.body.classList.add('stopShow');
      }, 1000);
      document.body.classList.remove('stopShow');
    }
    window.addEventListener("scroll", stopScroll);
    return () => {
      console.log('unscroll');
      window.removeEventListener("scroll", stopScroll);
      console.log('test')
    };
  }, [])
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
        <ul>
          <li><Link to="/page-2">page-2</Link></li>
          <li><Link to="/pgajr">pga-jr</Link></li>
          <li><Link to="/hitch">hitch</Link></li>
          <li><Link to="/frankandtawnee">Frank & Tawnee</Link></li>
          <li><Link to="/ironman">ironman</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </ScrollBar>
      
      <main>{children}</main>
        
      <ScrollBar name='vert-footer'>
        <VerticalSocial/>
      </ScrollBar>
        
        <Footer>
        <FooterLinks>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        </FooterLinks>
          <span>© {new Date().getFullYear()}, <Link to="/"> Brett Miller</Link></span>
        </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
