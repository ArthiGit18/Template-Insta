import NavBar from "../../pages/navbar";
import Story from "../../pages/stories";
import Content from "../../pages/content";
import Footer from "../../pages/footer";

const Home = () => {
    return (
        <>
            <NavBar />
            <Story />
            <hr></hr>
            <Content />
            <hr></hr>
            <Footer />
        </>
    )
}

export default Home;