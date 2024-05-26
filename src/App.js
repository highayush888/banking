import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Css/App.css';
import Navbar from './Components/Navbar';
import Footer2 from './Components/Footer2';
import RoundButton from './Components/RoundButton';
import ScrollButton from './Components/ScrollButton';
import Footer3 from './Components/Footer3';

// imports for page starts here  
import Home from './Pages/Home';
import Aboutus from './Pages/Aboutus';
import Features from './Pages/Features';
import Contactus from './Pages/Contactus';
import Solutions from './Pages/Solutions';
import Products from './Pages/Products';
import Partners from './Pages/Partners';
import Resources from './Pages/Resources';
import Support from './Pages/Support';
import Counters from './Components/Counters';

// import of pages ends here 
import Droppage from './Pages2/Droppage';
// import of pages 2 starts here

// import of pages 2 starts here
// import MyComponent from './Components/MyComponent';
// import MyModal from './Components/MyModal';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
import MyModal from './Components/MyModal';
import OffcanvasNavbar from './Components/OffcanvasNavbar';
import Productdrop from './Pages2/Productdrop';
// import { AnimatedBeamDemo } from './Components/AnimatedBeamDemo';



const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        {/* <OffcanvasNavbar/> */}
        <div className='app-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/feature" element={<Features />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products" element={<Products />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/support" element={<Support />} />
          {/* Other routes */}

          {/* Routes for solution pages 2 starts here */}
          <Route path="/website-development" element={<Droppage />} />
          {/* Routes for solution pages 2 ends here */}

           {/* Routes for product pages 2 starts here */}
           <Route path="/Nidhi-Company-Software" element={<Productdrop />} />
          {/* Routes for product pages 2 ends here */}
         
        </Routes>
        </div>
        {/* <Footer2 /> */}
        {/* <Counters/> */}
        <Footer3/>
        
        {/* <MyComponent/>
        <MyModal/> */}
        <MyModal/>
         {/* <AnimatedBeamDemo/> */}
        <RoundButton />
        <ScrollButton />
        
      </Router>
    </div>
  );
}

export default App;
