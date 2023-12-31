import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Tech
} from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
         <Navbar/>
         <Hero/>
        </div>
         <About/>
         <Works/>
         <Experience/>
         <Feedbacks/>
         <Tech/>
         <div className="realtive z-0">
          <Contact/>
          <StarsCanvas/> 
         </div> 
      </div>
    </BrowserRouter>
  );
};

export default App;
