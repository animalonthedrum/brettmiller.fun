/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, {useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from 'gatsby'
import Header from "./header"
import ScrollBar from "./scrollBar"
import VerticalSocial from "./verticalFooter"
import Menu from './menu'
import "./layout.css"
import "./index.scss"


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
        {/* <Menu/> */}
        <ul>
      <li><Link to="/page-2">page-2</Link></li>
      <li><Link to="/pgajr">pga-jr</Link></li>
      <li><Link to="/hitch">hitch</Link></li>
      {/* <li><Link to="/f&t"></Link></li> */}
      <li><Link to="/ironman">ironman</Link></li>
    </ul>
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
