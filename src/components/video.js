import React from "react"

 function Video({srcName, srcType, name}) {
     return(
         <div className={name}>
        <video autoPlay loop muted>
        <source src={srcName} type={srcType} />
      </video>
    </div>
     )

 }

 export default Video