import React from "react"
import { connect, css, styled, Global } from "frontity"
import { Menu } from "./menu"
import Header from "./header"
import Footer from "./footer"
import FeaturedMedia from "./featuredMedia"
import MediasIcons from "./MediasIcons"
import { black, white } from "./varCss"
import {BsArrowDownCircle} from 'react-icons/Bs';




const List = ({ state }) => {
  const data = state.source.get(state.router.link)
  const category = state.source.category


  class Select extends React.Component{
    constructor(props){
      super(props); 
      this.state = {
        selectOptionValue: 10
      }
    }

    HandleOnchange = (event)=>{
      this.setState({
        selectOptionValue: event.target.value 
      })
      console.log(typeof(this.state.selectOptionValue));
    }


    render(){ 
      return (<div css={css`
        width: 80%;
      `}>
        <select type="select" onChange={this.HandleOnchange} css={selectStyle}>
      
          <option value="" css={selectOptionstyle}>Choisir une catégorie</option>
          {Object.keys(category).map((itemCat)=>{
            return(
              <option value={itemCat} css={selectOptionstyle}>{category[itemCat].name}</option>
            )
        })}

        </select>

      {data.items.map((item) => {
        const post = state.source[item.type][item.id]
        const fmediaId = post.featured_media
        const postCategoriesId = post.categories
        
        return( postCategoriesId.includes(Number(this.state.selectOptionValue)) ? 
          <div key={item.id} css={css`
            //height: 50vh;
            width: 40%;
            margin-left: auto;
            margin-right: auto;
            margin-top: 20px;
            margin-bottom: 20px;
            align-items: center;
            display: flex;
          `}>
       <FeaturedMedia id={fmediaId}/>
        
       </div> : null
        )
      })}

    </div>)
    
  }}


  return (
    <div>
       <Global
      styles={
        css`
        h2{
          text-align: center;
          margin: 10%;
          padding: 5%;
          border-bottom: solid 2px black;
          border-left: solid 2px black;
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
      <h2 css={css` width: 100%;`}>Gallerie</h2>
      <Select/>
      </Main>
      <Footer/>
    </div>
  )
}
const selectStyle = css`
  background-color: ${white};
  color: ${black};
  padding: 12px;
  width: 80%;
  border: none;
  font-size: 20px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  -webkit-appearance: button;
  appearance: button;
  outline: none;
  border-radius: 10% 10% 10% 10% / 44% 44% 38% 38%;
  border-bottom: 3px solid black;
  margin-left: 10%;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-right: 10%;
  cursor: pointer;
  &::after{
    color: black;
    font-size: 1rem;
    top: 6px;
    right: 10px;
    font-weight: 900;
  }
`
const selectOptionstyle = css `
  width: 80%;
  height: 30px;
  margin-left: 10%;
  margin-right: 10%;
  border: 2px solid black
`

const Main = styled.div`
  display: flex;
  display: inline-flex;
  width: 80%;
  flex-wrap: wrap;
  width: 80%;
  justify-content: center;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 50px;
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

export default connect(List)