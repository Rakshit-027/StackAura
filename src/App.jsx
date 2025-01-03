import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import videoBackground from './assets/background-video-1.mp4'; // Add your video file here
import Navbar from './Components/Navbar/Navbar';
import Tagline from './Components/Text/Tagline';
import GetStarted from './Components/GetStarted/GetStarted.jsx';
import Cards from './Components/Cards/Cards';
import Pricing from './Components/Pricing/Pricing';
import { Developers } from './Components/DevCard/Developers.jsx';

function Home() {
  return (
    <>
      <div className="content">
        <div className="tagline">
          <Tagline
            heading="Transforming Your Ideas into Stunning Digital Experiences"
            sub="We Build Tailored Websites That Drive Success and Engage Your Audience"
          />
        </div>
        <div className="getstarted">
          <GetStarted />
        </div>
        <div className="cards">
          <Cards Name="Projects" count="Enter Numbers" />
          <Cards Name="Reviews" count="Enter Reviews" />
          <Cards Name="Tech used" count="Enter Tech used" />
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <Router>
      {/* Background video outside of Routes to persist across all pages */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content for the app */}
      <div className="app-content">
        {/* Navbar visible on all pages */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/developers" element={<Developers/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
