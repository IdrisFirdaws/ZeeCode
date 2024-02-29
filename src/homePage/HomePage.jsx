import "./styles/global.scss";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Search from "./components/Search";
import Teacher from "./components/Teacher";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Community from "./components/Contact";

function HomePage() {
    return (
        <div className="App">
            <Navbar />
            <Hero />
            <Partners />
            <Search />
            <Courses />
            <Teacher />
            <Testimonials />
            <Community />
            <Footer />
        </div>
    );
}

export default HomePage;
