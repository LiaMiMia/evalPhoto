import { connect, styled, css } from 'frontity'
import Link from "@frontity/components/link"
import React from 'react'
import {BreakPointPad, pink, white} from './varCss'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgCloseR } from 'react-icons/cg'
import LogoMenuMobile from './LogoMenuMobile';

 
// import DisplayedMenuMobile from './BurgerPres';


class MenuMobilePage extends React.Component {
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
    this.setState({isloggedin: undefined});
  }

  render() {
    const isloggedin = this.state.isloggedin;
    let Menu;
    // const media = state.source.url+"/wp-content/uploads/"
    if (isloggedin === "true") {
      Menu = <MenuMobileOpen>
            <div css={MenuBox}>
            <LogoMenuMobile/>
              <Link link="/" css={StyledLink} onClick={this.handleLogoutClick}>Accueil</Link>
              <Link link="/tarifs-et-prestations/" css={StyledLink} onClick={this.handleLogoutClick}>Tarifs et Prestations</Link>
              <Link link="/gallerie/" css={StyledLink} onClick={this.handleLogoutClick}>Gallerie</Link>
              <Link link="/contact/" css={StyledLink} onClick={this.handleLogoutClick}>Contact</Link>
              <CgCloseR onClick={this.handleLogoutClick} css={IconCssClose}/>
            </div>
        </MenuMobileOpen>
    } else {
      Menu = <GiHamburgerMenu css={Iconcss} onClick={this.handleLoginClick}/>
    }

    return (
      <div isloggedin={isloggedin} css={DisplayedMenuMobilePage} >
        {Menu}
      </div>
    );
  }
}


export default connect(MenuMobilePage)

const LogoImage=css`
  margin-left: auto;
  margin-right: auto;
`
const Iconcss=css`
  scale: 3;
  color: ${white};
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
  width: 70vw;
  background-color: ${white};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
`
const MMC = styled.div`
  position: absolute;
  bottom: -85vh;
  right: 11vw;
`


const MenuMobileOpen = styled.div`
  position: fixed;
  background-image: url("http://charles-cantin-photographe.local/wp-content/uploads/2022/11/jakayla-toney-oEmI4JGpCGc-unsplash-scaled.jpg");
  background-color: #cccccc;
  background-size: contain;
  position: fixed;
  width: 200vw;
  height: 100vh;
  color: ${pink};
  top: 0;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  `

const DisplayedMenuMobilePage = css`
  @media (max-width: ${BreakPointPad}) {
    position: absolute;
    right: 15%;
    & > svg {
      color: ${pink};
    }
  }
  @media (min-width: ${BreakPointPad}) {
    display: none;
}
`