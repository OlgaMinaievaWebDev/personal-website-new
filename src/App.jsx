import Hero from "./components/Hero";
import About from "./components/About";
import Header from './components/Header'
import Footer from './components/Footer'
import Work from "./components/Work";


function App() {
  return (
    <>
      <Header />
      <main>

      <Hero />
        <About />
        <Work/>
      </main>
      
      <Footer/>
    </>
  );
}

export default App;
