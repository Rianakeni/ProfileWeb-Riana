import "./App.css";
import { Footer, SectionLeft, SectionRight, Sectionmiddle } from "./components";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const App = () => {
  return (
    <Fade>
      <div>
        <div className="center">
          <div className="namabesar">
            <Zoom>
              <h1>Riana Keni</h1>
            </Zoom>
          </div>
        </div>
        <main className="container-main">
          <SectionRight />
          <Sectionmiddle />
          <SectionLeft />
        </main>
        <Footer />
      </div>
    </Fade>
  );
};

export default App;
