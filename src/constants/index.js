import {
	backend,
	web,
	javascript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
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
	men,
	women,
	ShopJacket,
	FashionLookConcept,
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
		title: 'Web Developer',
		icon: web,
	},
	{
		title: 'Spring Boot Developer',
		icon: backend,
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
		title: 'System Engineer',
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
			"Introducing a meticulously crafted React JS Gemini clone, faithfully replicating the renowned platform's design and functionality. Seamlessly responsive across all screen sizes, this project showcases the power of Google's Gemini AI API for dynamic text generation. Experience the full potential of a powerful language model in this faithful recreation.",
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
			"Explore this clone of Sundown Studio, replicating its design and functionality. Built with HTML, CSS, and JavaScript, this project demonstrates your ability to recreate a sleek and responsive website. Discover the work, services, and about sections, echoing the original site's simplicity and elegance.",
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
		name: 'Employee Management System',
		description:
			'Developed an Employee Management System integrating Spring Boot, MongoDB, and ReactJS, featuring core functionalities like Add, Update, and View Employee, showcasing full-stack development expertise with seamless backend-frontend integration and CRUD operations for efficient employee data management.',
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
			'Crafted a responsive music player using HTML, CSS, and JavaScript, offering users a seamless audio exploration experience. Designed with a minimalist interface, the player adapts gracefully across different screen sizes, showcasing adeptness in front-end development.',
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
			'Developed a React application that dynamically fetches and showcases random pieces of advice quotes by integrating an external API, providing real-time updates. Implemented with a responsive design to ensure optimal display across various devices.',
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
		name: 'Fashion Agency Landing Page',
		description:
			'Created a responsive landing page for a fashion agency using HTML and CSS. The layout and design were optimized for various screen sizes to ensure a seamless user experience.',
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
	{
		name: 'Shop Jacket',
		description:
			'Discover a responsive CSS project featuring a stylish jacket shop design, optimized for various screen sizes with Flexbox layouts and media queries.',
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
			'Experience a captivating CSS project unveiling a fashion look concept with elegant design elements and responsive layouts, tailored for seamless viewing across devices.',
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
];

export { services, technologies, experiences, testimonials, projects };
