import React from "react";
import {useState} from "react";
import { connect, styled, css } from "frontity"
import Image from "@frontity/components/image";
import {BsTelephone, BsInstagram, BsFacebook, BsArrowBarRight} from 'react-icons/Bs';
import { black, BreakPointPad, IconTransition, white, pink, IconRotateTransitionClose, IconRotateTransitionOpen, animTranslateIconsClose, animTranslateIconsOpen } from "./varCss";
//import {AiOutlineFacebook}from 'react-icons/Ai'; 

const MediaIcons = ({state})=>{
  const data = state.source.get(state.router.link);

  const [TF, setTF] = useState("false");
  const openAnimIcon = css`
    color: ${pink};
  `
  const closeAnimIcon = css`
    color: ${black};
  `
  const [animRotateIcon, setanimRotateIcon] = useState(closeAnimIcon);
  const [animTranslateIcons, setanimTranslateIcons] = useState(animTranslateIconsClose)
  
  const ArrowStyled = css`
  scale: 2;
  color: ${pink};
  display: none;
  @media(max-width:${BreakPointPad}){
    display: ${ data.isHome ? 'none' : 'flex'};
    animation: 1s ${animRotateIcon}; 
    animation-fill-mode: forwards;
  }
  `
const divIconsStyled = css`display: flex; 
align-items: center; 
background-color: ${white};
border-radius: 20px; 
padding: 10px;
@media(max-width:${BreakPointPad}){
  animation : 1s ${animTranslateIcons};
  animation-fill-mode: forwards;
}
`

const divIconHome = css`
display: flex; 
align-items: center;  
padding: 10px;
`

  function toggleTF(){
    if(TF === "true"){
      setTF("false");
      translateIcons()
      console.log("TF = "+ TF)
    }else{
      setTF("true");
      translateIcons();
      console.log("TF = "+ TF)
    }
  }
  

  function translateIcons(){
    if(TF === 'true'){
      setanimRotateIcon(IconRotateTransitionClose);
      setanimTranslateIcons(animTranslateIconsClose);
    }else{
      setanimRotateIcon(IconRotateTransitionOpen);
      setanimTranslateIcons(animTranslateIconsOpen);
    }
  }


  return(
    <div css={data.isHome ? divIconHome : divIconsStyled}>
      <MenuIcons css={css`color: ${data.isHome ? white : black}`}>
        <BsTelephone css={StyledImage}/>
        <BsInstagram css={StyledImage}/>
        <BsFacebook css={StyledImage}/>
      </MenuIcons>
      <BsArrowBarRight css={ArrowStyled} onClick={toggleTF}/>
    </div>
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

