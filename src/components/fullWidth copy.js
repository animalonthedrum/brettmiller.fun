import React from 'react'
import PropTypes from "prop-types"

const FullWidth = ({ children, name }) => {

  return (
    <div className={'full-width ' + name}>
      {children}
    </div>
  )
}

FullWidth.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FullWidth
