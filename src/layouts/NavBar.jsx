import React from 'react';
import { Link } from 'gatsby';
import styled from 'react-emotion';
import Headroom from 'react-headroom';
import Logo from '../../static/logo/BOX.CO-WORKING.LOGO.svg';
import * as URL from '../constants/links';

const StyledLink = styled(Link)`
  display: flex;
  font-weight: 700;
  align-items: center;
  background: #fff;
  border-radius: 50px;
  padding: 5px 15px;
  @media (max-width: 578px) {   
    display: inline-block;    
    margin: 0px auto;
    padding: 2px 15px;
  }
`;

const ToggleInput = styled.input`
  display: none;
  & + nav{
    display: none;
  }
  @media (max-width: 578px) {    
    &:checked + nav{
      display: block;
      top: 0;
      left: 0;
      height: 100vh;
      padding: 20px;
      z-index: 222222;
      background: ${props => props.theme.colors.background.dark};
    }
  }
`

const ToggleMenu = styled.label`
  display: none;
  vertical-align: middle;
  float: right;
  padding: 10px;
  border: 0;
  border-radius: 50px;
  background: ${props => props.theme.colors.background.dark};
  color: ${props => props.theme.colors.white.base};
  cursor: pointer;  
  @media (max-width: 578px) {    
    display: block;
  }
`

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  font-family: ${props => props.theme.fontFamily.body};
  font-weight: 500;
  font-size: 1.1rem;
  align-items: center;
  a {
    color: ${props => props.theme.colors.white.base};
    margin-left: 2rem;
    transition: all ${props => props.theme.transitions.default.duration};
    &:hover {
      color: ${props => props.theme.colors.white.grey};
    }
  }
  @media (max-width: 578px) {
    color: ${props => props.theme.colors.white.base};    
    width: 70%;  
    position: fixed;
    display: none;
    a {
      color: ${props => props.theme.colors.secondary.base};
      display: block;
      margin: 0;
      padding: 10px;
      &:hover,&:focus{
        color: ${props => props.theme.colors.secondary.base};
        background: ${props => props.theme.colors.background.light};
      }
    }
  }
`;

const NavBar = () => (
  <div>
    <Headroom calcHeightOnResize disableInlineStyles>
      <StyledLink to={URL.HOME}>
        <Logo /> Box
      </StyledLink>
      <ToggleMenu htmlFor="nav-menu">Menu</ToggleMenu>    
      <Nav>
        <Link to={URL.HOME}>Trang chủ</Link>
        <Link to={URL.ABOUT}>Về BOX</Link>
        {/* <Link to={URL.SERVICE}>Dịch vụ</Link> */}
        <Link to={URL.BLOG}>Blog</Link>
        {/* <Link to={URL.CONTACT}>Liên hệ</Link>  */}
      </Nav>
    </Headroom>
    <ToggleInput type="checkbox" id="nav-menu"></ToggleInput>
    <Nav>
      <Link to={URL.HOME}>Trang chủ</Link>
      <Link to={URL.ABOUT}>Về BOX</Link>
      {/* <Link to={URL.SERVICE}>Dịch vụ</Link> */}
      <Link to={URL.BLOG}>Blog</Link>
      {/* <Link to={URL.CONTACT}>Liên hệ</Link> */}
    </Nav>
  </div>
);

export default NavBar;
