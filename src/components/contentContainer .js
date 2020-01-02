import React from 'react'
import PropTypes from "prop-types"

const Container = ({ children, name }) => {

  return (
    <div className={'container ' + name}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
