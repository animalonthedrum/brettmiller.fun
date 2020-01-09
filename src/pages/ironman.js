import React from "react"
import styled from '@emotion/styled'
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
// import SEO from "../components/seo"
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
    & .animation, .animation2 {
      width: 100%;
      height: 100%;
      position: absolute;
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
`
let Heading = styled('div')`
position:relative;
  & > h2 {
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
        ${'' /* &:after {
            content:'>';
            display:inline;
        } */}
}
`

// const SlideRight = () => (
//     <Layout>
//     <SlidingContainer>
//       <div className="section" />
//       <Controller>
//         <Scene
//           triggerHook="onLeave"
//           duration={1000}
//           pin
//         >
//           {(progress) => (
//             <div className="sticky">
//               <Timeline totalProgress={progress} paused>
//                 <Tween
//                     from={{ x: '0%', ease:"power2.out" }}
//                     to={{ ease:"power2.out", x: '50%', }}
//                 >
//                   <div className="animation">
//                     <Video srcName={ironman} srcType='video/mp4' name='videoWrapper'/>
//                   </div>
//                 </Tween>
//                   <Timeline 
//                   target={
//                     <TextContainer>
//     <Heading>
//         <h2>IRONMAN</h2>
//     </Heading>
//     <Copy>
//         <p>A team of 4 - designer, two project managers and myself partnered with World Triathlon Corporation to overhaul their flagship site, which was almost a decade old and came with out-dated user experience trends, functionality issues and cumbersome administration processes. </p>
//         <p>The project focused on restructuring content and design to be athlete-first as well as streamlining the experience to get athletes to race info and registrations faster.</p>
//         <p><strong>Key:</strong> Establishing a web presence, and creating a site that’s design showed more personality than the site used to book the camper. Built with React and a <a target='_blank' rel="noopener noreferrer" href='https://motion.ant.design/components/scroll-anim'>cool animation library</a> I was intrigued to try out.</p>

//     </Copy>
//     </TextContainer>
//                   }
//                 >
//                   <Tween
//                     from={{ opacity: 0 }}
//                     to={{ opacity: 1 }}
//                   />
//                   <Tween
//                   from={{x:'10%'}}
//                     to={{ x: '25%' }}
//                   />
//                        <Timeline 
//                   target={
//                     <Button>
//                      <button>
//                          Check it out
//                      </button>
//                  </Button>
//                   }
//                 >
//                   <Tween
//                     from={{ opacity: 0 }}
//                     to={{ opacity: 1 }}
//                   />
//                   <Tween
//                   from={{x:'10%'}}
//                     to={{ x: '25%' }}
//                   />
//                 </Timeline>
//                 </Timeline>
//               </Timeline>
//             </div>
//           )}
//         </Scene>
//       </Controller>
//       {/* <div className="section" /> */}
//     </SlidingContainer>
//     </Layout>
//   );
//   export default SlideRight;
  
const Ironman = () => (
    <Layout>
    <SlidingContainer>
    <div className="section" />
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration={1500}
        pin
      >
        {(progress) => (
          <div className="sticky">
            <Timeline totalProgress={progress} paused>
              <Tween
                  from={{ x: '0%', ease:"power2.out" }}
                  to={{ ease:"power2.out", x: '50%', }}
              >
                <div className="animation">
                  <Video srcName={ironman} srcType='video/mp4' name='videoWrapper'/>
                </div>
              </Tween>
                <Timeline 
                target={
                  <Heading>
                    <h2>IRONMAN</h2>
                  </Heading>
                }
              >
                <Tween
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                />
                <Tween
                from={{x:'100%', y:'50vh'}}
                  to={{ x: '50%', y:'50%' }}
                />
                     <Timeline 
                target={
                    <Button>
                    <button>Check it out</button>
                    </Button>
                }
              >
                <Tween
                  from={{ opacity: 0 }}
                  to={{ opacity: 1 }}
                />
                <Tween
                from={{x:'10%'}}
                  to={{ x: '25%' }}
                />
              </Timeline>
              </Timeline>
            </Timeline>
          </div>
        )}
      </Scene>
    </Controller>
    </SlidingContainer>
    </Layout>
    
);

export default Ironman;