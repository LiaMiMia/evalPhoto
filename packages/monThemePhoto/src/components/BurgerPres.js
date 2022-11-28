import React from "react"
import {connect, css} from "frontity" 
import { BreakPointPad } from "./varCss"

const DisplayedMenuMobile = ({state})=>{ 
  const data = state.source.get(state.router.link)
  data.isHome ? DisplayedMenuMobileHome : DisplayedMenuMobilePage
}  

export default connect(DisplayedMenuMobile)

const DisplayedMenuMobileHome = css`
  @media (max-width: ${BreakPointPad}) {
  	position: absolute;
    bottom: -85vh;
    right: 11vw;
  }
  @media (min-width: ${BreakPointPad}) {
  	display: none;
  }
`

const DisplayedMenuMobilePage = css`
  @media (max-width: ${BreakPointPad}) {
    position: absolute;
    right: 15%;
  }
  @media (min-width: ${BreakPointPad}) {
    display: none;
}
`
