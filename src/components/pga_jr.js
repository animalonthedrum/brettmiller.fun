import React from 'react';
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"



  function PgaMain(){

    const data = useStaticQuery(graphql`
    query {
      pgaMockup: file(relativePath: { eq: "pgaDesktop.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
      return(
          <div>
          <div className='mockupContainer'>
          <div className="device device-macbook device-spacegray">
            <div className="device-frame">
            <Img  className="device-content" fluid={data.pgaMockup.childImageSharp.fluid} /> 
              {/* <img class="device-content" src="src/img/bg-07.jpg"> */}
            </div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
          </div>
        </div>
          </div>
      )
  } 

  export default PgaMain;
  
