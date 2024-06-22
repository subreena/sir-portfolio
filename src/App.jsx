import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./assets/Stylesheets/style1.css";
import "./assets/Stylesheets/responsive.css";
import Navigation from "./Components/Navigation";
import Home from "./Pages/Home";
import Rp from "./Pages/Rp";
import Saj from "./Pages/Saj";
import Tm from "./Pages/Tm";
import Contact from "./Pages/Contact";
import Prof from "./Pages/Prof";
import MainNav from "./Components/MainNav";

function App() {
  return (
    <>
    <MainNav/>
    <div className="appMain">
      
      <BrowserRouter>
     
      <Navigation />
  
      <div className="contentMain">
      <Routes>
      <>

      <Route path="/skills-and-job-details" element={<Saj/>}/>
      <Route path="/research-and-publications" element={<Rp/>}/>
      <Route path="/teaching-and-mentoring"  element={<Tm/>}/>
      <Route path="/contact-details" element={<Contact/>}/>
      <Route path="/professional-activities" element={<Prof/>}/>
      <Route path="/" element={<Home/>}/>
      </>
      </Routes>
      </div>
      
      </BrowserRouter>
    </div>
    </>
  );
}

export default App;
