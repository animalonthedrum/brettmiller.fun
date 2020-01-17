// import { useEffect, useRef, useState } from "react";

// export default ({ root = null, rootMargin, threshold = 0 }) => {
//   const [entry, updateEntry] = useState({});
//   const [node, setNode] = useState(null);

//   const observer = useRef(
//     new window.IntersectionObserver(([entry]) => updateEntry(entry), {
//       root,
//       rootMargin,
//       threshold
//     })
//   );

//   useEffect(
//     () => {
//       const { current: currentObserver } = observer;
//       currentObserver.disconnect();

//       if (node) currentObserver.observe(node);

//       return () => currentObserver.disconnect();
//     },
//     [node]
//   );

//   return [setNode, entry];
// };

import React, { useState, useEffect, useRef } from "react";

function useIntersection(options) {
  const [observerEntry, setEntry] = useState({});
  const elRef = useRef();

  useEffect(
    () => {
      const observer = new IntersectionObserver(
        entries => setEntry(entries[0]),
        options
      );
      observer.observe(elRef.current);
      return () => observer.disconnect();
    },
    [elRef]
  );
  return { observerEntry, elRef };
}

function Box({ id, children }) {
  const { observerEntry, elRef } = useIntersection({ threshold: 1 });

  return (
    <div style={{backgroundColor:'blue', height:'200px'}}
      id={id}
      ref={elRef}
      data-visible={observerEntry.isIntersecting}
      className="box"
    >
      {children}
    </div>
  );
}

function Intersect() {
  return (
    <div style={{ minHeight: "200vh" }}>
    <div style={{ minHeight: "100vh", backgroundColor:"green" }}/>

      <Box id="box-1">Box 1</Box>
      <Box id="box-2">Box 2</Box>
      <div style={{ minHeight: "100vh", backgroundColor:"green" }}/>
      <Box id="box-3">Box 3</Box>
    </div>
  );
}

export default Intersect;