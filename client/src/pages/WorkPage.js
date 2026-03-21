import projectOneImage from '../assets/notetaker.png';
import projectTwoImage from '../assets/portfolio_screenshot.png';
import projectThreeImage from '../assets/jsg.png';

const caseStudies = [
  {
    title: 'Service Operations Automation',
    summary:
      'Designed a custom lead intake and follow-up flow that connected inbound channels to service operations.',
    impact: 'Reduced manual triage and improved consistency across client communication touchpoints.',
    image: projectOneImage,
  },
  {
    title: 'Business Workflow Modernization',
    summary:
      'Rebuilt a fragmented process into a single integrated workflow with role-based automation and alerts.',
    impact: 'Improved operational visibility and reduced context-switching for internal teams.',
    image: projectTwoImage,
  },
  {
    title: 'AI-Enhanced Customer Experience',
    summary:
      'Implemented guided user flows and AI-assisted interactions to support faster decision-making for customers.',
    impact: 'Delivered a clearer digital journey with less friction from first touch to action.',
    image: projectThreeImage,
  },
];

export default function WorkPage() {
  return (
    <section className='page work-page'>
      <header className='page-header fade-up'>
        <p className='eyebrow'>Selected Work</p>
        <h1>Engineered systems that align technology with business execution.</h1>
        <p className='lead'>
          Systems are built to improve speed, consistency, reliability, and team capacity in day-to-day
          operations.
        </p>
      </header>

      <section className='case-study-grid'>
        {caseStudies.map((item, index) => (
          <article className='case-card fade-up' style={{ '--delay': `${70 + index * 80}ms` }} key={item.title}>
            <div className='case-image-wrap'>
              <img src={item.image} alt={item.title} className='case-image' />
            </div>
            <div className='case-content'>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <p className='impact'>{item.impact}</p>
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}
