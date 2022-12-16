import { connect, styled, css, keyframes } from 'frontity'
import Link from "@frontity/components/link"
import React from 'react'
import {BreakPointPad, pink, white} from './varCss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg'
import LogoMenuMobile from './LogoMenuMobile';
// import DisplayedMenuMobile from './BurgerPres';


class MenuMobile extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = {isloggedin: undefined};
  }

  handleLoginClick() {
      this.setState({isloggedin: "true"});
  }

  handleLogoutClick() {
      var MenuElement = document.getElementById('OpenMenu');
      MenuElement.classList.add('MenuMobileClose');
    setTimeout(()=>{
      this.setState({isloggedin: undefined});
      MenuElement.classList.remove('MenuMobileClose');
    }, '400')
    
  }

  render() {
    const isloggedin = this.state.isloggedin;
    let Menu;
    // const media = state.source.url+"/wp-content/uploads/"
    if (isloggedin === "true") {
      Menu =
        <div id='OpenMenu' className='MenuMobileOpen'>
          <div css={MenuBox}>
            <LogoMenuMobile/>
            <Link link="/" css={StyledLink}>Accueil</Link>
            <Link link="/tarifs-et-prestations/" css={StyledLink}>Tarifs et Prestations</Link>
            <Link link="/gallerie/" css={StyledLink}>Gallerie</Link>
            <Link link="/contact/" css={StyledLink}>Contact</Link>
            <CgCloseR onClick={this.handleLogoutClick} css={IconCssClose}/>
          </div>
      </div>
      ;
    } else {
      Menu = <div css={css` width: 80px; height: 80px;`}>
        <GiHamburgerMenu css={Iconcss} onClick={this.handleLoginClick}/>
      </div>
    }

    return (
      <div isloggedin={isloggedin} css={DisplayedMenuMobile} >
        {Menu}
      </div>
    );
  }
}

// Ce qu'on peut faire : 
// 1) menu = burger (isLoggedIn: undefined)
// 2) onClick menu = grand-Menu => animation (animation terminée)> (isLoggedIn: true)
// 3) onClick => animation (animation terminée)> menu = petitMenu (isLoggedIn: undefined)

export default connect(MenuMobile)

const LogoImage=css`
  margin-left: auto;
  margin-right: auto;
`
const Iconcss=css`
  scale: 3;
  color: ${pink};
`

const IconCssClose=css`
  color: ${pink};
  scale: 3;
  margin-left: auto;
  margin-right: auto;
`


const StyledLink=css`
  color: ${pink};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: space-around;
`
const MenuBox = css`
  height: 100%;
  width:70vw;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
  background-color: ${white};
`
const AnimMenuBoxClose = keyframes`
  from{
    ${MenuBox}
  }to{
    display: none; 
  }
`
const MenuBoxClose = css`
  animation: 0.3s ease-in ${AnimMenuBoxClose};
`
const MMC = styled.div`
  position: absolute;
  bottom: -30vh;
  right: 11vw;
`


// const MenuMobileOpen = styled.div`
//   height: 100vh;
//   color: ${pink};
//   right: -11vw;
//   bottom: -6vh;
//   z-index: 1;
//   //left: 50%;
//   //right: 50%;
//   transform: translateY(100vh);
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   background-image: url("http://charles-cantin-photographe.local/wp-content/uploads/2022/11/jakayla-toney-oEmI4JGpCGc-unsplash-scaled.jpg");
//   background-color: #cccccc;
//   background-size: contain;
//   position: absolute;
//   width: 100vw;
//   animation: 0.3s ease-in ${menuAnimOpen};
//   animation-fill-mode: forwards;
//   `
  
const DisplayedMenuMobile = css`
  @media (max-width: 1000px) {
  	position: absolute;
    bottom: -44vh;
    right: 11vw;
  }
  @media (min-width: 1000px) {
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

