import React, {useState, useEffect} from "react"; 
import { connect, css, styled } from "frontity";
import MenuMobile from "./menuMobile";
import MenuDesktop from "./menuDesktop";
import MediaLogo from "./MediaLogo";
import {BreakPointPad} from "./varCss";
import MenuMobilePage from "./menuMobilePage";

const Menu = ({}) => {
  return (
    <div css={Position}>
      <MenuDesktop page="page" />
      <MediaLogo />
      <MenuMobilePage/>
    </div>
  )
}

const MenuHome = ({}) => {
  return (
    <div>
      <MenuDesktop page="home"/>
      <MenuMobile/>
    </div>
  )
}


export {Menu, MenuHome};

const Position = css`
  @media(min-width: ${BreakPointPad}){
  position: sticky;
  }
  height: 0px;
  top: 5vh;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
`


