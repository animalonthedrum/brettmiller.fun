import React from 'react';
import Layout from '../components/layout'
import {Container, FullWidth} from '../components/container'
const About = () => (
<Layout>
    <Container>
        <FullWidth flex='1' align='center'>
            <div>Header</div>
        </FullWidth>
        <FullWidth flex='2' align='center'>
            <div>HEADER 2</div>
            <div>Header 2</div>
        </FullWidth>
        <FullWidth name='blue' flex='4' align='center' child='end'>
            <div>HEADER 2</div>
            <div>Header 2</div>
            <div>Header 2</div>
            <div>Header 2</div>
        </FullWidth>
        <h1>Hi, I'm Brett Miller</h1>
        <p>I fancy CSS, animating divs, reusable components, turning mockups into markup,and am pretty into Gatsby.js right now.</p>
        <p>Other likes are my doggos, drumming, vinyl, hiking, camping, biking, yoga, card games and possibly too much Netflix.</p>
        <p>I am currently employed at SportsEngine working mostly in JS, SCSS, Drupal and PHP. </p>
        <p>Have something to share? I’d love to hear from you. Reach out here. Thank you for visiting. Stay funky and watch out for cyclists.</p>
</Container>
</Layout>
)

export default About
