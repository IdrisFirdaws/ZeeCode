import "./styles/homePage.scss";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
// import Partners from "./components/Partners";
import Search from "./components/Search";
import Teacher from "./components/Teacher";
import Testimonials from "./components/Testimonials";
import Community from "./components/Contact";
import QuoteBox from "./components/QuoteBox";

function HomePage() {
    return (
        <div className="App">
            <Hero />
            <QuoteBox />
            {/* <Partners /> */}
            <Search />
            <Courses />
            <Teacher />
            <Testimonials />
            <Community />
        </div>
    );
}

export default HomePage;
