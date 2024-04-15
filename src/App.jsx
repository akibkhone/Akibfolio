import { BrowserRouter } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components';
import Preloader from './components/Preloader';

const App = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2200);

		return () => clearTimeout(timer);
	}, []);

	// useEffect(() => {
	// 	if (!loading) {
	// 		// Embed the chatbot script when loading is false
	// 		const script = document.createElement('script');
	// 		script.type = 'text/javascript';
	// 		script.src = 'https://www.chatbase.co/embed.min.js';
	// 		script.setAttribute('chatbotId', 'bbbQpbknH0GV_QU5jsPl0');
	// 		script.setAttribute('domain', 'www.chatbase.co');
	// 		script.async = true;
	// 		document.body.appendChild(script);
	// 	}
	// }, [loading]);

	return (
		<BrowserRouter>
			{loading ? (
				<Preloader />
			) : (
				<div className="relative z-0 bg-primary">
					<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
						<Navbar />
						<Hero />
					</div>
					<About />
					<Experience />
					<Tech />
					<Works />
					<Feedbacks />
					<div className="relative z-0">
						<Contact />
						<StarsCanvas />
					</div>
				</div>
			)}
		</BrowserRouter>
	);
};

export default App;
