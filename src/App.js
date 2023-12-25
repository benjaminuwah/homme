import { Footer, Navbar } from "./components";
import GlobalStyle from "./GlobalStyle";

import { CaseStudies, Clients, Explore, Hero, Interiors } from "./Sections"

function App() {
  return (
    <div>
      <GlobalStyle />
        <Navbar />
        <Hero />
    </div>

  );
}

export default App;
