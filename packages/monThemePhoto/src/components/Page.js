import connect from "@frontity/connect"
import Header from "./header"
import { styled, css, Global } from "frontity"
import { Menu } from "./menu"
import Footer from "./footer"
import { BreakPointPad } from "./varCss"
import MediasIcons from "./MediasIcons"
import { black } from "./varCss"



const Page = ({state, libraries}) => {
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]
  const Html2React = libraries.html2react.Component
  return(
      <div>
        <Global
      styles={
        css`
        h2{
          text-align: center;
        }
        span, input, textarea {
          width: 100%;
          display: block;
        }
        input, textarea{
          border-bottom: 3px solid black;
          border-left: 3px solid black;
          border-top: 0px;
          border-right: 0px;
          height: 40px;
          margin: 10px;
        }

        textarea{
          height: 20vh;
        }

        label{
          width: 100%;
          display: inline-block;
        }

        form{
          margin: 20px;
          padding: 20px; 
        }

        .submitButton{
          width: 50%;
          border: solid black 3px;
          border-radius: 10px;
        }

        .first-text{
          margin: 20px;
          text-align: center;
        }

        .itemBox{
          display: flex;
          justify-content: flex-start;
          margin-top: 10px;
          & > .itemBoxText{
            display:flex;
            flex-direction:column;
            justify-content: space-evenly; 
            margin: 4%;
            align-items: flex-start;
          }
          
          &>div{
            flex-basis: unset;
            
            display: flex;
            justify-content: center;
            align-items: center;
            width: fit-content;
            margin: 10px;

          }
        }

        .figureBox{
          width: 60px;
        }
        
        #wpcf7-f116-o1{
          display: block;
        }
        `
        
      }
    />
        <Menu/>
        <Header/>
        <div css={MediaIconsStyled}>
          <MediasIcons css={css`color: ${black}`}/>
        </div>
        <Main>
          <h2 css={TitleCss}>{page.title.rendered}</h2>
          <div css={MainCss}>
          <Html2React html={page.content.rendered}/>
          </div>
        </Main>
        <Footer/>
      </div>
  )
}


export default connect(Page)
const TitleCss = css`
  margin: 10%;
  padding: 5%;
  border-bottom: solid 2px black;
  border-left: solid 2px black
`
const MainCss = css`
  width: 100%;
  @media (min-width :${BreakPointPad}){
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    & > div {
      display: flex;
      width: 100%;
      justify-content: center;
      & >form {
        width: 100%;
        min-height: 50vh;
      }
      & > .screen-reader-response{
        width: 0%;
      }
      & > div{
        width: 40%;
        padding: 10px;
          display: flex;
          flex-direction: column;
          justify-content: space-around
        
      }
    }
      
  }
  
`

const Main = styled.div`
  width: 80%;
  overflow-x: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 5%;
  margin-bottom: 5%;
`

const MenuPosition = css`
    margin-left: 50%;
    transform: translateX(-50%);
`

const MediaIconsStyled = css`
  position: fixed; 
  color: ${black};
  height: auto;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
  margin-left: 30px;

`
