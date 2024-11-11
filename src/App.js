import "./App.css";
import {
  Footer,
  Header,
  SectionLeft,
  SectionRight,
  Sectionmiddle,
} from "./components";

const App = () => {
  return (
    <div className="container-all">
      <Header />
      <div className="center">
        <div className="namabesar">
          <h1>Riana Keni</h1>
        </div>
      </div>

      <main className="container-main">
        <SectionRight />
        <Sectionmiddle />
        <SectionLeft />
      </main>
      <Footer />
    </div>
  );
};

export default App;
