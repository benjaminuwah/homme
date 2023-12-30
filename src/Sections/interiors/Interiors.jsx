import { useRef } from "react"

import { Arrow, ArrowIcon, Designs, InteriorWrapper } from './InteriorStyles'
import { Container, Row } from '../../GlobalStyle'
import { banner1, banner2, banner3, banner4 } from '../../assets'

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Slide } from './InteriorStyles';
import FeatherIcon from "feather-icons-react/build/FeatherIcon";


const Interiors = () => {
  const owlRes = useRef();
  const owlCor = useRef();

  return (
    <InteriorWrapper id="Interiors">
      <Container>

        <Row>
          <div className="main">
            <div>
              <h1>intuitive interiors</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu scelerisque <br /> accumsan, a vestibulum eget velit.</p>
            </div>
            <Arrow>
              <ArrowIcon onClick={() => owlRes.current.prev()}>
                <FeatherIcon icon="arrow-left"  />
              </ArrowIcon>

              <ArrowIcon onClick={() => owlRes.current.next()}>
                <FeatherIcon icon="arrow-right"  />
              </ArrowIcon>
            </Arrow>
          </div>
        </Row>

        <Designs>
          <div className="left">
          <div className="text">
            <h1>Aesthetic Office</h1>
            <p>Lorem ipsum dolor sit amet, consectetur.</p>
            <hr />
            <h4>conference room <br /> <span>8 x 16 Feet</span></h4>
          </div>
          </div>
          <div className="right">
            <OwlCarousel className="owl-theme slider" loop items={1} nav={false} dots={false} ref={owlRes} >
              <Slide bg={banner1} />
              <Slide bg={banner2} />
              <Slide bg={banner3} />
              <Slide bg={banner4} />
            </OwlCarousel>
          </div>
        </Designs>
      </Container>
    </InteriorWrapper>
  )
}

export default Interiors
