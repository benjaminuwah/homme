import { Footer, Navbar } from "./components";
import GlobalStyle from "./GlobalStyle";

import { CaseStudies, Clients, Explore, Hero, Interiors } from "./Sections"

function App() {
  return (
    <div id="Home">
      <GlobalStyle />
        <Navbar />
        <Hero />
        <Explore id="Designs" />
        <Interiors id="interiors" />
        <CaseStudies id="CaseStudies" />
        <Clients id="Clients" />
        <Footer />
    </div>

  );
}

export default App;
