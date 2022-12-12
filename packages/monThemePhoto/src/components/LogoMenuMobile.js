import { connect, css } from "frontity"
import Image from "@frontity/components/image";
import { BreakPointPad } from "./varCss";

const LogoMenuMobile = ({state})=>{
  const media = state.source.url+"/wp-content/uploads/"
  return(
    <Image css={ImageLogo} src={media+ "2022/11/cropped-logoCharlesCantin.png"}/>
  )
}

export default connect(LogoMenuMobile)

const ImageLogo=css`
  width: 100px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  @media(max-width: ${BreakPointPad}){
    width: 70px;
    height: 70px;
  }
`