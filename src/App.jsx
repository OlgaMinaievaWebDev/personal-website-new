import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
