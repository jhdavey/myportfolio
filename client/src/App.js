import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import About from './components/pages/about';
import Portfolio  from './components/pages/portfolio';
import Resume from './components/pages/resume';
import Contact from './components/pages/contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route Component={Home} path='/' exact />
        <Route Component={About} path='/about' />
        <Route Component={Portfolio} path='/portfolio' />
        <Route Component={Resume} path='/resume' />
        <Route Component={Contact} path='/contact' />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;