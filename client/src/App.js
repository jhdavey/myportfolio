import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import WorkPage from './pages/WorkPage';
import UseCasesPage from './pages/UseCasesPage';
import ProcessPage from './pages/ProcessPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className='app'>
      <ScrollToTop />
      <SiteHeader />
      <main className='page-shell'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/services' element={<ServicesPage />} />
          <Route path='/work' element={<WorkPage />} />
          <Route path='/use-cases' element={<UseCasesPage />} />
          <Route path='/process' element={<ProcessPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='*' element={<Navigate to='/' replace />} />
        </Routes>
      </main>
      <SiteFooter />
    </div>
  );
}

export default App;
