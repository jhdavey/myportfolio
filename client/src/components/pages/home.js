import mypic from '../../assets/wedding_Speech_strokedred.png';
import expressLogo from '../../assets/expressjs_logo.png';

export default function Home() {
  return (
    <main className='mt-3'>
      {/* Content section */}
      <section className='relative flex flex-col sm:h-screen justify-center items-center sm:mt-2'>

        {/* First row of section - image, intro, emoji */}  
        <div className='relative flex flex-col justify-center items-center'>
          <img src={mypic} alt='giving speech at my wedding' className='w-28 h-28'/>
          <h1 className='text-center mt-2 mx-2 text-4xl md:text-6xl text-sky-50 font-nunito'>
            Hey, I'm Harley!
            <span className='block sm:inline'>&#128075;</span>
          </h1>
        </div>

        {/* Second row of section - title */}
        <h2 className='text-center mx-2 text-4xl md:text-6xl text-sky-50 font-nunito mt-2'>Full-Stack Developer & Designer</h2>

        {/* Third row of section - techstack icons */}
        <div className='relative flex w-3/4 justify-center items-center'>
            <img className='w-10 h-10 mx-3 mt-5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" />
            <img className='w-10 h-10 mx-3 mt-5' src={expressLogo} alt="Express"  />
            <img className='w-10 h-10 mx-3 mt-5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
            <img className='w-10 h-10 mx-3 mt-5' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" />
        </div>

      </section>
    </main>
  );
}
