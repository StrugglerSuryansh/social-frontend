import React from 'react';

const teamMembers = [
  {
    name: 'Suryansh',
    role: 'Full stack devops Specialist',
    image: '/images/suryansh.png', // replace with actual image path
    linkedin: 'https://www.linkedin.com/in/suryansh-patwal/', // replace with actual link
    github: 'https://github.com/suryansh', // replace with actual link
  },
  {
    name: 'yagyansh',
    role: 'AI/ML: Specialist',
    image: 'images/yaggy.png', // replace with actual image path
    linkedin: 'https://www.linkedin.com/in/ayush', // replace with actual link
    github: 'https://www.linkedin.com/in/yagyansh-singh-deshwal/', // replace with actual link
  },
  {
    name: 'Manas Kush',
    role: 'Frontend react Specialist',
    image: '/images/manas.png', // replace with actual image path
    linkedin: 'https://www.linkedin.com/in/manas-kush-7a22b3184/', // replace with actual link
    github: 'https://github.com/visheshjindal', // replace with actual link
  },
  {
    name: 'Lomash Chaudhary',
    role: 'Backend Developer',
    image: '/images/lomash.jpg', // replace with actual image path
    linkedin: 'https://www.linkedin.com/in/lomash-choudhary/', // replace with actual link
    github: 'https://github.com/visheshjindal', // replace with actual link
  },
  {
    name: 'Kunj Aggarwal',
    role: 'Researcher and UI/UX Designer',
    image: '/images/kunj.png', // replace with actual image path
    linkedin: 'https://www.linkedin.com/in/kunj-agarwal/', // replace with actual link
    github: 'https://github.com/visheshjindal', // replace with actual link
  },
];

function AboutUs() {
  return (
    <div id='about' className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Meet the Team Behind the AI Content Scheduler
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Our team of passionate developers and AI enthusiasts is here to revolutionize your content creation process.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center bg-white p-6 rounded-lg shadow-md">
              <img
                className="w-32 h-32 rounded-full mx-auto"
                src={member.image}
                alt={member.name}
              />
              <h3 className="mt-4 text-lg leading-6 font-medium text-gray-900">{member.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{member.role}</p>

              <div className="mt-4 flex justify-center space-x-4">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8c3.3137 0 6 2.6863 6 6v8h-5v-7h-2v7h-5v-7h-2v7h-5v-8c0-3.3137 2.6863-6 6-6h6zM7 9h5v1h-5v-1zM10.5 0c1.3807 0 2.5 1.1193 2.5 2.5s-1.1193 2.5-2.5 2.5-2.5-1.1193-2.5-2.5S9.1193 0 10.5 0z" />
                  </svg>
                </a>

                <a
                  href={member.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 .297C5.373.297 0 5.67 0 12.297c0 5.302 3.438 9.8 8.205 11.387.6.111.82-.261.82-.58v-2.03c-3.338.726-4.033-1.416-4.033-1.416-.546-1.389-1.332-1.758-1.332-1.758-1.088-.744.084-.729.084-.729 1.205.084 1.84 1.245 1.84 1.245 1.07 1.834 2.807 1.305 3.492.998.108-.774.419-1.306.763-1.606-2.665-.304-5.467-1.334-5.467-5.932 0-1.312.469-2.38 1.236-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.302 1.23.957-.266 1.983-.4 3.003-.405 1.02.005 2.047.139 3.003.405 2.294-1.552 3.302-1.23 3.302-1.23.653 1.653.24 2.873.117 3.176.77.84 1.236 1.908 1.236 3.22 0 4.61-2.807 5.624-5.479 5.921.43.37.815 1.102.815 2.222v3.293c0 .32.219.694.826.576C20.565 22.092 24 17.6 24 12.297 24 5.67 18.627.297 12 .297z" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
