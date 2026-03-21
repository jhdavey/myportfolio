import { Link } from 'react-router-dom';
import { deliveryModes, servicePillars } from '../data/siteContent';

export default function ServicesPage() {
  return (
    <section className='page services-page'>
      <header className='page-header fade-up'>
        <p className='eyebrow'>Services</p>
        <h1>AI systems engineering built for practical business impact.</h1>
        <p className='lead'>
          Work scopes are shaped around your operations, constraints, and growth targets, from architecture and
          build planning to full implementation in production.
        </p>
      </header>

      <section className='card-grid service-grid'>
        {servicePillars.map((service, index) => (
          <article className='card fade-up' style={{ '--delay': `${80 + index * 70}ms` }} key={service.name}>
            <h2>{service.name}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </section>

      <section className='split-section'>
        <article className='content-card fade-up'>
          <p className='section-kicker'>Delivery Modes</p>
          <ul className='simple-list'>
            {deliveryModes.map((model) => (
              <li key={model.name}>
                <h3>{model.name}</h3>
                <p>{model.detail}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className='content-card fade-up' style={{ '--delay': '120ms' }}>
          <p className='section-kicker'>What You Can Expect</p>
          <ul className='check-list'>
            <li>Clear technical architecture and delivery scope</li>
            <li>Systems designed for reliability, maintainability, and scale</li>
            <li>Cross-platform integrations with your existing tools</li>
            <li>Documentation and handoff support for ongoing operations</li>
          </ul>
          <Link className='button primary compact' to='/contact'>
            Scope Your Build
          </Link>
        </article>
      </section>
    </section>
  );
}
