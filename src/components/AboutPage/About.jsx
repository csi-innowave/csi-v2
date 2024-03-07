function About() {

  return (
      <div
          className="h-auto w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex-col  justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-center mx-5">
          <p className="text-4xl mt-12 sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 py-8">
            ABOUT CSI
          </p>
          <p className="text-1xl sm:text-4xl text-white font-semibold">
            The Computer Society of India chapter at{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-400 bg-clip-text text-transparent">
            MAIT
          </span>
            , founded in 2009, unites passionate students and faculty. They
            collaborate to explore new business ideas through open discussions,
            interactive sessions, and practical activities. This fosters critical
            thinking and equips members with valuable business skills.
          </p>
          <p className="text-2xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 py-8">
            VISION
          </p>
          <p className="text-1xl sm:text-4xl text-white font-semibold">
            CSI envisions a future where innovation, education, and sustainable
            practices converge to elevate India's trajectory towards progress.
          </p>
          <p className="text-2xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 py-8">
            MISSION
          </p>

          <p className="text-1xl sm:text-4xl text-white font-semibold">
            Our mission revolves around orchestrating a myriad of initiatives:
            from comprehensive workshops and insightful seminars to dynamic
            awareness campaigns. These endeavors are meticulously designed to
            champion skill development, foster entrepreneurial spirit, and
            champion environmental conservation. Our dedication to these causes
            stems from a fervent belief in their capacity to catalyze national
            growth and prosperity.
          </p>
          <p className="text-2xl sm:text-5xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 py-8">
            OBJECTIVES
          </p>
          <p className="text-1xl sm:text-4xl text-white font-semibold">
            To cultivate student's interest in the field of management or commerce
            in a convivial environment, without the pressure of being graded.
          </p>
          <ol>
            <li>
              <p className="text-sm sm:text-2xl text-white font-semibold">
                Formation of Collaborative Networks: Through sustained
                partnerships with renowned experts and stakeholders across diverse
                fields, our society is committed to fostering a collaborative
                environment.
              </p>
            </li>
            <li>
              {" "}
              <p className="text-sm sm:text-2xl text-white font-semibold">
                To cultivate student's interest in the field of management or
                commerce in a convivial environment, without the pressure of being
                graded.
              </p>
            </li>
            <li>
              {" "}
              <p className="text-sm sm:text-2xl text-white font-semibold">
                To cultivate student's interest in the field of management or
                commerce in a convivial environment, without the pressure of being
                graded.
              </p>
            </li>
            <li>
              {" "}
              <p className="text-sm sm:text-2xl text-white font-semibold">
                To cultivate student's interest in the field of management or
                commerce in a convivial environment, without the pressure of being
                graded.
              </p>
            </li>
            <li>
              {" "}
              <p className="text-sm sm:text-2xl text-white font-semibold">
                Commitment to Sustainable Development: Central to our mission is
                the creation of an environment that not only promotes innovation
                but also ensures sustainable progress.
              </p>
            </li>
          </ol>
        </div>
        <div className="p-1 m-5 border-y-2 border-black flex mx-10 items-center justify-center">
          <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-red-500 py-8">ABOUT MATES</h1>
        </div>
        <div className="flex flex-col mx-10 items-center sm:flex-row">
          {/* Subsection: MAIT Logo and Background Color */}
          <div className="w-full">
            <img
                className="h-40 mx-auto mb-2 bg-center"
                src="https://res.cloudinary.com/dfhj4i9hd/image/upload/v1708765885/CSI%20Website/sys2r5v8fyzk2elos9qn.png"
                alt="MTES Logo"
            />
          </div>
          {/* Subsection: Introduction to MAIT */}
          <div className="text-sm sm:text-2xl text-white text-justify font-semibold">
            Maharaja Agrasen Technical Education Society (MATES) is a charitable
            trust comprising a group of well-known Educationists,
            Industrialists, Businessmen, Professionals, and Philanthropists with
            an aim to promote quality education in the field of Technology,
            Management, Law, Pharmacy, and Health Services to shape the human
            society for a better future. With its constant growth and consistent
            efforts, MATES has been able to keep up its commitment to serving
            the society and its people.
          </div>
        </div>
      </div>
  )
      ;
}

export default About;
