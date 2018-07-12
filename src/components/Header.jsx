import React, { Component } from 'react'
import styled from 'styled-components';
import logo from 'assets/Jacob-50.png'
import HamburgerMenu from 'components/ui/HamburgerMenu'

class Header extends Component {
  state = {
    open: false,
  };

  toggleMenu = () => {
    this.setState({ open: !this.state.open});
  };

  render () {
    const { open } = this.state;

    return (
      <HeaderWrapper>
        <img src={logo} alt='logo' />
        <HamburgerMenu onClick={this.toggleMenu} 
        className={open ? 'open' : ''}
        />
      </HeaderWrapper>
      );
  }};
  
  
  const HeaderWrapper = styled.header`
    height: 58px;
    background-color: beige;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    
    img {
      height: 24px;
      width: 24px
    }

    /* tablet  */
    @media screen and (min-width: 768px){
      padding: 0 28px;
    }
    @media screen and (min-width: 786px){
    flex-direction: row;
    justify-content: center;
    }
    `
    



export default Header;