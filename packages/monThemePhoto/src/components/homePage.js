import React from "react"
import { connect, styled, css } from "frontity"
import {MenuHome} from "./menu"
import FeaturedMedia from "./featuredMedia"
import { white} from "./varCss"
import MediaIcons from "./MediasIcons"
import MediaLogo from "./MediaLogo"


const HomePage = ({state , libraries})=>{
  const data = state.source.get(state.router.link)
  const page = state.source[data.type][data.id]
  const Html2React = libraries.html2react.Component

  return(
    <div css={css`
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    `}>
      <div css={css`
                //transform: translateY(-50%);
                width: 100%; 
                height: 100%;
      `}>
        <FeaturedMedia id={page.featured_media} />
      </div>
    <MediaLogo/>
    <Content>
      <div css={PageContentStyled}><Html2React html={page.content.rendered} /></div>
        <div css={MenuPosition}>
          <MenuHome/>
        </div>
        
    </Content>
    <div css={MediaIconsStyled}>
      <MediaIcons></MediaIcons>
    </div>
    </div>
  )
}

export default connect(HomePage)

const MenuPosition = css`
    bottom: 0;
    margin: 46px;
    padding: 9px;
    right: 7%;
`

const Content = styled.div`
  z-index: 1;
  position: absolute;
  width: 100%;
  top: 50%;
`

const PageContentStyled = css`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 200px; 
    height: 100px;
    color: ${white};
    display: flex;
    flex-direction: column;
    align-items: center;
`
const MediaIconsStyled = css`
  position: absolute; 
  height: auto;
  top: 50%;
  left: 20px;
  transform: translate(-50%, -50%);
  margin-left: 30px;

`