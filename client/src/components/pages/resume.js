export default function Resume() {
  return (
    <>
      {/* Resume Section */}
      <div className="mx-auto w-4/5">
        <div className="grid gap-2 grid-cols-1 md:grid-cols-3 mt-10 bg-[#222634]/75">
        {/* Left Column */}
          <div className="border-solid border-2 border-white-600 rounded-lg p-2">
          <h2>Education</h2>
          <h3>February, 2023 - August, 2023</h3>
            <h3>UCF - Full-Stack Bootcamp</h3>
            <p className="text-white">Full-Stack Developer Certification<br/>
            Focus on MERN stack</p>
          <h3 className="mt-5">August, 2015 - May, 2019</h3>
            <h3>University of Central Florida</h3>
            <p className="text-white">BSBA Integrated Business</p>
          <h2>Key Skills</h2>
          <p className="text-white">HTML, CSS, JavaScript, *React, MongoDb, MySQL, Express, Node Bootstrap, Tailwind UI/UX design, photoshop, Agile Development</p>
          <h2>Soft Skills</h2>
          <p className="text-white">Team leadership, Clear Communication, Collaboration, Adaptability and Flexibility, Accepts Critical Feedback</p>
          </div>
          {/* Right column */}
          <div className="border-solid border-2 border-white-600 rounded-lg p-2 md:col-span-2">
            <h2>Objective</h2>
            <p className="text-white">Seeking an opportunity to work with a great team and add value to exciting new projects that will expand my experience as a full-stack developer. </p>
            <h2>Experience</h2>
            <h3>March, 2023 - June, 2023</h3>
            <h3>Freelance Web Developer</h3>
            <ul className="text-white list-disc ml-5">
              <li> Developed a car wash chemical manufacturer’s website including general information pages, and ecommerce functionality.
              </li>
              <li>Website built in Wix, with Shiptheory API for automated label creation, and Stripe payments API integrated
              </li> 
            </ul>
            <br />

            <h3>June, 2018 - Present</h3>
            <h3>Founder/CTO Quickease Mobile Car Wash</h3>
            <ul className="text-white list-disc ml-5">
              <li>Identified a market need to help customers save time by providing mobile car cleaning services available to be booked online
              </li>
              <li>Built an intuitively simple to navigate website with online booking that has become a big advantage for our company and generates an average of $40,000 per month in appointments booked.
              </li> 
            </ul>
            <br />
            <h3>September, 2014 - February, 2018</h3>
            <h3>Managing Partner Green Phantom</h3>
            <ul className="text-white list-disc ml-5">
              <li> Once a managing partner, I implemented several management changes 
              </li>
              <li>Achieved 60% increase in repeat transactions
              </li> 
              <li>Improved offerings to increase Revenue by 78% at first location
              </li> 
              <li>Opened 2 additional locations in Orlando to expand the business by more than 400% over 3.5 years
              </li> 
            </ul>
          </div>
        </div>
      </div>
      
      {/* Download Link */}
      <section className="relative flex flex-col justify-center items-center mt-10">

        <div className="relative flex justify-center items-center bg-[#222634]/50 text-sky-50 rounded-lg p-3 w-9/10">

          <h2 className="font-nunito text-sky-50">
          Download my resume : 
          </h2>
          <a href='../../resume_fsd.pdf' className="ml-3 underline" download>Click to download</a>

        </div>

      </section>
      {/* End Download Link */}
    </>
  );
}
