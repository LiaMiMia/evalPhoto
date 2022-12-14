import React from "react"
import { styled, connect, css } from "frontity"
import { MobileBP } from "./varCss"



const Header = ()=>{
  return(
    <Container>
      
    </Container>
  )
}

export default connect(Header)

const Container = styled.div`
  height: 20vh;
  box-shadow: 0px 16px 19px 0px rgba(0,0,0,0.36);
  @media only screen and (orientation: landscape) and (max-width: ${MobileBP}){
    height: 32vh;
  }
`

