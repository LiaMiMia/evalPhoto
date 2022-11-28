import React from "react";
import { connect, styled, css } from "frontity"
import Image from "@frontity/components/image";
import {BsTelephone, BsInstagram, BsFacebook} from 'react-icons/Bs';
import { black, IconTransition, white } from "./varCss";
//import {AiOutlineFacebook}from 'react-icons/Ai'; 

const MediaIcons = ({state})=>{
  const data = state.source.get(state.router.link);
  return(
    <MenuIcons css={css`color: ${data.isHome ? white : black}`}>
      <BsTelephone css={StyledImage}/>
      <BsInstagram css={StyledImage}/>
      <BsFacebook css={StyledImage}/>
    </MenuIcons>
  )
}

const MediaLogo = ({state})=>{
  const media = state.source.url+"/wp-content/uploads/"
  return(
    <StyledLogoImage src={media+ "2022/11/cropped-logoCharlesCantin.png"}/>
  )
}

export default connect(MediaIcons)


const StyledImage = css`
  scale: 3;
  margin: 30px;
  &:hover{
    animation-name: ${IconTransition};
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
  }
`

const MenuIcons = styled.div`
  display: flex;
  flex-direction: column;
`