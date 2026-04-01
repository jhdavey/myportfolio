import { useState } from 'react';

const CONTACT_EMAIL = 'harley@harleydavey.com';

const initialFormData = {
  name: '',
  email: '',
  company: '',
  details: '',
};

export default function ContactPage() {
  const [formData, setFormData] = useState(initialFormData);
  const [status, setStatus] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const subject = encodeURIComponent(`New inquiry from ${formData.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\n\nProject Details:\n${formData.details}`
    );

    window.location.assign(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`);
    setStatus('Your email app should now open with your inquiry prefilled.');
  }

  return (
    <section className='page contact-page'>
      <header className='page-header fade-up'>
        <p className='eyebrow'>Contact</p>
        <h1>Tell me about your operation and where AI could help</h1>
        <p className='lead'>Share the workflow, bottleneck, or missed opportunity you want to fix, and I&apos;ll help you think through the right path.</p>
      </header>

      <section className='split-section contact-layout'>
        <article className='content-card fade-up'>
          <p className='section-kicker'>Direct Contact</p>
          <ul className='simple-list contact-list'>
            <li>
              <h3>Email</h3>
              <p>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              </p>
            </li>
            <li>
              <h3>LinkedIn</h3>
              <p>
                <a href='https://www.linkedin.com/harley-davey/' target='_blank' rel='noreferrer'>
                  Message me directly
                </a>
              </p>
            </li>
          </ul>
        </article>

        <article className='content-card fade-up' style={{ '--delay': '120ms' }}>
          <p className='section-kicker'>Project Inquiry</p>
          <form className='inquiry-form' onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input id='name' name='name' type='text' required value={formData.name} onChange={handleChange} />

            <label htmlFor='email'>Email</label>
            <input
              id='email'
              name='email'
              type='email'
              required
              value={formData.email}
              onChange={handleChange}
            />

            <label htmlFor='company'>Company</label>
            <input id='company' name='company' type='text' value={formData.company} onChange={handleChange} />

            <label htmlFor='details'>Project Details</label>
            <textarea
              id='details'
              name='details'
              rows='6'
              placeholder='Describe the workflow, where the bottleneck is, what tools are involved, and what outcome you want to improve.'
              required
              value={formData.details}
              onChange={handleChange}
            />

            <button className='button primary compact' type='submit'>
              Send Inquiry
            </button>
            {status ? <p className='form-status'>{status}</p> : null}
          </form>
        </article>
      </section>
    </section>
  );
}
