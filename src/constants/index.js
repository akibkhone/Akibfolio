import {
	backend,
	web,
	framework,
	javascript,
	html,
	css,
	reactjs,
	tailwind,
	mongodb,
	git,
	docker,
	java,
	spring,
	mysql,
	rabbitmq,
	elasticsearch,
	hibernate,
	postman,
	camunda,
	Sundown,
	Music,
	Gemini,
	Employee,
	Agency,
	Advice,
	infosys,
	intellinum,
	men,
	women,
	ShopJacket,
	FashionLookConcept,
	cotton,
	trendline,
	premier,
	dribbble,
	simplePortfolio,
} from '../assets';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const services = [
	{
		title: 'Full Stack Web Developer',
		icon: web,
	},
	{
		title: 'Spring Boot Developer',
		icon: framework,
	},
	{
		title: 'Backend Java Developer',
		icon: backend,
	},
];

const technologies = [
	{
		name: 'Java',
		icon: java,
	},
	{
		name: 'Spring Boot',
		icon: spring,
	},
	{
		name: 'HTML 5',
		icon: html,
	},
	{
		name: 'CSS 3',
		icon: css,
	},
	{
		name: 'JavaScript',
		icon: javascript,
	},
	{
		name: 'MySQL',
		icon: mysql,
	},

	{
		name: 'Rabbit MQ',
		icon: rabbitmq,
	},
	{
		name: 'Elastic Search',
		icon: elasticsearch,
	},
	{
		name: 'JPA Hibernate',
		icon: hibernate,
	},
	{
		name: 'Postman',
		icon: postman,
	},
	{
		name: 'React JS',
		icon: reactjs,
	},

	{
		name: 'Tailwind CSS',
		icon: tailwind,
	},
	{
		name: 'MongoDB',
		icon: mongodb,
	},
	{
		name: 'Camunda',
		icon: camunda,
	},
	{
		name: 'git',
		icon: git,
	},

	{
		name: 'docker',
		icon: docker,
	},
];

const experiences = [
  {
    title: 'Java Developer',
    company_name: 'Intellinum',
    icon: intellinum, // Replace with the appropriate icon reference
    iconBg: '#FFFFFF',
    date: 'Aug 2024 - Present',
    points: [
      'Developed and customized FlexiPro modules for clients in the Middle East and US, enhancing functionalities in COUPA, SCM, WMS, and HRMS.',
      'Built and maintained Spring Boot RESTful APIs to support multi-level email approval workflows across various projects.',
      'Integrated FlexiPro with external systems to improve automation and reduce manual processes, increasing overall efficiency.',
      'Collaborated with cross-functional teams to deliver client-specific requirements, ensuring timely and effective solutions.',
    ],
  },
  {
    title: 'Java Developer',
    company_name: 'Infosys',
    icon: infosys,
    iconBg: '#383E56',
    date: 'March 2022 - Jan 2024',
    points: [
      'Developed and maintained the Aircraft Maintenance Performance Toolbox web application using Spring Boot.',
      'Coordinated enhancements to critical functionalities within the application.',
      'Implemented JPA and Hibernate with a MySQL database for efficient data management.',
      'Utilized agile methodologies to successfully deliver over 40 features in a fast-paced development environment.',
      'Mentored junior developers, providing guidance and fostering growth within the team.',
      'Recognized for outstanding performance with the Rise Insta Award and the Certificate of Appreciation from Infosys clients.',
      'Honored with the Talent Buddy Award for exceptional achievements in full-stack development and demonstrating strong analytical skills.',
    ],
  },
];


const testimonials = [
	{
		testimonial: 'Akib’s expertise in Spring Boot and agile methodologies has been invaluable to our team.',
		name: 'Neethu M',
		designation: 'Project Lead',
		company: 'Infosys',
		image: women,
	},
	{
		testimonial:
			'Akib has a strong work ethic and has demonstrated excellent analytical skills throughout their work on the Aircraft Maintenance Performance Toolbox project.',
		name: 'Karri Ravi',
		designation: 'Senior System Engineer',
		company: 'Infosys',
		image: men,
	},
	{
		testimonial:
			'Working with Akib during our training was an absolute pleasure. His dedication and problem-solving skills truly make him a valuable asset to any team.',
		name: 'Vipul Kumar',
		designation: 'Senior System Engineer',
		company: 'Infosys',
		image: men,
	},
];

const projects = [
	{
		name: 'Google Gemini AI Clone',
		description:
			"A meticulously crafted React JS Gemini clone, replicating Google's Gemini AI platform design and functionality, seamlessly responsive across all screens, showcasing the power of Gemini API for dynamic text generation.",
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'javascript',
				color: 'green-text-gradient',
			},
			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: Gemini,
		source_code_link: 'https://github.com/akibkhone/Gemini-Ai-Clone',
		project_url: 'https://gemini-ai-clone.pages.dev/',
	},
	{
		name: 'Sundown Studio Clone',
		description:
			'A Sundown Studio clone, replicating its design and functionality using HTML, CSS, and JavaScript, demonstrating responsive web development skills and ability to recreate sleek and elegant websites.',
		tags: [
			{
				name: 'html',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
			{
				name: 'javascript',
				color: 'pink-text-gradient',
			},
		],
		image: Sundown,
		source_code_link: 'https://github.com/akibkhone/Sundown-Studio-Clone',
		project_url: 'https://sundown-studio-clone.pages.dev/',
	},
	{
		name: 'Dribbble Clone',
		description:
			"Experience the essence of Dribbble with our meticulously crafted HTML, CSS, and JavaScript clone. Immerse yourself in a faithful reproduction of Dribbble's iconic user interface, complete with seamless scrolling animations and responsive design.",
		tags: [
			{
				name: 'html',
				color: 'orange-text-gradient',
			},
			{
				name: 'css',
				color: 'blue-text-gradient',
			},
			{
				name: 'javascript',
				color: 'yellow-text-gradient',
			},
		],
		image: dribbble,
		source_code_link: 'https://github.com/akibkhone/Dribbble-Clone',
		project_url: 'https://dribbble.pages.dev',
	},
	{
		name: 'Premier Model Management',
		description:
			'A Premier Studio clone, emulating its design and functionality through HTML and CSS, showcasing adeptness in responsive web development and proficiency in crafting sophisticated and polished websites.',
		tags: [
			{
				name: 'html',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
		],
		image: premier,
		source_code_link: 'https://github.com/akibkhone/premier',
		project_url: 'https://premier-model.pages.dev/',
	},
	{
		name: 'Employee Management System',
		description:
			'An Employee Management System integrating Spring Boot, MongoDB, and ReactJS, featuring CRUD operations for efficient employee data management, showcasing full-stack development expertise.',
		tags: [
			{
				name: 'springboot',
				color: 'blue-text-gradient',
			},
			{
				name: 'mongodb',
				color: 'green-text-gradient',
			},
			{
				name: 'reactjs',
				color: 'pink-text-gradient',
			},
		],
		image: Employee,
		source_code_link: 'https://github.com/akibkhone/Employee-Management-System-Backend',
		project_url: 'https://employee-management-system-frontend.onrender.com/',
	},
	{
		name: 'Simple Music Player',
		description:
			'A responsive music player built with HTML, CSS, and JavaScript, offering a seamless audio experience with a minimalist interface, showcasing front-end development skills.',
		tags: [
			{
				name: 'html',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
			{
				name: 'javascript',
				color: 'pink-text-gradient',
			},
		],
		image: Music,
		source_code_link: 'https://github.com/akibkhone/Simple-Music-Player',
		project_url: 'https://simple-music-player.pages.dev/',
	},
	{
		name: 'Random Advice Generator',
		description:
			'A React application fetching and displaying random advice quotes from an external API, with real-time updates and responsive design, highlighting API integration and React proficiency.',
		tags: [
			{
				name: 'react',
				color: 'blue-text-gradient',
			},
			{
				name: 'api',
				color: 'green-text-gradient',
			},
			{
				name: 'css',
				color: 'pink-text-gradient',
			},
		],
		image: Advice,
		source_code_link: 'https://github.com/akibkhone/Random-Advice-Generator',
		project_url: 'https://random-advice-generator-1hf.pages.dev',
	},

	{
		name: 'Shop Jacket',
		description:
			'A responsive CSS project featuring a stylish jacket shop design, optimized for various screen sizes with Flexbox layouts and media queries.',
		tags: [
			{
				name: 'css',
				color: 'blue-text-gradient',
			},
			{
				name: 'html',
				color: 'green-text-gradient',
			},
		],
		image: ShopJacket,
		source_code_link: 'https://github.com/akibkhone/Shop-Jacket',
		project_url: 'https://shop-jacket.pages.dev',
	},
	{
		name: 'Fashion Look Concept',
		description:
			'A captivating CSS project unveiling a fashion look concept with elegant design elements and responsive layouts, tailored for seamless viewing across devices.',
		tags: [
			{
				name: 'css',
				color: 'blue-text-gradient',
			},
			{
				name: 'html',
				color: 'green-text-gradient',
			},
		],
		image: FashionLookConcept,
		source_code_link: 'https://github.com/akibkhone/Fashion-Look-Concept',
		project_url: 'https://fashion-look-concept.pages.dev/',
	},
	{
		name: 'Simple Portfolio',
		description:
			"Introducing a Tailwind Portfolio template, designed for developers and creatives. With striking responsiveness and a captivating dark mode switch, it's the ultimate choice for a polished showcase.",
		tags: [
			{
				name: 'tailwind',
				color: 'blue-text-gradient',
			},
			{
				name: 'html',
				color: 'green-text-gradient',
			},
		],
		image: simplePortfolio,
		source_code_link: 'https://github.com/akibkhone/TailwindPortfolio',
		project_url: 'https://tailwindportfolio.pages.dev/',
	},
	{
		name: 'Cotton Weave',
		description:
			'A CSS project replicating cotton weave patterns digitally, showcasing mastery in CSS styling and creativity in web design.',
		tags: [
			{
				name: 'css',
				color: 'blue-text-gradient',
			},
			{
				name: 'web-design',
				color: 'green-text-gradient',
			},
			{
				name: 'creative-styling',
				color: 'pink-text-gradient',
			},
		],
		image: cotton,
		source_code_link: 'https://github.com/akibkhone/Cotton-Weave',
		project_url: 'https://cotton-weave.pages.dev',
	},
	{
		name: 'Trendliner',
		description:
			'A dynamic CSS project showcasing the fusion of style and technology with Trendline, a fashion-focused website offering an immersive experience with seamless navigation and captivating visuals.',
		tags: [
			{
				name: 'css',
				color: 'blue-text-gradient',
			},
			{
				name: 'html',
				color: 'green-text-gradient',
			},
		],
		image: trendline,
		source_code_link: 'https://github.com/akibkhone/Trendline',
		project_url: 'https://trendline.pages.dev',
	},
	{
		name: 'Fashion Agency Landing Page',
		description:
			'A responsive landing page for a fashion agency, built with HTML and CSS, optimized for various screen sizes to ensure a seamless user experience.',
		tags: [
			{
				name: 'html',
				color: 'blue-text-gradient',
			},
			{
				name: 'css',
				color: 'green-text-gradient',
			},
		],
		image: Agency,
		source_code_link: 'https://github.com/akibkhone/Fashion-Agency-Landing-Page',
		project_url: 'https://fashion-agency-landing-page.pages.dev/',
	},
];

export { services, technologies, experiences, testimonials, projects };
