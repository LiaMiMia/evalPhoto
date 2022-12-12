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

const IconRotateTransitionOpen = keyframes`
    from{
      transform: rotate(0deg);
    }to{
      transform: rotate(180deg);
    }
`

const IconRotateTransitionClose = keyframes`
    from{
      transform: rotate(180deg);
    }to{
      transform: rotate(0deg);
    }
`
const animTranslateIconsClose = keyframes`
    from{
      transform: translateX(0);
    }to{
      transform: translateX(-70px);
    }
`
const animTranslateIconsOpen = keyframes`
    from{
      transform: translateX(-70px);
    }to {
      transform: translateX(0px);
    }
`
const menuAnim = keyframes`
    from{
      height: 100vh;
      color: ${pink};
      top: 0;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-image: url("http://charles-cantin-photographe.local/wp-content/uploads/2022/11/jakayla-toney-oEmI4JGpCGc-unsplash-scaled.jpg");
      background-color: #cccccc;
      background-size: contain;
      position: fixed;
      width: 200vw;
      transform: translateY(100vh); 
    }to{
      height: 100vh;
      color: ${pink};
      top: 0;
      left: 50%;
      right: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      justify-content: center;
      background-image: url("http://charles-cantin-photographe.local/wp-content/uploads/2022/11/jakayla-toney-oEmI4JGpCGc-unsplash-scaled.jpg");
      background-color: #cccccc;
      background-size: contain;
      position: fixed;
      width: 200vw;
    }

`

export {pink, 
        white, 
        BreakpointMobile, 
        BreakPointPad, 
        BreakPointDesktop, 
        MenuConstant, 
        black, 
        LinkTransition, 
        IconTransition, 
        IconRotateTransitionClose,
        IconRotateTransitionOpen, 
        animTranslateIconsClose,
        animTranslateIconsOpen, 
        menuAnim
      }