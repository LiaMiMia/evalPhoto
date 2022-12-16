import React from "react"
import {connect, Global, css} from "frontity"
import Page from "./Page"
import HomePage from './homePage'
import TheHead from "./head"
import Loader from "./loader"
import List from "./post"
import {menuAnimClose, pink, menuAnimOpen, menuAnimOpenPage, menuAnimClosePage, white } from "./varCss"


const Root = ({state}) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Global
      styles={css`

        body{
          width: 100vw;
        }

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html{
          font-family: 'Nova Mono', monospace;;
        }
        figure{
          margin: 2%;
        }
        a{
          text-decoration: none;
        }
        img{
          max-width: 100%;
          height: auto;
        }

        h2{
          font-weight: initial;
        }
        .MenuMobileOpen{
          height: 100vh;
          color: ${pink};
          right: -11vw;
          bottom: -6vh;
          z-index: 1;
          //left: 50%;
          //right: 50%;
          transform: translateY(100vh);
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-image: url("http://charles-cantin-photographe.local/wp-content/uploads/2022/11/jakayla-toney-oEmI4JGpCGc-unsplash-scaled.jpg");
          background-color: #cccccc;
          background-size: contain;
          position: absolute;
          width: 100vw;
          animation: 0.3s ease-in ${menuAnimOpen};
          animation-fill-mode: forwards;
        }

        .MenuMobileClose{
          height: 100vh;
          color: ${pink};
          right: -11vw;
          bottom: -6vh;
          z-index: 1;
          transform: translateY(100vh);
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-image: url("http://charles-cantin-photographe.local/wp-content/uploads/2022/11/jakayla-toney-oEmI4JGpCGc-unsplash-scaled.jpg");
          background-color: #cccccc;
          background-size: contain;
          position: absolute;
          width: 100vw;
          animation: 0.3s ease-in ${menuAnimClose};
          animation-fill-mode: forwards;
        }

        .MenuMobileOpenPage{
          height: 100vh;
          color: ${pink};
          right: -15vw;
          top: -15vh;
          z-index: 3;
          transform: translateY(100vh);
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-image: url("http://charles-cantin-photographe.local/wp-content/uploads/2022/11/jakayla-toney-oEmI4JGpCGc-unsplash-scaled.jpg");
          background-color: #cccccc;
          background-size: contain;
          position: absolute;
          width: 100vw;
          animation: 0.3s ease-in ${menuAnimOpenPage};
          animation-fill-mode: forwards;
        }

        .MenuMobileClosePage{
          height: 100vh;
          color: ${pink};
          right: -15vw;
          top: -15vh;
          z-index: 3;
          transform: translate(10vh,100vh);
          display: flex;
          flex-direction: column;
          justify-content: center;
          background-image: url("http://charles-cantin-photographe.local/wp-content/uploads/2022/11/jakayla-toney-oEmI4JGpCGc-unsplash-scaled.jpg");
          background-color: #cccccc;
          background-size: contain;
          position: absolute;
          width: 100vw;
          animation: 0.3s ease-in ${menuAnimClosePage};
          animation-fill-mode: forwards;
        }

        .form-submit{
          width: 23%;
          color: ${pink};
          font-size: large;
          border-radius: 10px;
          &:hover{
            background-color: ${pink};
            color : ${white};
          }
        }
      `}
    />
      <TheHead></TheHead>
      {data.isFetching && <Loader/>||
        (data.isHome && <HomePage data={data} css={css`
          width: 100vw;
          height: 100vh;
        `}/>)||
        (data.isPage && <Page data={data}/>)||
        (data.isArchive && <List/>)}
    </>
  )
}

export default connect(Root)