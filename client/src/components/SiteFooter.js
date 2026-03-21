export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className='site-footer'>
      <div className='footer-inner'>
        <div>
          <p className='footer-title'>AI Systems Engineer</p>
          <p className='footer-copy'>
            Custom systems that connect your tools, automate manual work, and improve execution.
          </p>
        </div>
        <div className='footer-links'>
          <a href='mailto:harley@harleydavey.com'>harley@harleydavey.com</a>
          <a href='https://www.linkedin.com/harley-davey/' target='_blank' rel='noreferrer'>
            LinkedIn
          </a>
          <a href='https://github.com/jhdavey' target='_blank' rel='noreferrer'>
            GitHub
          </a>
        </div>
      </div>
      <div className='footer-legal'>
        <p>Copyright {year} Harley Davey. All rights reserved.</p>
      </div>
    </footer>
  );
}
