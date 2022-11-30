import React from "react"
import { connect, styled } from "frontity"
import Image from "@frontity/components/image";
import { BreakPointPad } from "./varCss";

const MediaLogo = ({state})=>{
  const media = state.source.url+"/wp-content/uploads/"
  const data = state.source.get(state.router.link)
  return(
    data.isHome ? 
    <a href="/"><HomeLogoImage src={media+ "2022/11/cropped-logoCharlesCantin.png"} /></a>: 
    <a href="/"><PageLogoImage src={media+ "2022/11/cropped-logoCharlesCantin.png"} href={'/'}/></a>
  )
}


export default connect(MediaLogo)

const HomeLogoImage = styled(Image)`
@media (min-width: ${BreakPointPad}) {
  width: 150px;
  height: 150px;
}
@media (max-width: ${BreakPointPad}) {
  width: 100px;
  height: 100px;
}
position: absolute;
  right: 10%;
  top: 4%;
`


const PageLogoImage = styled(Image)`
  width: 100px;
  @media (max-width: ${BreakPointPad}){
    margin-left:30px;
    transform: translateY(34%);
  }
  @media (min-width: ${BreakPointPad}){
    right: 0.5%;
    heigth: 100px;
    margin: 5px;
    position: absolute;
    top: -2.5vh;
  }
`


