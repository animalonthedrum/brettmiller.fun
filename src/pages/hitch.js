import React from "react"
import styled from '@emotion/styled'
// import SEO from "../components/seo"
import Layout from "../components/layout"
import Video from "../components/video"
import hitch from '../components/hitchAdventures_1.mp4'

const Container = styled('div')`
height:100vh;
width:100%;
z-index:1;
background-color:mistyrose;
color: wheat;
display:flex;
justify-content:center;
align-items:center;
`
const TextContainer = styled('div')`
display:flex;
justify-content:center;
align-items:flex-start;
flex-direction:column;
padding-left:16px;
padding-right:16px;
padding-top:8px;
padding-bottom:8px;
`
let Heading = styled('div')`
color: wheat;
  & > h2 {
    color: purple;
  }
`
let Copy = styled('div')`
color: wheat;
  & > * {
    color: purple;
  }
`
let Button = styled('div')`
    & > button {
        border:0;
        outline:none;
        background-color:mistyrose;
        color:purple;
        font-size:24px;
        font-weight:bold;
        text-transform:uppercase;
        text-align:center;
        padding-top:16px;
        padding-bottom:16px;
        padding-left:16px;
        padding-right:16px; 
        ${'' /* &:after {
            content:'>';
            display:inline;
        } */}
}
`
const HitchScroll = () => (
    <div className='mockupContainer'>
    <div className="device device-macbook device-spacegray">
      <div className="device-frame">
      <Video srcName={hitch} srcType='video/mp4' name='frame'/> 
      </div>
      <div className="device-stripe"></div>
      <div className="device-header"></div>
      <div className="device-sensors"></div>
      <div className="device-btns"></div>
      <div className="device-power"></div>
    </div>
  </div>
);

const Hitch = () => (
  <Layout>
    {/* <SEO title="" /> */}
    <Container>
    <TextContainer>
    <Heading>
        <h2>Hitch Adventures</h2>
    </Heading>
    <Copy>
        <p>Hitch is a woman owned teardrop camper rental startup. What started as one run down trailer camper turned into a refurbished beauty ready for the road.</p>
        <p><strong>Task:</strong> Establishing a web presence, and creating a site that’s design showed more personality than the site used to book the camper. Built with React and a <a target='_blank' rel="noopener noreferrer" href='https://motion.ant.design/components/scroll-anim'>cool animation library</a> I was intrigued to try out.</p>

    </Copy>
    <Button>
        <button>
        Check it out
        </button>
    </Button>
    </TextContainer>
    <HitchScroll/>
    </Container>
  </Layout>
)

export default Hitch