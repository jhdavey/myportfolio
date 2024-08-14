import { Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Portfolio from './components/pages/portfolio';
import Resume from './components/pages/resume';
import Contact from './components/pages/contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' Component={Home} exact />
        <Route path='/about' Component={About} />
        <Route path='/portfolio' Component={Portfolio} />
        <Route path='/resume' Component={Resume} />
        <Route path='/contact' Component={Contact} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
