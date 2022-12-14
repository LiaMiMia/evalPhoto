import React from 'react'
import Link from "@frontity/components/link"
import {css, styled, connect} from "frontity"
import Image from "@frontity/components/image";
import {black, BreakPointPad, LinkTransition, pink} from './varCss'


const Footer = ({state}) =>{
  const media = state.source.url+"/wp-content/uploads/"
  return(
    <footer css={css`
      font-size: smaller;
      @media(max-width: ${BreakPointPad}){
        & > a{
          color: ${pink};
        }
      }
        
    `}>
      <ContentFooter>
      <FooterLogo src={media+ "2022/11/cropped-logoCharlesCantin.png"}/>
        <div css={css`width: 70%; height: 100%;`}>
        <h3 css={css`text-align:center; 
                    margin-bottom: 20px;
                    font-size: x-large; 
                    padding: 19px;
                    @media(max-width: 800px){
                      font-size: large;
                    }
                    `}>Partenaires</h3>
        <List>
          <UlStyled>
            <li><Link link="/" css={LinkStyled}>Marry-MeForever</Link></li>
            <li><Link link="/" css={LinkStyled}>PixPixart</Link></li>
            <li><Link link="/" css={LinkStyled}>Toftof</Link></li>
          </UlStyled>
          <UlStyled>
            <li><Link link="/" css={LinkStyled}>MoiJeux</Link></li>
            <li><Link link="/" css={LinkStyled}>PoufpoufTof</Link></li>
            <li><Link link="/" css={LinkStyled}>Fashionista</Link></li>
          </UlStyled>
        </List>
        </div>
      </ContentFooter>
    </footer>
  )
}

export default connect(Footer)

const LinkStyled = css`
  color: ${pink}; 
  margin: 10px;
  text-align : start;
  white-space: nowrap;
  &:hover{
    animation: ${LinkTransition} 0.3s;
    animation-fill-mode: forwards;
  }
`

const FooterLogo = styled(Image)`
  width: 100px;
  @media (max-width: ${BreakPointPad}){
    width: 70px;
    height: 70px;
  }
  @media (min-width: ${BreakPointPad}){
    right: 0.5%;
    height: 100px;
    width: 100px;
    margin: 5px;
    position: relative;
  }
  @media (max-width: 668px){
    display: none;
  }
`
const ContentFooter = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40vh;
  // border-bottom: black solid 1px;
  box-shadow: 0px -16px 19px 0px rgba(0,0,0,0.36);
  //text-align: center;
  padding: 20px;
`

const List = styled.div`
  display: flex;
  justify-content: space-around;
  height: 80%;
  align-items: center;

`

const UlStyled =styled.ul`
  height: 80%;
  display: flex;
  fex-direction: column;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
  list-style-type: none;
  border-left: 2px solid ${black};
  font-size: large;
  margin-right: auto;
  @media(max-width: 800px){
    font-size: inherit;
    
  }
`
