import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';

const ServiceCard = ({ index, title, icon }) => (
	<Tilt className="xs:w-[250px] w-full">
		<motion.div
			variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
			className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
			<div
				options={{ max: 45, scale: 1, speed: 450 }}
				className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
				<img
					src={icon}
					alt="web-development"
					className="w-16 h-16 object-contain"
				/>
				<h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	const handleDownload = () => {
		window.open(
			'https://drive.usercontent.google.com/download?id=1WSwhv63R-nB7WeRb1PVWpQ47jBza_gQ0&export=download&authuser=0',
			'_blank'
		);
	};
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>
			<motion.p
				variants={fadeIn('', '', 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
				As a passionate Full-Stack Developer, I seamlessly blend expertise in backend technologies like Spring
				Boot and microservices with proficiency in frontend frameworks such as React.js. With a solid grasp of
				crafting robust RESTful APIs, managing databases through JPA/Hibernate, and building captivating user
				interfaces with HTML, CSS, and JavaScript, I offer a comprehensive skill set for end-to-end application
				development. However, what truly sets me apart is my collaborative mindset and exceptional communication
				abilities, fostering an environment of innovation and synergy. Let's join forces and create outstanding
				solutions that leave a lasting impact, where cutting-edge technologies, robust architectures, and a
				shared passion for excellence converge.
			</motion.p>

			{/* Add the button component */}
			<div className="flex justify-center mt-10">
				<button
					className="button"
					onClick={handleDownload}>
					<div className="dots_border"></div>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						className="sparkle">
						<path
							className="path"
							strokeLinejoin="round"
							strokeLinecap="round"
							stroke="black"
							fill="black"
							d="M14.187 8.096L15 5.25L15.813 8.096C16.0231 8.83114 16.4171 9.50062 16.9577 10.0413C17.4984 10.5819 18.1679 10.9759 18.903 11.186L21.75 12L18.904 12.813C18.1689 13.0231 17.4994 13.4171 16.9587 13.9577C16.4181 14.4984 16.0241 15.1679 15.814 15.903L15 18.75L14.187 15.904C13.9769 15.1689 13.5829 14.4994 13.0423 13.9587C12.5016 13.4181 11.8321 13.0241 11.097 12.814L8.25 12L11.096 11.187C11.8311 10.9769 12.5006 10.5829 13.0413 10.0423C13.5819 9.50162 13.9759 8.83214 14.186 8.097L14.187 8.096Z"></path>
						<path
							className="path"
							strokeLinejoin="round"
							strokeLinecap="round"
							stroke="black"
							fill="black"
							d="M6 14.25L5.741 15.285C5.59267 15.8785 5.28579 16.4206 4.85319 16.8532C4.42059 17.2858 3.87853 17.5927 3.285 17.741L2.25 18L3.285 18.259C3.87853 18.4073 4.42059 18.7142 4.85319 19.1468C5.28579 19.5794 5.59267 20.1215 5.741 20.715L6 21.75L6.259 20.715C6.40725 20.1216 6.71398 19.5796 7.14639 19.147C7.5788 18.7144 8.12065 18.4075 8.714 18.259L9.75 18L8.714 17.741C8.12065 17.5925 7.5788 17.2856 7.14639 16.853C6.71398 16.4204 6.40725 15.8784 6.259 15.285L6 14.25Z"></path>
						<path
							className="path"
							strokeLinejoin="round"
							strokeLinecap="round"
							stroke="black"
							fill="black"
							d="M6.5 4L6.303 4.5915C6.24777 4.75718 6.15472 4.90774 6.03123 5.03123C5.90774 5.15472 5.75718 5.24777 5.5915 5.303L5 5.5L5.5915 5.697C5.75718 5.75223 5.90774 5.84528 6.03123 5.96877C6.15472 6.09226 6.24777 6.24282 6.303 6.4085L6.5 7L6.697 6.4085C6.75223 6.24282 6.84528 6.09226 6.96877 5.96877C7.09226 5.84528 7.24282 5.75223 7.4085 5.697L8 5.5L7.4085 5.303C7.24282 5.24777 7.09226 5.15472 6.96877 5.03123C6.84528 4.90774 6.75223 4.75718 6.697 4.5915L6.5 4Z"></path>
					</svg>
					<span className="text_button"> Resume</span>
				</button>
			</div>

			<div className="mt-20 flex flex-wrap gap-10 justify-center">
				{services.map((service, index) => (
					<ServiceCard
						key={service.title}
						index={index}
						{...service}
					/>
				))}
			</div>
		</>
	);
};

export default SectionWrapper(About, 'about');
