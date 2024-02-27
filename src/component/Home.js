import AboutMe from "./AboutMe";
import AboutMe_2 from "./AboutMe_2";
import Header from "./Header";
import Skills from "./Skills";

const Home = () => {
    return (
        <div className="Home">
            <Header />
            <AboutMe />
            <AboutMe_2 />
            <Skills />
        </div>
    );
}
export default Home;