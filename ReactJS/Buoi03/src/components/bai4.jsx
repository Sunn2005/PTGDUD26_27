import { memo, useCallback, useState } from 'react';

const ITEM_COUNT = 400;

function createInitialTodos() {
	return Array.from({ length: ITEM_COUNT }, (_, index) => ({
		id: index + 1,
		text: `Cong viec ${index + 1}`,
		completed: false,
	}));
}

function TodoInput({ value, onChange, onAdd }) {
	return (
		<form style={styles.inputRow} onSubmit={onAdd}>
			<input
				style={styles.input}
				type="text"
				placeholder="Nhap cong viec moi..."
				value={value}
				onChange={onChange}
			/>
			<button style={styles.addBtn} type="submit">
				Them
			</button>
		</form>
	);
}

const TodoItem = memo(function TodoItem({ id, text, completed, onDelete, onToggle }) {
	console.log('render item', id);

	return (
		<li style={styles.item}>
			<label style={styles.itemLabel}>
				<input
					type="checkbox"
					checked={completed}
					onChange={() => onToggle(id)}
				/>
				<span style={completed ? styles.itemDone : undefined}>{text}</span>
			</label>

			<button style={styles.deleteBtn} onClick={() => onDelete(id)} type="button">
				Xoa
			</button>
		</li>
	);
});

function TodoList({ todos, onDelete, onToggle }) {
	return (
		<ul style={styles.list}>
			{todos.map((todo) => (
				<TodoItem
					key={todo.id}
					id={todo.id}
					text={todo.text}
					completed={todo.completed}
					onDelete={onDelete}
					onToggle={onToggle}
				/>
			))}
		</ul>
	);
}

function Bai4() {
	const [todos, setTodos] = useState(() => createInitialTodos());
	const [input, setInput] = useState('');

	const handleInputChange = useCallback((event) => {
		setInput(event.target.value);
	}, []);

	const handleAddTodo = useCallback(
		(event) => {
			event.preventDefault();

			const trimmed = input.trim();
			if (!trimmed) return;

			setTodos((prevTodos) => [
				{
					id: Date.now(),
					text: trimmed,
					completed: false,
				},
				...prevTodos,
			]);
			setInput('');
		},
		[input]
	);

	const onDelete = useCallback((id) => {
		setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
	}, []);

	const onToggle = useCallback((id) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) =>
				todo.id === id ? { ...todo, completed: !todo.completed } : todo
			)
		);
	}, []);

	return (
		<section style={styles.wrapper}>
			<h2 style={styles.title}>Bai tap 04: Todo List Performance</h2>
			<p style={styles.caption}>
				Thu mo DevTools Console roi go vao input de kiem tra: item khong re-render
				hang loat.
			</p>

			<TodoInput value={input} onChange={handleInputChange} onAdd={handleAddTodo} />
			<TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
		</section>
	);
}

const styles = {
	wrapper: {
		maxWidth: 760,
		margin: '28px auto',
		padding: 20,
		borderRadius: 12,
		border: '1px solid #d1d5db',
		background: '#ffffff',
		color: '#111827',
		textAlign: 'left',
	},
	title: {
		margin: 0,
	},
	caption: {
		margin: '10px 0 16px',
		color: '#4b5563',
	},
	inputRow: {
		display: 'flex',
		gap: 10,
		marginBottom: 16,
	},
	input: {
		flex: 1,
		padding: '10px 12px',
		border: '1px solid #9ca3af',
		borderRadius: 8,
		fontSize: 14,
	},
	addBtn: {
		padding: '10px 14px',
		border: 'none',
		borderRadius: 8,
		background: '#0f766e',
		color: '#ffffff',
		cursor: 'pointer',
		fontWeight: 700,
	},
	list: {
		listStyle: 'none',
		margin: 0,
		padding: 0,
		borderTop: '1px solid #e5e7eb',
		maxHeight: 420,
		overflowY: 'auto',
	},
	item: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: 10,
		borderBottom: '1px solid #e5e7eb',
		padding: '10px 4px',
	},
	itemLabel: {
		display: 'inline-flex',
		alignItems: 'center',
		gap: 10,
		cursor: 'pointer',
		color: '#111827',
	},
	itemDone: {
		textDecoration: 'line-through',
		color: '#6b7280',
	},
	deleteBtn: {
		border: 'none',
		borderRadius: 6,
		background: '#ef4444',
		color: '#ffffff',
		padding: '6px 10px',
		cursor: 'pointer',
	},
};

export default Bai4;
