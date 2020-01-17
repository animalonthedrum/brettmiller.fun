import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Layout from '../components/layout'


const PgaJr = () => {
  let headerRef = useRef(null);

  const [animation, setAnimation] = useState(null);

  useEffect(() => {
    setAnimation(
      gsap.from(headerRef, {
          transformOrigin:"50% 50%",
        opacity: 0,
        y:150,
        duration:1,
      })
    );
  }, []);

  return (
   <Layout>
        <h2
          className="testerThing"
          ref={element => {
            headerRef = element;
          }}
        >HIIII</h2>
    </Layout>
  );
};

export default PgaJr;