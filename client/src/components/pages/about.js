import mypic from '../../assets/wedding_Speech_strokedred.png';

export default function About() {
  return (
    <section className="relative flex flex-col h-screen justify-center items-center">

      <div className="relative flex justify-center items-center bg-[#222634]/75 rounded-lg ring ring-indigo-200 ring-opacity-50 text-sky-50 rounded-lg py-5 w-2/3">

        <img src={mypic} alt='me giving speech at wedding' className='w-24 h-24 mx-6'/>

        <p className="text-xl font-nunito text-sky-50 mt-4 w-2/3 mx-auto">
        As an entrepreneur and web developer, I combine my business experience with a passion for creating captivating digital experiences to create websites and apps that engage and inspire.<br />
        When I'm not working, nature helps keep me balanced. You'll often find me riding trails on my mountain bike or casting a line at my favorite fishing spots.
        </p>

      </div>

    </section>

  );
}
