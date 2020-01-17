import React from 'react';
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import styled from '@emotion/styled'
import IPhoneX from '../components/iphoneX'

const FlexContainer = styled('div')`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
`
const FlexItem = styled('div')`
    flex:1 1 auto;
    background-color:brown;
    max-height:400px;
    padding-right:60px;
    padding-left:60px;


`


  function IronMan(){

    const data = useStaticQuery(graphql`
    query {
      ironman_1: file(relativePath: { eq: "IM_home_2.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1600) {
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
            <Img  className="device-content" fluid={data.ironman_1.childImageSharp.fluid} /> 
              {/* <img class="device-content" src="src/img/bg-07.jpg"> */}
            </div>
            <div className="device-stripe"></div>
            <div className="device-header"></div>
            <div className="device-sensors"></div>
            <div className="device-btns"></div>
            <div className="device-power"></div>
          </div>
        </div>
        <FlexContainer>
        <FlexItem>
        <Img  className="device-content" fluid={data.ironman_1.childImageSharp.fluid} />
        </FlexItem>
        <FlexItem>
        <Img  className="device-content" fluid={data.ironman_1.childImageSharp.fluid} />
        </FlexItem>
        <FlexItem>
        <IPhoneX/>
        </FlexItem>
        </FlexContainer>
        
          </div>
      )
  } 

  export default IronMan;