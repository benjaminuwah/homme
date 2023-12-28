/* eslint-disable jsx-a11y/alt-text */
import { Container } from '../../GlobalStyle'
import { logo } from '../../assets';
import { BtnGroup, Menu, Nav, NavWrapper } from './NavbarStyle'
import Button from '../button/Button';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';


const Navbar = () => {
  const [show, setShow] = useState(false);



  return (
    <NavWrapper>
      <Container>
        <Nav>
          <div className="logo">
            <AnchorLink href='#Home'>
              <img src={logo} width={120} />
            </AnchorLink>
          </div>

          <Menu className={show && "show"}>
            <ul>
              <li><AnchorLink href="#Designs">Designs</AnchorLink></li>
              <li><AnchorLink href="#Interiors">Interiors</AnchorLink></li>
              <li><AnchorLink href="#CaseStudies">Case Studies</AnchorLink></li>
              <li><AnchorLink href='#Clients'>Clients</AnchorLink></li>
            </ul>
          </Menu>

          <BtnGroup className={show && "show"}>
            <Button variant='text'>Sign In</Button>
            <Button>Sign Up</Button>
          </BtnGroup>

          <FeatherIcon onClick={() => setShow(!show)} icon={show ? "x" : "menu"} className='menu-icon' />

        </Nav>
      </Container>
      
    </NavWrapper>
  )
}

export default Navbar;
