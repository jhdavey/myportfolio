import { useEffect, useMemo, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Overview', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Use Cases', path: '/use-cases' },
  { label: 'Work', path: '/work' },
  { label: 'Process', path: '/process' },
  { label: 'Contact', path: '/contact' },
];

function MenuIcon() {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' className='menu-icon'>
      <path d='M4 7h16M4 12h16M4 17h16' />
    </svg>
  );
}

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const activePath = useMemo(() => location.pathname, [location.pathname]);

  useEffect(() => {
    setIsOpen(false);
  }, [activePath]);

  return (
    <header className='site-header'>
      <div className='header-inner'>
        <NavLink className='brand' to='/'>
          <span className='brand-mark'>HD</span>
          <span className='brand-text'>Harley Davey</span>
        </NavLink>

        <button
          className='menu-toggle'
          type='button'
          aria-expanded={isOpen}
          aria-label='Toggle navigation'
          onClick={() => setIsOpen((value) => !value)}
        >
          <MenuIcon />
        </button>

        <nav className='desktop-nav' aria-label='Primary'>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => (isActive ? 'nav-link active' : 'nav-link')}
              end={item.path === '/'}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <nav className={isOpen ? 'mobile-nav open' : 'mobile-nav'} aria-label='Mobile primary'>
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) => (isActive ? 'mobile-link active' : 'mobile-link')}
            end={item.path === '/'}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
