import Courses from "../components/LandingPageComponents/Courses";
import Hero from "../components/LandingPageComponents/Hero";
import QuoteBox from "../components/LandingPageComponents/QuoteBox";
import Search from "../components/LandingPageComponents/Search";
import Teacher from "../components/LandingPageComponents/Teacher";
import Testimonials from "../components/LandingPageComponents/Testimonials";
import Community from "../components/LandingPageComponents/Contact";


function LandingPage() {
    return (
        <div className="App">
            <Hero />
            <QuoteBox />
            <Search />
            <Courses />
            <Teacher />
            <Testimonials />
            <Community />
        </div>
    );
}

export default LandingPage;
