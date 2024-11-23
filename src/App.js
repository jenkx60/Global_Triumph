import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
// import About from './components/About';
// import Projects from './components/Projects';
import Investments from './components/Investments';
import Resources from './components/Resources';
import Login from './components/Login';
import Signup from './components/Signup';
import Footer from './components/Footer';
import Contact from './components/Contact';
import CareersContractor from './components/CareersContractor';
import OurEstate from './components/OurEstate';
import Careers from './components/Careers';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/careerscontractor' element={<CareersContractor />} />
        {/* <Route path='/projects' element={<Projects />} /> */}
        <Route path='/ourestate' element={<OurEstate />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/investments' element={<Investments />} />
        <Route path='resources' element={<Resources />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
