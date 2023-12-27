import React from 'react'
import { FooterWrapper } from './FooterStyle';
import { Container } from '../../GlobalStyle';

import Facebook from 'feather-icons-react/build/IconComponents/Facebook';
import Twitter from 'feather-icons-react/build/IconComponents/Twitter';
import Instagram from 'feather-icons-react/build/IconComponents/Instagram';
import Youtube from 'feather-icons-react/build/IconComponents/Youtube';

const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <div className='footer_area'>
          <div className="footer_1">
            <h1>HOMME <span>.</span></h1>
            <p>Beautiful design is welcoming</p>
          </div>
          <div className="footer_2">
            <div className="foot-1">
              <ul>
                <h3>Services</h3>
                <li>
                  <a href="/">Space Redesign</a>
                </li>
                
                <li>
                  <a href="/">Product Purchase</a>
                </li>

              </ul>
            </div>

            <div className="foot-2">
              <ul>
                <h3>Showcase</h3>
                <li>
                  <a href="/">Residential Design</a>
                </li>
                
                <li>
                  <a href="/">Corporate Design</a>
                </li>

              </ul>
            </div>

            <div className="foot-3">
              <ul>
                <h3>Website</h3>
                <li>
                  <a href="/">Privacy Policy</a>
                </li>
                
                <li>
                  <a href="/">Terms & Conditions</a>
                </li>

              </ul>
            </div>

            <div className="foot-4">
              <ul>
                <h3>Company</h3>
                <li>
                  <a href="/">Contact Us</a>
                </li>
                
                <li>
                  <a href="/">Careers</a>
                </li>

              </ul>
            </div>
          </div>
        </div>
        
        <div className='line'>
          <hr />
        </div>

        <div className="social_icons">
          <li><Instagram /></li>
          <li><Twitter /></li>
          <li><Facebook /></li>
          <li><Youtube /></li>
        </div>

        <div className="copyright">
          <p>Copyrights. All rights reserved.</p>
        </div>
        
      </Container>
    </FooterWrapper>
  )
}

export default Footer;
