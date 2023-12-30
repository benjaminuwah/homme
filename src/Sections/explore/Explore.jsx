import { useRef } from "react"

import FeatherIcon from "feather-icons-react/build/FeatherIcon"
import { Container, Row } from "../../GlobalStyle"
import { slide1, slide2 } from "../../assets"
import { Arrow, ArrowIcon, ExploreWrapper, Slide, SliderCol, SliderWrapper } from "./ExploreStyle"

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


const Explore = () => {
  const owlRes = useRef();
  const owlCor = useRef();

  return (
    <ExploreWrapper id="Designs">
      <Container>
        <h1>explore designs</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu scelerisque <br /> accumsan, a vestibulum eget velit.</p>

        {/* <Row>
          <div>
            <img src={img_1} alt="" width="100%" />
            <p className="text"><span>Residential</span> Designs</p>
          </div>

          <div>
            <img src={img_2} alt="" width="100%" />
            <p className="text"><span>Corporate</span> Designs</p>
          </div>
        </Row> */}

        <Row>
          <SliderCol>
            <SliderWrapper>
            <OwlCarousel className='owl-theme' loop items={1} nav={false} dots={false} ref={owlRes}>
              <Slide bg={slide1} />
              <Slide bg={slide2} />
            </OwlCarousel>
              <Arrow>
                <ArrowIcon onClick={() => owlRes.current.prev()}>
                  <FeatherIcon icon="chevron-left" />
                </ArrowIcon>
                <ArrowIcon>
                  <FeatherIcon icon="chevron-right" onClick={() => owlRes.current.next()} />
                </ArrowIcon>
              </Arrow>
            </SliderWrapper>
            <h3>Residential Designs</h3>
            <hr />
          </SliderCol>

          <SliderCol>
            <SliderWrapper>
              <OwlCarousel className='owl-theme' loop items={1} nav={false} dots={false} ref={owlCor}>
                <Slide bg={slide1} />
                <Slide bg={slide2} />
              </OwlCarousel>
              <Arrow>
                <ArrowIcon onClick={() => owlCor.current.prev()}>
                  <FeatherIcon icon="chevron-left" />
                </ArrowIcon>
                <ArrowIcon>
                  <FeatherIcon icon="chevron-right" onClick={() => owlCor.current.next()} />
                </ArrowIcon>
              </Arrow>
            </SliderWrapper>
            <h3>Corporate Designs</h3>
            <hr />
          </SliderCol>
          
        </Row>

      </Container>
    </ExploreWrapper>
    
  )
}

export default Explore
