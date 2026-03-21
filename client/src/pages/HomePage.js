import { Link } from 'react-router-dom';
import { ReactComponent as WorldMapOutline } from '../assets/world-outline.svg';
import projectOneImage from '../assets/notetaker.png';
import projectTwoImage from '../assets/portfolio_screenshot.png';
import projectThreeImage from '../assets/jsg.png';
import { popularUseCases, processSteps, servicePillars } from '../data/siteContent';

const recentWork = [
  {
    title: 'Service Operations Automation',
    summary:
      'Built an end-to-end intake and follow-up workflow that connected inbound requests directly to service operations.',
    impact: 'Less manual triage and faster client response cycles.',
    image: projectOneImage,
  },
  {
    title: 'Business Workflow Modernization',
    summary: 'Unified disconnected tools into one operational system with role-based automation and smarter alerts.',
    impact: 'Better team visibility and fewer handoff failures.',
    image: projectTwoImage,
  },
  {
    title: 'AI-Enhanced Customer Experience',
    summary: 'Implemented guided AI-assisted flows that reduced friction from first touch through action.',
    impact: 'A clearer customer journey with faster decision support.',
    image: projectThreeImage,
  },
];

const featuredCaseStudies = popularUseCases.slice(0, 4);

function LocationIcon() {
  return (
    <svg viewBox='0 0 24 24' aria-hidden='true' className='hero-location-icon'>
      <path d='M12 22s7-6.4 7-12a7 7 0 10-14 0c0 5.6 7 12 7 12z' />
      <circle cx='12' cy='10' r='2.5' />
    </svg>
  );
}

export default function HomePage() {
  return (
    <section className='page home-page'>
      <section className='home-hero-full'>
        <WorldMapOutline className='hero-world-map' aria-hidden='true' />
        <div className='home-hero-content fade-up'>
          <p className='hero-role'>AI Systems Engineer</p>
          <h1 className='hero-name'>Harley Davey</h1>
          <p className='hero-location'>
            <LocationIcon />
            Orlando, FL
          </p>
          <p className='hero-description'>
            I help teams modernize their systems and processes by integrating AI into real day-to-day workflows.
            As a full stack developer, I know how to build and deliver complex systems that are practical,
            reliable, and built to last.
          </p>
        </div>
      </section>

      <section className='home-section home-services'>
        <header className='page-header fade-up'>
          <p className='section-kicker'>Services</p>
          <h2 className='section-title'>What I can help your team build</h2>
        </header>
        <div className='home-services-grid'>
          {servicePillars.map((service, index) => (
            <article className='card fade-up home-service-card' style={{ '--delay': `${80 + index * 70}ms` }} key={service.name}>
              <h3>{service.name}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='home-section home-recent-work'>
        <header className='page-header fade-up'>
          <p className='section-kicker'>Recent Work</p>
          <h2 className='section-title'>Recent builds focused on speed, clarity, and real outcomes</h2>
        </header>
        <div className='home-recent-grid'>
          {recentWork.map((item, index) => (
            <article className='home-recent-card fade-up' style={{ '--delay': `${90 + index * 70}ms` }} key={item.title}>
              <div className='home-recent-image-wrap'>
                <img src={item.image} alt={item.title} className='home-recent-image' />
              </div>
              <div className='home-recent-content'>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <p className='impact'>{item.impact}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className='home-section home-case-studies'>
        <header className='page-header fade-up'>
          <p className='section-kicker'>Case Studies</p>
          <h2 className='section-title'>Common systems teams ask me to improve</h2>
        </header>
        <div className='home-case-study-grid'>
          {featuredCaseStudies.map((useCase, index) => (
            <article className='fade-up home-case-study-card' style={{ '--delay': `${110 + index * 60}ms` }} key={useCase.rank}>
              <span className='home-case-study-rank'>0{index + 1}</span>
              <h3>{useCase.title}</h3>
              <p>{useCase.summary}</p>
              <p className='impact'>{useCase.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='home-section home-process'>
        <header className='page-header fade-up'>
          <p className='section-kicker'>My Process</p>
          <h2 className='section-title'>A practical path from idea to production system</h2>
        </header>
        <div className='home-process-track'>
          {processSteps.map((step, index) => (
            <article className='home-process-node fade-up' style={{ '--delay': `${100 + index * 50}ms` }} key={step.step}>
              <span>{step.step}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className='home-section home-contact fade-up'>
        <p className='section-kicker'>Contact</p>
        <h2>Planning an AI system for your team?</h2>
        <p>
          I can help you define the right starting point, design the architecture, and ship a solution your team
          can actually run with.
        </p>
        <div className='home-contact-actions'>
          <Link className='button primary' to='/contact'>
            Start a Conversation
          </Link>
          <Link className='button ghost' to='/work'>
            View Work
          </Link>
        </div>
      </section>
    </section>
  );
}
