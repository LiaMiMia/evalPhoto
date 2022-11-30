import React from 'react'
import Link from "@frontity/components/link"
import {css, connect } from "frontity"
import { white, MenuConstant, black, pink, LinkTransition } from './varCss'


const MenuDesktop = ({state}) =>{
  const data = state.source.get(state.router.link)
  return(
  <div css={ data.isHome ?  ContentHome : ContentPage}>
      <Link link="/" css={data.isHome ? LinkStyledWhite : LinkStyledBlack}>Accueil</Link>
      <Link link="/tarifs-et-prestations/" css={data.isHome ? LinkStyledWhite : LinkStyledBlack}>Tarifs et Prestations</Link>
      <Link link="/gallerie/" css={data.isHome ? LinkStyledWhite : LinkStyledBlack}>Gallerie</Link>
      <Link link="/contact/" css={data.isHome ? LinkStyledWhite : LinkStyledBlack}>Contact</Link>
    </div>
  )
}

export default connect(MenuDesktop)

const LinkStyled = css`
  text-decoration: none;
  margin: 10px;
  padding: 10px;
`



const LinkStyledBlack = css`
  ${LinkStyled}
  color: ${black};
  &:hover{
    color: ${pink};
    animation-fill-mode: forwards;
    animation-duration: 0.3s;
    animation-name: ${LinkTransition};
  }
`

const LinkStyledWhite = css`
  ${LinkStyled}
  color: ${white};
`

const ContentHome = css`
  @media(min-width: 769px){
    position: fixed;
    bottom: 0;
    right: 7%;
    width: 60%;
    margin: 46px;
    border-bottom: 3px solid ${white};
  }
  ${MenuConstant}
`

const ContentPage = css`
  background-color: rgba(255, 255, 255, 20%);
  backdrop-filter: blur(10px);
  position: absolute;
  width: 70%;
  margin-left: 50%;
  transform: translateX(-50%);
  border-bottom: 3px solid ${black};
  ${MenuConstant}
  
`
const MenuStyled = css`

`