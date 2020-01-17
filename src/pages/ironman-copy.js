import React from "react"
import styled from '@emotion/styled'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import SEO from "../components/seo"
import Layout from "../components/layout"
import Video from "../components/video"
import ironman from '../components/ironman.mp4'

const SlidingContainer = styled('div')`
  overflow: hidden;
  .section {
    height: 100vh;
    background: linear-gradient(160deg, #f47c66 0%,#e51906 100%);
  }
  
  .sticky, .sticky2 {
    height: 100vh;
    background: linear-gradient(160deg, #e4f5fc 0%,#bfe8f9 26%,#9fd8ef 59%,#0068f2 100%);
    width: 100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    flex-wrap:wrap;
    & .animation, .animation2 {
      width: 100%;
      height: 100%;
      position: absolute;
  }
  .tester {
      height:100%;
      background-color: transparent;
      width: 100%;
      align-self:right;
      display:flex;
      justify-content:flex-end;
      .mobileIM {
        height:100%;
        width:420px;
        background-color:hotpink;
      }
  }
  }
`;
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
max-width:400px;
`
let Heading = styled('div')`
position:relative;
  & > h2 {
    font-size:75px;
    color: black;
    position:absoulte;
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
}
`
  
const Ironman = () => (
    <Layout>
     <SEO title="IRONMAN" />
    <SlidingContainer>
    <div className="section" />
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration={1200}
        pin
      >
        {(progress) => (
          <div>
          <div className="sticky">
            <Timeline totalProgress={progress} paused>
              <Tween
                  from={{ x: '0%', ease:"power2.out", opacity:1 }}
                  to={{ ease:"power2.out", x: '50%', opacity:0 }}
              >
                <div className="animation">
                  <Video srcName={ironman} srcType='video/mp4' name='videoWrapper'/>
                  <Tween
                  from={{ opacity: 1 }}
                  to={{ opacity: 0}}
                />
                        <Tween
                  from={{ ease:"power2.out", opacity:0 }}
                  to={{ ease:"power2.out", opacity:1 }}>
                  <div className='tester'>
                    <div className="mobileIM">PHONE</div>
                  </div>
                  </Tween>
                </div>
              </Tween>
                <Timeline totalProgress={progress} paused 
                target={
                  <Heading>
                    <h2>IRONMAN</h2>
                  </Heading>
                }>
                <Tween
                  from={{ opacity: 0, }}
                  to={{ opacity: 1, y:'-100' }}
                />
                     <Timeline totalProgress={progress} paused 
                target={
                  <TextContainer>
                    <Copy>
                      <p>A team of 4 - designer, two project managers and myself partnered with World Triathlon Corporation to overhaul their flagship site, which was almost a decade old and came with out-dated user experience trends, functionality issues and cumbersome administration processes.</p>
                      <p>The project focused on restructuring content and design to be athlete-first as well as streamlining the experience to get athletes to race info and registrations faster.</p>
                    </Copy>
                  </TextContainer>
                }>
                <Tween
                  from={{ opacity: 0, x:'-25vw', y:'-200' }}
                  to={{ opacity: 1, y:'-100'  }}
                />
              </Timeline>
              </Timeline>
            </Timeline>
          </div>
          </div>
        )}
      </Scene>
    </Controller>
    </SlidingContainer>
      <div>
        <h1>MORE</h1>
      </div>
      <div>
        <h1>MORE</h1>
      </div>
    </Layout>
    
);

export default Ironman;