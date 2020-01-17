import React, { useRef, useEffect } from 'react'
import Layout from '../components/layout'
import { gsap } from "gsap";
import styled from '@emotion/styled'

const CardContainer = styled('div')`
    display:flex;
    > div {
        flex:1 1 auto;
        background-color:blue;
    }
`
const tl = gsap.timeline();

const StaggerCards = () => {
    
    let cardRef = useRef([]);
    
    useEffect(() => {
      console.log(cardRef, 'cardRef');
  
      // testimonial animation
      tl.from(cardRef.current, {
        // y: () => Math.random() * 400 - 200,
        // y: "random(-200, 200)",
        y:50,
        x:100,
        opacity:0,
        stagger:0.6,
        duration:3
      }, 1);
    }, []);
    
    
   return (
      <CardContainer className="card-container">
           <div className="card" ref={element => {cardRef.current[0] = element;}} >
             <h1>Card 1</h1>
           </div>
          <div className="card" ref={element => {cardRef.current[1] = element;}}  >
             <h1>Card 2</h1>
           </div>
          <div className="card"  ref={element => {cardRef.current[2] = element;}} >
             <h1>Card 3</h1>
           </div>
        </CardContainer>
    );
  }

  export default StaggerCards;