import React from "react"
import {connect, Global, css} from "frontity"
import Page from "./Page"
import HomePage from './homePage'
import TheHead from "./head"
import Loader from "./loader"
import GalleriePage from "./galleriePage"
import List from "./post"


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
      `}
    />
      <TheHead></TheHead>
      {/* <Loader/>  */}
      {data.isFetching && <Loader/>||
        (data.isHome && <HomePage data={data} css={css`
          width: 100vw;
          height: 100vh;
        `}/>)||
        (data.isPage && <Page data={data}/>)||
        (data.isArchive && <List/>)}
      {/* <GalleriePage/> */}
    </>
  )
}

export default connect(Root)