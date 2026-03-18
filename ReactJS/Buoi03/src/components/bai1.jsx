import { useState } from 'react';

function Bai1() {
	const [user, setUser] = useState({
		name: '',
		email: '',
		age: '',
	});

	const handleFieldChange = (field) => (event) => {
		const { value } = event.target;

		setUser((prevUser) => ({
			...prevUser,
			[field]: value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		alert(
			`Thong tin nguoi dung:\nTen: ${user.name}\nEmail: ${user.email}\nTuoi: ${user.age}`
		);
	};

	return (
		<section style={styles.wrapper}>
			<h2 style={styles.title}>Bai tap 1: Form thong tin nguoi dung</h2>

			<form style={styles.form} onSubmit={handleSubmit}>
				<label style={styles.label} htmlFor="name">
					Name
				</label>
				<input
					id="name"
					type="text"
					value={user.name}
					onChange={handleFieldChange('name')}
					style={styles.input}
					placeholder="Nhap ten"
					required
				/>

				<label style={styles.label} htmlFor="email">
					Email
				</label>
				<input
					id="email"
					type="email"
					value={user.email}
					onChange={handleFieldChange('email')}
					style={styles.input}
					placeholder="Nhap email"
					required
				/>

				<label style={styles.label} htmlFor="age">
					Age
				</label>
				<input
					id="age"
					type="number"
					min="0"
					value={user.age}
					onChange={handleFieldChange('age')}
					style={styles.input}
					placeholder="Nhap tuoi"
					required
				/>

				<button type="submit" style={styles.button}>
					Gui thong tin
				</button>
			</form>

			<div style={styles.preview}>
				<h3 style={styles.previewTitle}>State hien tai</h3>
				<p style={styles.previewItem}>name: {user.name || '(rong)'}</p>
				<p style={styles.previewItem}>email: {user.email || '(rong)'}</p>
				<p style={styles.previewItem}>age: {user.age || '(rong)'}</p>
			</div>
		</section>
	);
}

const styles = {
	wrapper: {
		maxWidth: 480,
		margin: '40px auto',
		padding: 20,
		border: '1px solid #266cd5',
		borderRadius: 12,
		background: '#ffffff',
		boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
		color: '#111827',
	},
	title: {
		marginTop: 0,
		marginBottom: 16,
        
	},
	form: {
		display: 'grid',
		gap: 10,
	},
	label: {
		fontWeight: 600,
	},
	input: {
		padding: '10px 12px',
		borderRadius: 8,
		border: '1px solid #9ca3af',
		fontSize: 14,
	},
	button: {
		marginTop: 8,
		padding: '10px 12px',
		border: 'none',
		borderRadius: 8,
		background: '#0f766e',
		color: '#fff',
		cursor: 'pointer',
		fontWeight: 700,
	},
	preview: {
		marginTop: 18,
		paddingTop: 12,
		borderTop: '1px dashed #9ca3af',
	},
	previewTitle: {
		margin: '0 0 8px',
	},
	previewItem: {
		margin: '4px 0',
	},
};

export default Bai1;
