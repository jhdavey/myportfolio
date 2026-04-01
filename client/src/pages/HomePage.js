import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as WorldMapOutline } from '../assets/world-outline.svg';
import projectOneImage from '../assets/bean-img.png';
import projectTwoImage from '../assets/wipedown-img.png';
import projectThreeImage from '../assets/flight-tracker-img.png';
import headshotPopout from '../assets/headshotpopout.png';

const recentWork = [
  {
    title: 'AI-Driven Executive Assistant Platform',
    summary:
      'A custom planning, task, and coordination system designed to reduce admin drag, centralize decision-making, and keep high-volume personal operations moving.',
    impact: 'Result: Replaced scattered manual follow-up with a more dependable day-to-day operating workflow.',
    image: projectOneImage,
  },
  {
    title: 'Automated Mobile Service Operations Platform',
    summary:
      'A booking, dispatch, and operations platform built for a real-world service business that needed cleaner scheduling, tighter logistics, and scalable execution.',
    impact: 'Result: Supported thousands of completed jobs per year, expansion into multiple cities, and a 4.9-star reputation across 500+ reviews.',
    image: projectTwoImage,
  },
  {
    title: 'AI-Powered Monitoring and Alert Workflow',
    summary:
      'An automated agent that monitors changing data, analyzes trends, and reports only when action is worth taking, reducing the need for repeated manual checking.',
    impact: 'Result: Turned repetitive monitoring into a reliable workflow and helped capture a $300 savings on one booking.',
    image: projectThreeImage,
  },
];

const servicePillars = [
  {
    name: 'Operational AI Strategy',
    description:
      'I start by understanding how your business actually runs, where revenue leaks, and where manual effort is slowing growth before recommending any technology.',
  },
  {
    name: 'Consulting-Led Automation Builds',
    description:
      'I design and build custom automations around your real workflows so the system fits your operation instead of forcing your team into a generic template.',
  },
  {
    name: 'Custom AI Systems and Integrations',
    description:
      'I connect CRMs, internal tools, inboxes, scheduling flows, and AI agents into one dependable operating system with guardrails and production reliability in mind.',
  },
  {
    name: 'Continuous Optimization',
    description:
      'I stay involved after launch to improve performance, expand use cases, and keep the automation aligned with the way your business evolves.',
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Operational Discovery',
    detail:
      'I map how work moves through your business today, where bottlenecks live, and where missed revenue or wasted labor is showing up.',
  },
  {
    step: '02',
    title: 'Solution Blueprint',
    detail:
      'I define the architecture, integrations, automation logic, and rollout plan so the build is grounded in business outcomes rather than hype.',
  },
  {
    step: '03',
    title: 'Build and Integrate',
    detail:
      'I implement the system end-to-end and connect it cleanly into your existing stack so it supports daily operations from the start.',
  },
  {
    step: '04',
    title: 'Launch and Enablement',
    detail:
      'I launch with validation, documentation, and practical handoff so your team can use the system without operational confusion.',
  },
  {
    step: '05',
    title: 'Refine and Expand',
    detail:
      'I monitor what is working, improve weak points, and expand into the next highest-value workflow once the first system is performing.',
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
  { name: 'Grand Cayman Island', lon: -81.3674, lat: 19.3133 },
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

export default function HomePage() {
  const orlandoCity = useMemo(() => cityPins.find((city) => city.name === 'Orlando') ?? null, []);
  const orlandoPin = useMemo(() => {
    if (!orlandoCity) {
      return null;
    }
    return projectToMap(orlandoCity.lon, orlandoCity.lat);
  }, [orlandoCity]);

  return (
    <section className='page home-page'>
      <section className='home-hero-full'>
        <div className='hero-world-layer' aria-hidden='true'>
          <WorldMapOutline className='hero-world-map' />
          <svg viewBox='0 0 1200 520' className='hero-map-pins'>
            {cityPins.map((city) => {
              const { x, y } = projectToMap(city.lon, city.lat);
              const radius = city.major ? 4.8 : 2.8;

              if (city.name === 'Orlando') {
                return (
                  <circle
                    className='hero-map-home-pin'
                    key={city.name}
                    cx={x}
                    cy={y}
                    r={radius}
                    aria-label='Orlando'
                  />
                );
              }

              const pinClass = city.major ? 'hero-map-pin hero-map-pin-major' : 'hero-map-pin';

              return (
                <circle
                  className={pinClass}
                  key={city.name}
                  cx={x}
                  cy={y}
                  r={radius}
                  aria-hidden='true'
                />
              );
            })}
            {orlandoPin ? (
              <g className='hero-map-home-label' transform={`translate(${orlandoPin.x}, ${orlandoPin.y})`}>
                <text x='12' y='5'>Orlando</text>
              </g>
            ) : null}
          </svg>
        </div>
        <div className='home-hero-content'>
          <div className='hero-intro-row'>
            <figure className='hero-headshot-wrap fade-up'>
              <img src={headshotPopout} alt='Harley Davey' className='hero-headshot-photo' />
            </figure>
            <div className='hero-heading-group fade-up' style={{ '--delay': '40ms' }}>
              <span className='hero-greeting-row'>
                <span className='hero-wave-emoji' aria-hidden='true'>👋</span>
                <span className='hero-inline-name'>Hey, i&apos;m Harley!</span>
              </span>
              <span className='hero-emphasis hero-subheadline'>AI Automations Strategy &amp; Consulting</span>
            </div>
          </div>
        </div>
      </section>

      <section className='home-section home-about' id='about'>
        <article className='card fade-up hero-about-copy' style={{ '--delay': '90ms' }}>
          <header className='page-header'>
            <p className='section-kicker'>About Me</p>
            <h2 className='section-title'>Operator-minded engineer</h2>
          </header>
          <p>
            With 10+ years of business experience across digital products and real-world service operations, I approach AI implementation from the standpoint of how a business performs day to day, not just what the technology can demo.
          </p>
          <p>
            That means asking where time is being lost, where revenue slips through the cracks, and where manual processes are holding back the team. I prioritize clear communication, honest timelines, and systems that create measurable operational improvement.
          </p>
        </article>
      </section>

      <section className='home-section home-services'>
        <header className='page-header fade-up'>
          <p className='section-kicker'>Services</p>
          <h2 className='section-title'>Consulting-led AI automation for real operations</h2>
          <p className='lead'>
            I help businesses modernize the workflows they already depend on, then build custom AI systems that improve responsiveness, reduce repetitive work, and make the operation easier to scale.
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
          <h2 className='section-title'>Systems built around practical business outcomes</h2>
          <p className='lead'>
            My work is centered on operational clarity: less manual overhead, stronger execution, and systems people can trust once they are live.
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

      <section className='home-section home-process'>
        <header className='page-header fade-up'>
          <p className='section-kicker'>My Process</p>
          <h2 className='section-title'>A practical path from operations to automation</h2>
          <p className='lead'>
            You work directly with me from discovery through launch, so decisions stay grounded, communication stays clear,
            and accountability stays high.
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
        <h2>Need AI that improves operations, not just another tool?</h2>
        <p>
          If you need to modernize workflows, integrate AI into your current stack, and build systems that your team can actually rely on in day-to-day operations, I can help.
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
