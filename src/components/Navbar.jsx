import React from "react";
import styled from 'styled-components';
import home from '../icons/home.svg';
import card from '../icons/card.svg';
import help from '../icons/help.svg';
import join from '../icons/join.svg';

const Nav = styled.div`
    width:50%;
    max-height:300px;
    display:inline-flex;
    justify-content: space-evenly;
    place-self:self-end;
`
const Content = styled.span`
    display:flex;
    color: rgba(255,255,255,0.5);
    align-items: center;
    column-gap:10px;
    cursor:pointer;
    padding:10px 20px;
    transition: 0.2s ease-in-out;
    border: 2px solid transparent;
    font-size:20px;

    :hover{
        filter:brightness(1.3);
        border-bottom: solid 2px rgba(255,255,255,.8);
        color:white;
    }
`
export const Icon = styled.img`
    width:25px;
` 
const Navbar = ()=>{
    return(
        <Nav>
            <Content><Icon src={home}/>Home</Content>
            <Content><Icon src={card}/>NFTs</Content>
            <Content><Icon src={help}/>About</Content>
            <Content><Icon src={join}/>Join us</Content>
        </Nav>
    )
}
export default Navbar;