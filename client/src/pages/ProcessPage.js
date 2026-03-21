import { Link } from 'react-router-dom';
import { processSteps } from '../data/siteContent';

export default function ProcessPage() {
  return (
    <section className='page process-page'>
      <header className='page-header fade-up'>
        <p className='eyebrow'>Delivery Process</p>
        <h1>A structured process for building reliable AI solutions.</h1>
        <p className='lead'>
          Each phase is designed to keep execution clear, reduce risk, and ensure the final system aligns with
          real business operations.
        </p>
      </header>

      <section className='timeline'>
        {processSteps.map((step, index) => (
          <article className='timeline-item fade-up' style={{ '--delay': `${70 + index * 60}ms` }} key={step.step}>
            <span className='timeline-step'>{step.step}</span>
            <div className='timeline-card'>
              <h2>{step.title}</h2>
              <p>{step.detail}</p>
            </div>
          </article>
        ))}
      </section>

      <section className='cta-panel fade-up'>
        <h2>Have a workflow or system you want to improve?</h2>
        <p>Start with a focused technical conversation and define the highest-value system to build first.</p>
        <Link className='button primary compact' to='/contact'>
          Start a Build Conversation
        </Link>
      </section>
    </section>
  );
}
