import { Container, Row } from "../../GlobalStyle"
import { img_1, img_2 } from "../../assets"
import { ExploreWrapper } from "./ExploreStyle"


const Explore = () => {
  return (
    <ExploreWrapper id="Designs">
      <Container>
        <h1>explore designs</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu scelerisque <br /> accumsan, a vestibulum eget velit.</p>

        <Row>
          <div>
            <img src={img_1} alt="" width="100%" />
            <p className="text"><span>Residential</span> Designs</p>
          </div>

          <div>
            <img src={img_2} alt="" width="100%" />
            <p className="text"><span>Corporate</span> Designs</p>
          </div>
        </Row>
      </Container>
    </ExploreWrapper>
    
  )
}

export default Explore
