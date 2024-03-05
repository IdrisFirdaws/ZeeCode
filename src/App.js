import "./styles/global.scss";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
// import Partners from "./components/Partners";
import Search from "./components/Search";
import Teacher from "./components/Teacher";
import Testimonials from "./components/Testimonials";
import Community from "./components/Contact";
import QuoteBox from "./components/QuoteBox";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <QuoteBox />
      {/* <Partners /> */}
      <Search />
      <Courses />
      <Teacher />
      <Testimonials />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
