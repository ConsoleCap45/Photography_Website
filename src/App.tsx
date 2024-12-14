import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./font.css";
import AboutUs from "./pages/About/about";
import Portfolio from "./pages/Portfolio/portfolio";
import Gallery from "./pages/Gallary/gallery";
import Service from "./pages/Service/service";
import EnquireUs  from "./pages/Contact/contact"
import Home from "./pages/Home/home";
//import Demo from "./pages/Demo/demo";

function App() {
  return (
    <>
      {/* <h1 className='text-xl font-bold text-red-500'>Hello Tailwind Css</h1> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Demo />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/service" element={<Service />} />
          <Route path="/enquire" element={<EnquireUs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
