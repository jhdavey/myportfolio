import { Link } from 'react-router-dom';
import headshot from '../assets/wedding_Speech_strokedred.png';
import { popularUseCases, tooling } from '../data/siteContent';

const heroPoints = [
  'Work directly in your codebase and existing stack',
  'Design for retrieval, tool use, approvals, and failure handling',
  'Ship systems your team can actually operate after handoff',
];

const heroPills = ['OpenAI + Claude', 'Tool orchestration', 'Tracing + evals', 'Human review paths'];

const consoleStages = [
  {
    label: 'Signals',
    items: ['Forms, chat, email', 'CRM and ticket events', 'Internal requests'],
  },
  {
    label: 'Reasoning',
    items: ['Route by intent and risk', 'Retrieve context and permissions', 'Validate outputs before action'],
  },
  {
    label: 'Actions',
    items: ['Draft or complete work', 'Update systems and notify people', 'Escalate exceptions with full trace'],
  },
];

const deliverySignals = [
  {
    title: 'Systems Before Prompts',
    detail:
      'The model is one layer in the system, not the whole system. Good delivery starts with workflow design, constraints, and context shape.',
  },
  {
    title: 'Model-Agnostic Execution',
    detail:
      'I design around tasks and tradeoffs, choosing the right model behavior for cost, latency, reasoning depth, and reliability.',
  },
  {
    title: 'Operational Safety',
    detail:
      'Structured outputs, tool permissions, approval steps, and fallback routes keep the automation usable when the edge cases arrive.',
  },
  {
    title: 'Measured Improvement',
    detail:
      'Tracing, evals, and feedback loops make the system easier to improve after launch instead of letting quality drift in production.',
  },
];

const systemLayers = [
  {
    title: 'Agent Workflows',
    detail:
      'Multi-step systems that interpret requests, gather context, call tools, and move work forward without losing human visibility.',
  },
  {
    title: 'Knowledge Systems',
    detail:
      'Permission-aware retrieval over SOPs, docs, tickets, and internal data so answers stay grounded in your actual business context.',
  },
  {
    title: 'Internal Copilots',
    detail:
      'Role-specific assistants for support, sales, operations, and engineering that reduce repetitive work without creating chaos.',
  },
  {
    title: 'Embedded AI Features',
    detail:
      'Customer-facing AI experiences integrated into product workflows, not bolted on as a disconnected chat widget.',
  },
];

const operatingPrinciples = [
  {
    step: '01',
    title: 'Constrain the Interface',
    detail: 'Schemas, clear tools, and explicit success conditions reduce drift before it becomes a production problem.',
  },
  {
    step: '02',
    title: 'Observe the System',
    detail: 'Requests, tool calls, traces, and review data make it obvious where quality breaks and what to improve next.',
  },
  {
    step: '03',
    title: 'Route Risk Intentionally',
    detail: 'Low-risk work can move automatically. High-risk work gets approvals, handoff, or tighter operating boundaries.',
  },
  {
    step: '04',
    title: 'Ship in Small Loops',
    detail: 'The first version should solve a real workflow, create learning, and give the team a base to expand from.',
  },
];

const fitChecklist = [
  'More than one system or team is involved',
  'Humans are repeating the same decisions or data movement',
  'Accuracy and maintainability matter more than novelty',
  'You need something deployable, testable, and expandable',
];

const featuredUseCases = [
  'Customer Support Automation',
  'Internal Knowledge Assistant',
  'Document Processing Pipelines',
  'Cross-System Workflow Orchestration',
]
  .map((title) => popularUseCases.find((useCase) => useCase.title === title))
  .filter(Boolean);

export default function HomePage() {
  return (
    <section className='page home-page'>
      <section className='home-hero-shell'>
        <article className='content-card fade-up home-command-card'>
          <p className='eyebrow'>AI Systems Engineer</p>
          <h1>Harley Davey</h1>
          <p className='lead'>
            I help teams move past prompt demos into production workflows that retrieve the right context, call
            the right tools, respect approvals, and stay observable after launch.
          </p>

          <ul className='home-hero-points'>
            {heroPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <div className='home-proof-pills' aria-label='AI delivery signals'>
            {heroPills.map((pill) => (
              <span className='home-proof-pill' key={pill}>
                {pill}
              </span>
            ))}
          </div>

          <p className='home-intro-note'>
            Best fit for ops-heavy teams, internal tools, customer workflows, and AI product features that need
            engineering discipline instead of vague experimentation.
          </p>

          <div className='hero-actions'>
            <Link className='button primary' to='/contact'>
              Start a Conversation
            </Link>
            <Link className='button ghost' to='/work'>
              See Work
            </Link>
          </div>
        </article>

        <aside className='content-card fade-up home-console-card' style={{ '--delay': '90ms' }}>
          <div className='home-console-topbar'>
            <span>AI delivery console</span>
            <span className='console-status'>Production-minded</span>
          </div>

          <div className='home-console-query'>
            <span className='console-label'>Current build pattern</span>
            <p>
              Route requests, retrieve the right context, take action through tools, and hand off edge cases
              cleanly.
            </p>
          </div>

          <div className='home-console-grid'>
            {consoleStages.map((stage) => (
              <section className='console-stage' key={stage.label}>
                <p className='console-stage-title'>{stage.label}</p>
                <ul className='console-list'>
                  {stage.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className='home-console-rail'>
            <span className='console-chip'>Structured outputs</span>
            <span className='console-chip'>Tool permissions</span>
            <span className='console-chip'>Fallback paths</span>
            <span className='console-chip'>Trace reviews</span>
          </div>

          <div className='home-operator-card'>
            <div className='portrait-wrap home-portrait-chip'>
              <img src={headshot} alt='Harley Davey' />
            </div>
            <div>
              <p className='operator-name'>Harley Davey</p>
              <p className='operator-role'>Direct-to-engineer collaboration. US-based. Remote-friendly.</p>
            </div>
          </div>
        </aside>
      </section>

      <section className='home-signals-strip'>
        {deliverySignals.map((signal, index) => (
          <article className='home-signal-card fade-up' style={{ '--delay': `${120 + index * 60}ms` }} key={signal.title}>
            <p className='section-kicker'>Signal {index + 1}</p>
            <h2>{signal.title}</h2>
            <p>{signal.detail}</p>
          </article>
        ))}
      </section>

      <section className='home-blueprint-row'>
        <article className='content-card fade-up home-blueprint-panel'>
          <p className='section-kicker'>What I Build</p>
          <h2 className='section-title'>AI systems shaped around workflows, not just chat interfaces</h2>
          <div className='home-blueprint-grid'>
            {systemLayers.map((layer) => (
              <article className='home-blueprint-card' key={layer.title}>
                <h3>{layer.title}</h3>
                <p>{layer.detail}</p>
              </article>
            ))}
          </div>
        </article>

        <article className='content-card fade-up home-principles-panel' style={{ '--delay': '130ms' }}>
          <p className='section-kicker'>How I Work</p>
          <h2 className='section-title'>The engineering habits that keep AI projects from turning fragile</h2>
          <div className='home-principle-list'>
            {operatingPrinciples.map((principle) => (
              <article className='home-principle-item' key={principle.step}>
                <span>{principle.step}</span>
                <div>
                  <h3>{principle.title}</h3>
                  <p>{principle.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <Link className='text-link' to='/process'>
            View delivery process
          </Link>
        </article>
      </section>

      <section className='home-use-cases'>
        <header className='page-header fade-up' style={{ '--delay': '140ms' }}>
          <p className='section-kicker'>Common Engagements</p>
          <h2 className='section-title'>Where teams usually bring me in</h2>
          <p className='lead'>
            The strongest projects usually combine language understanding, system integration, and clear operating
            constraints.
          </p>
        </header>
        <div className='home-case-grid'>
          {featuredUseCases.map((useCase, index) => (
            <article className='card fade-up home-case-card' style={{ '--delay': `${180 + index * 60}ms` }} key={useCase.title}>
              <div className='home-case-rank'>0{index + 1}</div>
              <h3>{useCase.title}</h3>
              <p>{useCase.summary}</p>
              <p className='impact'>{useCase.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className='home-stack-row'>
        <article className='tooling-panel fade-up home-stack' style={{ '--delay': '120ms' }}>
          <p className='section-kicker'>Current Build Surface</p>
          <h2 className='section-title'>Tools, platforms, and patterns I use regularly</h2>
          <div className='chip-grid'>
            {tooling.map((item) => (
              <span className='chip' key={item}>
                {item}
              </span>
            ))}
          </div>
        </article>

        <article className='cta-panel fade-up home-fit-card' style={{ '--delay': '170ms' }}>
          <p className='section-kicker'>Project Fit</p>
          <h2>If you send one broken workflow, I can map the agent loop.</h2>
          <ul className='home-fit-list'>
            {fitChecklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p>
            Send the workflow, the systems involved, what a person does today, and where mistakes become
            expensive. I&apos;ll reply with likely architecture, key constraints, and a sensible first build.
          </p>
          <Link className='button primary compact' to='/contact'>
            Reach Out
          </Link>
        </article>
      </section>
    </section>
  );
}
