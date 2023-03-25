import './index.css';
import {Routes, Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './components/home';
import Faq from './pages/faq';

function App() {
  return (
    <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<Faq />} />
          </Routes>
        <Footer />
    </div>
  );
}

export default App;
