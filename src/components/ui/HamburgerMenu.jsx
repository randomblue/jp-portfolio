import React from 'react'
import styled from 'styled-components';


export default props => {
    return(
    <HamburgerMenu {...props}>
            <span></span>
            <span></span>
            <span></span>
    </HamburgerMenu>
    );
};
  
  const HamburgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 14px;
  width: 22px;
  transform: scale(1);
  transition: transform 600ms cubic-bezier(0.075, 0.82, 0.165, 1) 0.1s;

  span {
    height: 2px;
    width: 22px;
    display: block;
    top: 0;
    left: 0;
    transform-origin: left center;
    transform: rotateZ(0deg) rotateY(0deg);
    position: relative;
    background-color:#999;
    transition: all 600ms cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  &.open {
    transform: scale(0.75);
    span {
      left: 3px;
      
      &:nth-child(1) {
        transform: rotateZ(45deg) rotateY(0deg);
        top: -2px;
      }
      &:nth-child(2) {
        transform-origin: center;
        transform: rotateZ(0deg) rotateY(90deg);
        left: 0;
      }
      &:nth-child(3) {
        transform: rotate(-45deg) rotateY(0deg);
        top: 2px;
      }
    }
  }

  /* desktop */
  @media screen and (min-width: 1024px) {
    display: none;

  }

  `;

