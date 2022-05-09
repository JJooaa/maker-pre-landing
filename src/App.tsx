import { ReactComponent as Logo } from "./assets/logo.svg";
import "./App.css";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Beneftis from "./components/Beneftis";
import Hero from "./components/Hero";

const App = () => {
  return (
    <>
      <Logo className="mx-auto mb-16 md:mx-0" />
      <Hero />
      <Beneftis />
      <Pricing />
      <Footer />
    </>
  );
};

export default App;
