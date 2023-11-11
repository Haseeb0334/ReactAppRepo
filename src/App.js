import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer'
import Projects from './components/Projects';
import Review from './components/Review';
import Contact from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function App() {
  return (
    <div>
      <Header/>
      <HeroSection/>
      <Projects/>
      <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="mb-3"
    >
      <Tab eventKey="home" title="Buyer Reviews">
      <h1>Reviews</h1>
      </Tab>
      <Tab eventKey="profile" title="Seller Reviews">
        <h1>Reviews</h1>
      </Tab>
      </Tabs>

      
      <Footer/>
      
      
      <Contact/>
    

    </div>
  );
}

export default App;
