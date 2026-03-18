export default function Portfolio() {
  const projects = [
    {
      title: 'Quickease Mobile',
      place: 'Quickease Mobile Car Wash',
      projectType: 'Business Platform',
      description: 'Scheduling and service website focused on conversions and repeat bookings.',
      link: 'https://www.quickeasemobile.com',
    },
    {
      title: 'Jet Set Go',
      place: 'Jet Set Go',
      projectType: 'Web App',
      description: 'Responsive experience built for clear user flows and polished brand presentation.',
      link: '#',
    },
    {
      title: 'Passion Driven Builds',
      place: 'Passion Driven Builds',
      projectType: 'Portfolio Site',
      description: 'Content-first website with clean layout and mobile-first implementation.',
      link: '#',
    },
  ];

  return (
    <main className='min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl text-white flex text-center sm:justify-center font-nunito'>My Projects</h1>
        <p className='text-center text-sky-100 mt-4 font-nunito'>
          Portfolio content is now managed directly in this site with no external CMS dependency.
        </p>
        <section className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3'>
        {projects.map((project, index) => (
          <article key={index} className='relative rounded-lg shadow-xl bg-gray-800 bg-opacity-80 p-8'>
            <h3 className='text-white text-3xl font-bold font-nunito mb-2 hover:text-red-700'>
              <a
              href={project.link}
              target='_blank'
              rel='noopener noreferrer'
              >{project.title}</a>
            </h3>
            <div className='text-white text-sm space-x-4 font-nunito'>
              <span>
                <strong className='font-bold'>Company</strong>:{' '}
                {project.place}
              </span>
              <span>
                <strong className='font-bold'>Type</strong>:{' '}
                {project.projectType}
              </span>
              <p className='my-6 text-lg text-gray-200 font-nunito leading-relaxed'>
                {project.description}
              </p>
              <a
              href={project.link}
              rel="noopener noreferrer"
              target='_blank'
              className='text-white font-nunito font-bold hover:text-red-700 text-xl'
              >
              View The Project{' '}
                <span role='img' aria-label='right pointer'>👉</span>
              </a>
            </div>
          </article>
        ))}
        </section>
      </section>
    </main>
  )
}
