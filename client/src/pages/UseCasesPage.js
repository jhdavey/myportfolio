import { Link } from 'react-router-dom';
import { popularUseCases } from '../data/siteContent';

export default function UseCasesPage() {
  return (
    <section className='page use-cases-page'>
      <header className='page-header fade-up'>
        <p className='eyebrow'>Case Studies</p>
        <h1>Popular AI automation case studies teams are prioritizing right now.</h1>
        <p className='lead'>
          This list reflects where companies are deploying AI most actively in current enterprise surveys and
          delivery work.
        </p>
      </header>

      <section className='use-case-grid'>
        {popularUseCases.map((useCase, index) => (
          <article className='use-case-card fade-up' style={{ '--delay': `${70 + index * 45}ms` }} key={useCase.rank}>
            <div className='use-case-rank'>{useCase.rank}</div>
            <div className='use-case-content'>
              <h2>{useCase.title}</h2>
              <p>{useCase.summary}</p>
              <p className='impact'>{useCase.value}</p>
            </div>
          </article>
        ))}
      </section>

      <section className='content-card fade-up source-note'>
        <p className='section-kicker'>Source Note</p>
        <p>
          Ranked from current adoption patterns in recent enterprise AI research, including{' '}
          <a
            href='https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai'
            target='_blank'
            rel='noreferrer'
          >
            McKinsey&apos;s 2025 State of AI survey
          </a>{' '}
          and{' '}
          <a
            href='https://www.deloitte.com/global/en/issues/generative-ai/state-of-generative-ai-in-enterprise.html'
            target='_blank'
            rel='noreferrer'
          >
            Deloitte&apos;s State of Generative AI in the Enterprise reports
          </a>
          .
        </p>
        <p>
          These are the use cases with the strongest cross-industry momentum as of March 2026.
        </p>
        <Link className='text-link' to='/contact'>
          Discuss Which Use Case Fits Your Business
        </Link>
      </section>
    </section>
  );
}
