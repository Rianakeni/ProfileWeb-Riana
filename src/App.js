import "./App.css";
import { Footer, Header, SectionLeft, SectionRight } from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <SectionRight />
        <SectionLeft />
      </main>
      <Footer />
    </div>
  );
};

export default App;
