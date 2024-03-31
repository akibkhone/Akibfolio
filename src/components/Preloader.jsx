import React, { useState, useEffect } from 'react';
import './Preloader.css'; // make sure to import the CSS file

const Preloader = () => {
	const [index, setIndex] = useState(0);
	const [isClosing, setIsClosing] = useState(false);
	const greetings = [
		'Hello',
		'السلام عليكم',
		'Bonjour',
		'स्वागत हे',
		'Ciao',
		'Olá',
		'おい',
		'Hallå',
		'Guten tag',
		'Hallo',
	];

	useEffect(() => {
		const timer = setTimeout(() => {
			if (index < greetings.length - 1) {
				setIndex(index + 1);
			} else {
				// If all greetings are shown, close the loader
				setIsClosing(true);
			}
		}, 300); // Adjust timing between each greeting

		return () => clearTimeout(timer);
	}, [index]);

	return (
		<div className="loading-container">
			<div className={`loading-screen ${isClosing ? 'slide-up' : ''}`}>
				<div className="loading-words">
					{greetings.map((greeting, idx) => (
						<h2
							key={idx}
							className={`home-active ${idx === index ? 'active' : ''}`}>
							{greeting}
						</h2>
					))}
				</div>
			</div>
		</div>
	);
};

export default Preloader;
