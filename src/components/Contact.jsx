import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import { useAnimation } from 'framer-motion';

const MessageCard = ({ type, onClose }) => {
	useEffect(() => {
		const timer = setTimeout(() => {
			onClose();
		}, 3000);
		return () => clearTimeout(timer);
	}, [onClose]);

	return (
		<motion.div
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.3 }}
			className={`fixed bottom-2 right-2 transform -translate-x-1/2 w-72 rounded-lg shadow-lg p-6 z-50 text-white ${
				type === 'success'
					? 'bg-gradient-to-r from-green-500 to-green-600'
					: 'bg-gradient-to-r from-red-500 to-red-600'
			}`}>
			<div className="flex justify-between">
				<p className={`text-lg font-semibold`}>{type === 'success' ? 'Success!' : 'Error!'}</p>
				<button
					onClick={onClose}
					className="focus:outline-none">
					<svg
						className="h-5 w-5 text-white hover:text-gray-300"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<p className="text-white mt-2">
				{type === 'success'
					? 'Your message has been sent successfully.'
					: 'Oops! Something went wrong. Please try again later.'}
			</p>
		</motion.div>
	);
};

const Contact = () => {
	const formRef = useRef();
	const [form, setForm] = useState({
		name: '',
		email: '',
		message: '',
	});
	const [loading, setLoading] = useState(false);
	const [messageType, setMessageType] = useState(null);

	const handleChange = (e) => {
		const { target } = e;
		const { name, value } = target;

		setForm({
			...form,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setLoading(true);

		emailjs
			.send(
				import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
				import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: 'Akib Khan',
					from_email: form.email,
					to_email: 'akib.backend@gmail.com',
					message: form.message,
				},
				import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
			)
			.then(
				() => {
					setLoading(false);
					setMessageType('success');

					setForm({
						name: '',
						email: '',
						message: '',
					});
				},
				(error) => {
					setLoading(false);
					setMessageType('error');
					console.error(error);
				}
			);
	};

	const handleCloseMessage = () => {
		setMessageType(null);
	};

	return (
		<div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
			<motion.div
				variants={slideIn('left', 'tween', 0.2, 1)}
				className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
				<p className={styles.sectionSubText}>Get in touch</p>
				<h3 className={styles.sectionHeadText}>Contact.</h3>

				<form
					ref={formRef}
					onSubmit={handleSubmit}
					className="mt-12 flex flex-col gap-8">
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Name</span>
						<input
							type="text"
							name="name"
							value={form.name}
							onChange={handleChange}
							placeholder="What's your good name?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your email</span>
						<input
							type="email"
							name="email"
							value={form.email}
							onChange={handleChange}
							placeholder="What's your web address?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>
					<label className="flex flex-col">
						<span className="text-white font-medium mb-4">Your Message</span>
						<textarea
							rows={7}
							name="message"
							value={form.message}
							onChange={handleChange}
							placeholder="What you want to say?"
							className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
						/>
					</label>

					<button
						type="submit"
						className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary">
						{loading ? 'Sending...' : 'Send'}
					</button>
				</form>
			</motion.div>

			<motion.div
				variants={slideIn('right', 'tween', 0.2, 1)}
				className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]">
				<EarthCanvas />
			</motion.div>

			{messageType && (
				<MessageCard
					type={messageType}
					onClose={handleCloseMessage}
				/>
			)}
		</div>
	);
};

export default SectionWrapper(Contact, 'contact');
