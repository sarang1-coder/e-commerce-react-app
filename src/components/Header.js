import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import Nav from "./Nav.js";

const imgs={
    img1:"https://tse3.mm.bing.net/th?id=OIP.wVtZf-aWXJv_Hr0yS6-U2gHaHa&pid=Api&P=0&h=180"
}

export default function Header() {
    const img1Style={
        width:"6rem"
    }
  return (
    <MainHeader>
       <NavLink to="/">
            <img src={imgs.img1}  style={img1Style} alt="shop_logo"/>
       </NavLink>
        <Nav/>
    </MainHeader>
  )
}


const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

`;