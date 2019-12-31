import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import Footer from "../components/footer"

import "./layout.css"

const SectionWipes2 = () => (
  <div>
    <Controller>
      <Scene
        triggerHook="onLeave"
        duration="500%"
        pin
      >
        <Timeline
          wrapper={<div id="pinContainer" />}
        >
          <section className="panel blue"><span>Panel</span></section>
          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel turqoise"><span>Panel</span></section>
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel green"><span>Panel</span></section>
          </Tween>
          <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel bordeaux"><span>Panel</span>
            <Footer/>
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
  </div>
);

export default SectionWipes2;

{/* <Controller>
<Scene>
      <div className="panel"><span>Panel</span></div>
    </Scene>
    <Scene>
      <div className="panel"><span>Panel</span></div>
    </Scene>
</Controller> */}