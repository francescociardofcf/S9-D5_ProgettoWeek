import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import MovieGallery from "../components/MovieGallery";

const HomePage = () => (
  <>
    <Navbar />
    <MovieGallery sagaName="Harry Potter" />
    <MovieGallery sagaName="Lord of the Rings" />
    <MovieGallery sagaName="Star Wars" />
    <Footer />
  </>
);

export default HomePage;
