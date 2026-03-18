import { useEffect, useState } from 'react';

function Bai2() {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	const timeText = currentTime.toLocaleTimeString('vi-VN', {
		hour12: false,
	});

	return (
		<section style={styles.wrapper}>
			<h2 style={styles.title}>Bai tap 02: Digital Clock</h2>
			<p style={styles.caption}>Dong ho cap nhat moi 1 giay bang useEffect + cleanup setInterval.</p>

			<div style={styles.clock}>{timeText}</div>
		</section>
	);
}

const styles = {
	wrapper: {
		maxWidth: 520,
		margin: '40px auto',
		padding: 24,
		borderRadius: 12,
		border: '1px solid #d1d5db',
		background: '#ffffff',
		color: '#111827',
		textAlign: 'center',
	},
	title: {
		margin: 0,
	},
	caption: {
		margin: '10px 0 18px',
		color: '#4b5563',
	},
	clock: {
		fontSize: 52,
		fontWeight: 700,
		letterSpacing: '0.08em',
		color: '#0f766e',
		background: '#ecfeff',
		border: '1px solid #99f6e4',
		borderRadius: 10,
		padding: '18px 12px',
	},
};

export default Bai2;
