/* eslint-disable jsx-a11y/alt-text */
import { Container } from '../../GlobalStyle'
import { logo } from '../../assets';
import { Menu, Nav, NavWrapper } from './NavbarStyle'
import Button from '../button/Button';

const Navbar = () => {
  return (
    <NavWrapper>
      <Container>
        <Nav>
          <div className="logo">
            <img src={logo} width={120} />
          </div>
          <Menu>
            <ul>
              <li><a href="/">Designs</a></li>
              <li><a href="/">Interiors</a></li>
              <li><a href="/">Case Studies</a></li>
              <li><a href="/">Clients</a></li>
            </ul>
          </Menu>

          <div>
            <Button variant='text'>Sign In</Button>
            <Button>Sign Up</Button>
          </div>

        </Nav>
      </Container>
      
    </NavWrapper>
  )
}

export default Navbar;
