import React from 'react'
import PropTypes from "prop-types"
import styled from '@emotion/styled'

const Flex = styled('div')`
display:flex;
flex-wrap:wrap;
justify-content:center;
width:100%;
margin-top:100px;
.row {
  background-color:lightblue;
  &[data-flex]{
    display:flex;
    flex-wrap:wrap;
    width:100%;
    border:2px solid purple;
    min-height:300px;
  }
  &[data-flex='1']{
    display:flex;
    flex-wrap:wrap;
    width:100%;
  }
  &[data-flex='2']{
    display:flex;
    flex-wrap:wrap;
    > div{
      display:flex;
      flex-wrap:wrap;
      flex: 1 1 50%;

    }
  }
  &[data-flex='3']{
    display:flex;
    flex-wrap:wrap;
    > div{
      display:flex;
      flex-wrap:wrap;
      flex: 1 1 33%;
    }
  }
  &[data-flex='4']{
    display:flex;
    flex-wrap:wrap;
    > div{
      display:flex;
      flex-wrap:wrap;
      flex: 1 1 25%;
    }
  }
  &[data-align='center']{
    justify-content:center;
  }
  &[data-align-child='center']{
      > div {
        justify-content:center;
      }
    }
    &[data-align-child='end']{
      > div {
        justify-content:flex-end;
      }
    }
}
` 


const Container = ({ children, name }) => {

  return (
    <Flex className={`container ${name ? name : ""}`}>
      {children}
    </Flex>
  )
}

const FullWidth = ({ children, name, flex, align, child }) => {

  return (
    <div className={`row fullwidth  ${name ? name : ""}`} data-flex={`${flex ? flex : ""}`} data-align={`${align ? align : ""}`} data-align-child={`${child ? child : ""}`}>
      {children}
    </div>
  )
}

const HalfWidth = ({ children, name, flex, align, child }) => {

  return (
    <div className={`row halfwidth' + ${name ? name : ""}`} data-flex={`${flex ? flex : ""}`} data-align={`${align ? align : ""}`} data-align-child={`${child ? child : ""}`}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
}
FullWidth.propTypes = {
  children: PropTypes.node.isRequired,
}

export {Container, FullWidth}
