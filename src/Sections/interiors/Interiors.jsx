import React from 'react'
import { InteriorWrapper } from './InteriorStyles'
import { Container, Row } from '../../GlobalStyle'
import { banner1 } from '../../assets'


const Interiors = () => {
  return (
    <InteriorWrapper id="Interiors">
      <Container>

        <Row>
          <div className="main">
            <div>
              <h1>intuitive interiors</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu scelerisque <br /> accumsan, a vestibulum eget velit.</p>
            </div>
            <div>
              icon_arrow
            </div>
          </div>
        </Row>

        <div className="gallery">
          <div className="text">
            <h1>Aesthetic Office</h1>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
            <hr />
            <h4>conference room <br /> <span>8 x 16 Feet</span></h4>
          </div>

          <div className="images">
            <img src={banner1} alt="" />
            <img src={banner1} alt="" />
          </div>
        </div>
      </Container>
    </InteriorWrapper>
  )
}

export default Interiors
