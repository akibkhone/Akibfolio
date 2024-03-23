import React from 'react';

const BallCanvas = ({ icon }) => {
	return (
		<div style={{ position: 'relative', width: '100%', height: '100%' }}>
			<img
				src={icon}
				alt="icon"
				style={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					width: '100px',
					height: '100px',
					borderRadius: '50%',
					boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
				}}
			/>
		</div>
	);
};

export default BallCanvas;
