import React, { useState, useEffect } from 'react';
import sanityClient from '../../client';

export default function Portfolio() {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    sanityClient.fetch(
      `*[_type == "project"]{
      title,
      date,
      place,
      description,
      mainImage{
        asset->{
          _id,
          url
        },
      },
      projectType,
      link,
      tags,
    }`
    )
    .then((data) => setProjectData(data))
    .catch(console.eror);
  }, []);

  return (
    <main className='min-h-screen p-12'>
      <section className='container mx-auto'>
        <h1 className='text-5xl text-white flex text-center sm:justify-center font-nunito'>My Portfolio</h1>
        <section className='grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-3'>
        {projectData && projectData.map((project, index) => (
          <article key={index} className='relative rounded-lg shadow-xl bg-gray-800 bg-opacity-80 p-8'>
            <h3 className='text-white text-3xl font-bold font-nunito mb-2 hover:text-red-700'>
              <a
              href={project.link}
              alt={project.title}
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
            <img 
              src={project.mainImage.asset.url}
              alt='most recent project' 
              className='mt-5 rounded-xl'
              />
          </article>
        ))}
        </section>
      </section>
    </main>
  )
}