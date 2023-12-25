/* eslint-disable jsx-a11y/alt-text */
import { Container } from '../../GlobalStyle'
import { logo } from '../../assets';
import { BtnGroup, Menu, Nav, NavWrapper } from './NavbarStyle'
import Button from '../button/Button';
import FeatherIcon from 'feather-icons-react/build/FeatherIcon';
import { useState } from 'react';


const Navbar = () => {
  const [show, setShow] = useState(false);



  return (
    <NavWrapper>
      <Container>
        <Nav>
          <div className="logo">
            <img src={logo} width={120} />
          </div>

          <Menu className={show && "show"}>
            <ul>
              <li><a href="/">Designs</a></li>
              <li><a href="/">Interiors</a></li>
              <li><a href="/">Case Studies</a></li>
              <li><a href="/">Clients</a></li>
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
