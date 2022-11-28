import {css, keyframes} from "frontity"

const black = 'black'
const white = 'white'
const pink = '#9C17ED'
const BreakpointMobile = '100px'
const BreakPointPad = '768px'
const BreakPointDesktop = '100px'
const MenuConstant = css`
@media(min-width: 769px){
  display: flex;
  justify-content: space-around;
  padding: 9px;
  
  border-radius: 5% 5% 5% 5%/ 50% 50% 50% 50%;
}
display: none;
` 

const LinkTransition = keyframes`
    from{
      color: black; 
    }
    to{
      color:${pink};
      scale: 1.3;
    }
`

const IconTransition = keyframes`
    from{
      color: black; 
    }
    to{
      color:${pink};
      scale: 3.3;
    }
`


export {pink, white, BreakpointMobile, BreakPointPad, BreakPointDesktop, MenuConstant, black, LinkTransition, IconTransition}