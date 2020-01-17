import React from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import PgaMain from "./pga_jr"
import Sticky from './sticky';
import "./layout.css"
import StaggerCards from './staggerCards';

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
          <section className="panel blue"><span><h1>WORK.</h1></span></section>
          <Tween
            from={{ x: '-100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel turqoise"><span><h1>IRONMAN</h1></span></section>
          </Tween>
          <Tween
            from={{ x: '100%' }}
            to={{ x: '0%' }}
          >
            <section className="panel green"><span><h1>PGA JR</h1></span>
            {/* <PgaMain/> */}
            </section>
          </Tween>
          <Tween
            from={{ y: '-100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel bordeaux"><span>
              <h1>Hitch</h1>
            </span>
            </section>
          </Tween>
          <Tween
            from={{ y: '100%' }}
            to={{ y: '0%' }}
          >
            <section className="panel blue"><span>
              <h1>Frank & Tawnee</h1>
            </span>
            </section>
          </Tween>
        </Timeline>
      </Scene>
    </Controller>
    <Sticky/>
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