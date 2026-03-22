import { Link } from 'react-router-dom';
import { ReactComponent as WorldMapOutline } from '../assets/world-outline.svg';
import projectOneImage from '../assets/notetaker.png';
import projectTwoImage from '../assets/portfolio_screenshot.png';
import projectThreeImage from '../assets/jsg.png';
import headshotImage from '../assets/wedding_Speech_strokedred.png';

const recentWork = [
  {
    title: 'Client Intake and Delivery Automation',
    summary:
      'Designed and implemented a full intake-to-delivery workflow that routed requests, generated tasks, and kept teams aligned without manual coordination.',
    impact: 'Result: faster response times and a cleaner handoff from first contact to execution.',
    image: projectOneImage,
  },
  {
    title: 'Legacy Process Modernization',
    summary:
      'Replaced scattered spreadsheets and disconnected tools with one reliable operating layer across CRM, communication, and internal systems.',
    impact: 'Result: better visibility, fewer dropped tasks, and stronger operational consistency.',
    image: projectTwoImage,
  },
  {
    title: 'AI-Assisted Client Operations',
    summary:
      'Built role-specific AI workflows that supported service teams with decision prompts, drafting assistance, and next-step recommendations in real workflows.',
    impact: 'Result: teams moved faster while maintaining quality and communication standards.',
    image: projectThreeImage,
  },
];

const servicePillars = [
  {
    name: 'AI Integration Strategy',
    description:
      'I assess your current systems, identify high-leverage opportunities, and design an AI roadmap that fits your real operations and constraints.',
  },
  {
    name: 'Automation Architecture and Build',
    description:
      'I build dependable automations that connect your tools, remove repetitive work, and reduce operational bottlenecks without creating fragile workflows.',
  },
  {
    name: 'Custom AI Workflow Engineering',
    description:
      'I create tailored assistants, copilots, and workflow logic for your team, with clear guardrails, human review points, and production-ready behavior.',
  },
  {
    name: 'Optimization and Advisory',
    description:
      'As a solo consultant-engineer, I stay close to outcomes, iterate quickly, and help your team adopt AI with confidence, professionalism, and trust.',
  },
];

const featuredCaseStudies = [
  {
    rank: 1,
    title: 'Client Onboarding and Intake Systems',
    summary:
      'Automated qualification, follow-up, and task creation across forms, inboxes, and internal tools so nothing is lost in handoff.',
    value: 'Improved speed-to-service and reduced manual coordination.',
  },
  {
    rank: 2,
    title: 'Cross-Tool Operations Sync',
    summary:
      'Connected CRM, communication, and project platforms into one dependable workflow layer with clear routing and escalation logic.',
    value: 'Created operational clarity for both leadership and frontline teams.',
  },
  {
    rank: 3,
    title: 'AI Support for Service Teams',
    summary:
      'Implemented AI-assisted drafting, triage support, and context retrieval to help teams respond faster while maintaining quality.',
    value: 'Raised output quality and consistency without expanding headcount.',
  },
  {
    rank: 4,
    title: 'Knowledge and SOP Enablement',
    summary:
      'Turned fragmented process knowledge into usable, searchable, AI-enabled workflows tied directly to day-to-day execution.',
    value: 'Reduced dependency on tribal knowledge and improved onboarding velocity.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Business Discovery',
    detail:
      'I learn how your team actually works today, where friction lives, and what outcomes matter most before suggesting technology.',
  },
  {
    step: '02',
    title: 'System Blueprint',
    detail:
      'I define architecture, data flow, integration boundaries, and risk controls so implementation is clear, scoped, and practical.',
  },
  {
    step: '03',
    title: 'Build and Integrate',
    detail:
      'I implement the solution end-to-end and connect it cleanly into your existing stack with reliability and maintainability in mind.',
  },
  {
    step: '04',
    title: 'Launch and Team Enablement',
    detail:
      'I deploy with validation, documentation, and clear handoff so your team can operate confidently from day one.',
  },
  {
    step: '05',
    title: 'Refine and Expand',
    detail:
      'I monitor performance, improve workflows, and help you scale additional AI automations as the business grows.',
  },
];

const cityPins = [
  { name: 'Orlando', lon: -81.3792, lat: 28.5383, major: true },
  { name: 'New Orleans', lon: -90.0715, lat: 29.9511 },
  { name: 'Los Angeles', lon: -118.2437, lat: 34.0522 },
  { name: 'Denver', lon: -104.9903, lat: 39.7392 },
  { name: 'Dallas', lon: -96.797, lat: 32.7767 },
  { name: 'New York', lon: -74.006, lat: 40.7128 },
  { name: 'Chicago', lon: -87.6298, lat: 41.8781 },
  { name: 'Toronto', lon: -79.3832, lat: 43.6532 },
  { name: 'London', lon: -0.1276, lat: 51.5072 },
  { name: 'Munich', lon: 11.582, lat: 48.1351 },
  { name: 'Budapest', lon: 19.0402, lat: 47.4979 },
  { name: 'Krakow', lon: 19.9445, lat: 50.0647 },
  { name: 'Tokyo', lon: 139.6917, lat: 35.6895 },
  { name: 'Kyoto-Osaka', lon: 135.5023, lat: 34.6937 },
  { name: 'Brisbane', lon: 153.026, lat: -27.4705 },
  { name: 'Melbourne', lon: 144.9631, lat: -37.8136 },
  { name: 'Sydney', lon: 151.2093, lat: -33.8688 },
];

function projectToMap(lon, lat) {
  return {
    x: ((lon + 180) / 360) * 1200,
    y: ((90 - lat) / 180) * 520,
  };
}

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
        <div className='hero-identity-corner fade-up'>
          <img src={headshotImage} alt='Harley Davey headshot' className='hero-avatar' />
          <h1 className='hero-name-corner'>Harley Davey</h1>
        </div>
        <div className='hero-world-layer' aria-hidden='true'>
          <WorldMapOutline className='hero-world-map' />
          <svg viewBox='0 0 1200 520' className='hero-map-pins'>
            {cityPins.map((city) => {
              const { x, y } = projectToMap(city.lon, city.lat);
              const radius = city.major ? 4.8 : 2.6;

              return (
                <circle
                  className={city.major ? 'hero-map-pin hero-map-pin-major' : 'hero-map-pin'}
                  key={city.name}
                  cx={x}
                  cy={y}
                  r={radius}
                />
              );
            })}
          </svg>
        </div>
        <div className='home-hero-content fade-up'>
          <p className='hero-role'>AI Systems Engineer</p>
          <p className='hero-location'>
            <LocationIcon />
            Orlando, FL
          </p>
          <p className='hero-description'>
            Hey, I&apos;m Harley. I like building things and traveling with my wife. Today, I focus on AI
            projects, especially integrating AI into legacy systems to help teams improve margins and designing
            new AI-first processes from scratch. With an AI systems engineering focus and a full-stack
            development background, I deliver production-ready applications where AI is built into the core
            workflow.
          </p>
        </div>
      </section>

      <section className='home-section home-services'>
        <header className='page-header fade-up'>
          <p className='section-kicker'>Services</p>
          <h2 className='section-title'>What I can help your team build</h2>
          <p className='lead'>
            I help small and large businesses modernize existing systems with practical AI integrations and
            automation engineering.
          </p>
          <p className='lead'>
            You work directly with me from strategy through implementation. I bring a professional engineering
            standard, clear communication, and a delivery style that is both approachable and accountable.
          </p>
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
          <p className='lead'>
            My work focuses on measurable operational improvements: less manual overhead, faster team execution,
            and systems people can trust in production.
          </p>
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
          <p className='lead'>
            These are the areas where I most often help clients turn AI interest into real, maintainable business
            systems.
          </p>
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
          <p className='lead'>
            I run projects with a clear structure, technical rigor, and transparent communication so teams always
            know what is happening and what comes next.
          </p>
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
          If you need a trusted solo specialist to modernize workflows, integrate AI into your existing stack, and
          deliver systems your team can actually use, I can help.
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
