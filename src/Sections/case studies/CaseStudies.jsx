import { Container } from "../../GlobalStyle"
import { StudiesWrapper } from "./CaseStudiesStyle"

import Frame4 from "../../assets/Frame 4.png"

const CaseStudies = () => {
  return (
    <StudiesWrapper>
      <Container>
        <h1>case studies</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu scelerisque <br /> accumsan, a vestibulum eget velit.</p>
        <img src={Frame4} alt="" width="100%" />
        <div className="text">
          <h1>Lounge Re-design</h1>
          <p>Learn More</p>
        </div>
      </Container>
    </StudiesWrapper>
  )
}

export default CaseStudies;
