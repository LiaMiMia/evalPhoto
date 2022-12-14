import React from 'react'
import Link from "@frontity/components/link"
import {css, connect, keyframes } from "frontity"
import { white, MenuConstant, black, pink, IconTransition } from './varCss'


const MenuDesktop = ({state}) =>{
  const data = state.source.get(state.router.link);

  const menuItemTransition = keyframes`
    0%{
      border-top: 2px solid ${data.isHome ? white : black};
    }
    33%{
      border-right: 2px solid ${data.isHome ? white : black};
    66% {
      border-bottom: 2px solid ${data.isHome ? white : black};
    }
    100%{
      border-left: 2px solid ${data.isHome ? white : black};
    }
  `

  const LinkHover = css`
    display:block;
    border: 2px solid rgba(255, 255, 255, 0.01);
    &:before{
      transition: all .5s;
    }
    &:hover{
      animation-name: ${menuItemTransition};
      animation-duration: 2s;
      animation-iteration-count: infinite;
      animation-timing-function: linear;
      opacity: 1;
    }
    `

  return(
  <div css={ data.isHome ?  ContentHome : ContentPage}> 
    <div css={LinkHover}><Link link="/" css={data.isHome ? LinkStyledWhite : LinkStyledBlack}>Accueil</Link></div> 
    <div css={LinkHover}><Link link="/tarifs-et-prestations/" css={data.isHome ? LinkStyledWhite : LinkStyledBlack}>Tarifs et Prestations</Link></div>
    <div css={LinkHover}><Link link="/gallerie/" css={data.isHome ? LinkStyledWhite : LinkStyledBlack}>Gallerie</Link></div>
    <div css={LinkHover}><Link link="/contact/" css={data.isHome ? LinkStyledWhite : LinkStyledBlack}>Contact</Link></div>
  </div>
  )
}

export default connect(MenuDesktop)

const LinkStyled = css`
  text-decoration: none;
  margin: 10px;
  padding: 10px;
  font-size: larger;
`



const LinkStyledBlack = css`
  ${LinkStyled}
  color: ${pink};
  &:hover{
    color: ${black};
  }
`

const LinkStyledWhite = css`
  ${LinkStyled}
  color: ${pink};
  &:hover{
    color: ${white};
  }
`

const ContentHome = css`
  @media(min-width: 769px){
    position: fixed;
    bottom: 0;
    right: 7%;
    width: 60%;
    height: 10vh;
    margin: 46px;
    background-color: rgba(255, 255, 255, 50%);
    backdrop-filter: blur(10px);
    &:hover{
      border-color: ${white};
    }
  }
  ${MenuConstant}
`

const ContentPage = css`
  background-color: rgba(255, 255, 255, 50%);
  backdrop-filter: blur(10px);
  position: absolute;
  width: 70%;
  height: 10vh;
  margin-left: 50%;
  transform: translateX(-50%);
  border-bottom: 3px solid ${pink};
  &:hover{
    border-color: ${black};
  }
  ${MenuConstant}
  
`