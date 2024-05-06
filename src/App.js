import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Banner from "./components/banner/banner";
import Services from "./components/services/services";
import Reviews from "./components/reviews/reviews";
import Footer from "./components/footer/footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />
      <Services />
      <Reviews />
      <Footer />
    </Router>
  );
}

export default App;
