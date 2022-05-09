import React from "react";
import styled from "styled-components";
import Navbar, { Icon } from "./Navbar";
import discord from "../icons/discord.svg";
import instagram from "../icons/instagram.svg";
import twitter from "../icons/twitter.svg";
import arrowdown from "../icons/arrowdown.svg"
import arrowright from "../icons/arrowright.svg"
import { Link } from "react-router-dom";

const MainContent = styled.div`
  width: 100%;
  height: 100%;
  padding: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h1`
  margin-block-start: 0;
  margin-block-end: 0;
  color: rgba(255, 255, 255, 0.9);
  font-size: 50px;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 47%;
  height: 100%;
  margin-left: auto;
  justify-content: start;
  margin-top: 50px;
`;
const Subtitle = styled.h3`
  margin-block-end: 0;
  margin-block-start: 0;
  font-size: 18px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 20px;
  width: 75%;
`;
const Footer = styled.div`
  width: 70%;
  height: 50%;
  justify-content: center;
  display: flex;
  align-items: end;
`;
const Social = styled.div`
  display: flex;
  place-content: center;
  border-radius: 50px;
  padding: 10px;
  margin: 0 10px;
  border: solid 2px #fff;
  height: fit-content;
  cursor: pointer;
  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding:10px;
  width: 100%;
  justify-content: start;

`
const Button = styled.button`
  display:flex;
  flex-direction:row;
  place-items: center;
  column-gap:10px;
  background-color: transparent;
  padding: 15px 30px;
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin: 10px 10px;
  border:2px solid rgba(255, 255, 255, 0.6);
  border-radius:5px;
  cursor:pointer;
  transition:0.1s ease-in-out;
  :hover{
    background-color:rgba(255, 255, 255, 0.5)
  }
`

const Main = () => {
  return (
    <MainContent>
      <Navbar />
      <Content>
        <Title>Discover SOLARA</Title>
        <Subtitle>SOLARA is a new way to explore the NFTs world.</Subtitle>
        <Subtitle>Get yours and earn access to a lot of rewards and exiting stuff like free NFTs.</Subtitle>
        <Subtitle>Join this adventure now and help us with the revolution of NFTs.</Subtitle>
        <ButtonContainer>
            <Button>Create App <Icon src={arrowdown}/></Button>
            <Button>Buy Nft <Icon src={arrowright}/></Button>
          </ButtonContainer>
        <Footer>
          
          <Social><Icon src={discord}></Icon></Social>
          <Social><Icon src={instagram}></Icon></Social>
          <Social><Icon src={twitter}></Icon></Social>
        </Footer>
      </Content>
    </MainContent>
  );
};
export default Main;
