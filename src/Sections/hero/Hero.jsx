import Marquee from "react-fast-marquee"
import { Container, Row } from "../../GlobalStyle"
import { hero_img, star1 } from "../../assets"
import Button from "../../components/button/Button"
import { HeroWrapper } from "./HeroStyle"


const Hero = () => {
  return (
      <HeroWrapper>
        <Container>
          <Row>
            <div className="left">
              <h1>Design your dream home</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem accusamus debitis facere sit, repellendus saepe deleniti neque praesentium distinctio, nihil cum. Quibusdam exercitationem eos deserunt quam illum est commodi optio?</p>
              <Button>Explore Gallery</Button>
            </div>
            <div className="right">
              <img src={hero_img} alt="" width='100%' />
            </div>
          </Row>
        </Container>
        <Marquee className="marq">
          <span className="text">Modern Design</span>
          <img src={star1} alt="" width='80%' />
          <span className="text">Modern Design</span>
          <img src={star1} alt="" width='80%' />
        </Marquee>
      </HeroWrapper>
      
  )
}

export default Hero
