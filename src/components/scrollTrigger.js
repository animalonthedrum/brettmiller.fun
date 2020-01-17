import React, { useRef, useEffect } from 'react'
import Layout from '../components/layout'
import { gsap, TimelineMax } from "gsap";
import styled from '@emotion/styled'

const Section = styled('div')`
    height:100vh;
    background-color:lime;
    width:100%;
`

const ScrollTrigger = ()=> {
let targets = useRef([]);
let headerRef = useRef();
let boxRef = useRef();

// const ar = [].slice.call(targets); 
// let animations = [];


// let count = 0;

// for (let target of ar) {
// //   animations[count] = new TimelineMax({paused:true});  
//   animations[count] = gsap({paused:true});  
//   observer.observe(target);
//   count++;
// }

// observer handler
// function animHandler(targets, observer) {
//     for (var entry of targets) {
//       if (entry.isIntersecting) {
//         let i = ar.indexOf(entry.target);
//         animations[i].play();
       
//       } else {
//           return;
//       }
//     }
//   }

    useEffect(() => {
        const tl = gsap.timeline();
        const threshold = 0.7; // trigger
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: threshold
    };

        // const ar = [].slice.call(targets); 
        const ar = [].slice.call(targets);
        console.log(targets, 'wtf is this') 
        // const ar = targets[0];

        console.log(ar, 'arr')
let animations = [];


let count = 0;

for (let target of ar) {
//   animations[count] = new TimelineMax({paused:true});  
animations[count] = new TimelineMax({paused:true});
  observer.observe(target);
  count++;
}
        function animHandler(targets, observer) {
            for (var entry of targets) {
              if (entry.isIntersecting) {
                let i = ar.indexOf(entry.target);
                animations[i].play();
               
              } else {
                  return;
              }
            }
          }
 
        const observer = new IntersectionObserver(animHandler, options);
        // testimonial animation

        console.log(headerRef, 'headerRef');
        console.log(targets, 'target Ref');
        console.log(animations, 'amim')
        console.log(animations[0], 'amim 0')
        gsap.from(headerRef, {
          y:50,
          x:100,
          opacity:0,
          duration:3
        }, 1);
      }, []);
      return (
    <Layout>
    <Section>
    <div className="content" ref={element => {targets.current[0] = element;}}>
    </div>
    </Section>
    <Section>
    <div className="content" ref={element => {targets.current[0] = element;}}>
        <h1 ref={element => {headerRef = element;}}>HELLLO</h1>
    </div>
    </Section>

    <Section className='section' ref={element => {targets.current[1] = element;}}>
    <div className="box" ref={element => {boxRef = element;}}>
        <p>BOX</p>
    </div>
    </Section>
    </Layout>
    );
    }

  export default ScrollTrigger;


// TweenMax.set(".dog", {yPercent:-50, xPercent:-100});
// TweenMax.set(".box, .hello, .message, #morphIt, #drawIt", {yPercent:-50, xPercent:-50});
// TweenMax.set(".trigger", {bottom:threshold * 100 + "%"});



// timeline for each section
// animations[0].tl.from(headerRef, 1, {scale:0, transformOrigin:"center bottom"});




