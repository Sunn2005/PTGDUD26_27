import { useEffect, useMemo, useState } from 'react';

const PRODUCT_COUNT = 3000;
const VISIBLE_COUNT = 80;

function createMockProducts(count) {
	const categories = ['Phone', 'Laptop', 'Tablet', 'Watch', 'Headphone'];

	return Array.from({ length: count }, (_, index) => {
		const id = index + 1;
		const category = categories[index % categories.length];
		const price = ((id * 7919) % 9000) + 100;

		return {
			id,
			name: `${category} Model ${id}`,
			price,
		};
	});
}

function filterAndSortProducts(products, search, minPrice, maxPrice, sortMode) {
	const normalizedSearch = search.trim().toLowerCase();
	const min = Number(minPrice);
	const max = Number(maxPrice);

	const filtered = products.filter((product) => {
		const matchName = normalizedSearch
			? product.name.toLowerCase().includes(normalizedSearch)
			: true;

		const matchMin = Number.isNaN(min) ? true : product.price >= min;
		const matchMax = Number.isNaN(max) ? true : product.price <= max;

		return matchName && matchMin && matchMax;
	});

	const sorted = [...filtered].sort((a, b) => {
		if (sortMode === 'price-desc') return b.price - a.price;
		if (sortMode === 'name-asc') return a.name.localeCompare(b.name);
		if (sortMode === 'name-desc') return b.name.localeCompare(a.name);
		return a.price - b.price;
	});

	return sorted;
}

function formatVnd(value) {
	return new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
		maximumFractionDigits: 0,
	}).format(value);
}

function Bai3() {
	const products = useMemo(() => createMockProducts(PRODUCT_COUNT), []);
	const [search, setSearch] = useState('');
	const [minPrice, setMinPrice] = useState('');
	const [maxPrice, setMaxPrice] = useState('');
	const [sortMode, setSortMode] = useState('price-asc');
	const [tick, setTick] = useState(0);

	const filteredProducts = useMemo(() => {
		return filterAndSortProducts(products, search, minPrice, maxPrice, sortMode);
	}, [products, search, minPrice, maxPrice, sortMode]);

	const totalPrice = useMemo(() => {
		return filteredProducts.reduce((sum, product) => sum + product.price, 0);
	}, [filteredProducts]);

	useEffect(() => {
		console.time('[Before optimize] recompute each render');
		filterAndSortProducts(products, search, minPrice, maxPrice, sortMode);
		console.timeEnd('[Before optimize] recompute each render');
	});

	useEffect(() => {
		console.time('[After optimize] recompute only deps change');
		filterAndSortProducts(products, search, minPrice, maxPrice, sortMode);
		console.timeEnd('[After optimize] recompute only deps change');
	}, [products, search, minPrice, maxPrice, sortMode]);

	useEffect(() => {
		console.time('[Total] recompute only when filtered list changes');
		filteredProducts.reduce((sum, product) => sum + product.price, 0);
		console.timeEnd('[Total] recompute only when filtered list changes');
	}, [filteredProducts]);

	return (
		<section style={styles.wrapper}>
			<h2 style={styles.title}>Bai tap 03: Product Filter + Tong tien</h2>
			<p style={styles.caption}>
				Mo Console de xem log thoi gian truoc/sau toi uu. Bam "Re-render khong lien quan"
				de thay su khac biet.
			</p>

			<div style={styles.controls}>
				<input
					style={styles.input}
					type="text"
					placeholder="Search theo ten"
					value={search}
					onChange={(event) => setSearch(event.target.value)}
				/>

				<input
					style={styles.input}
					type="number"
					min="0"
					placeholder="Gia tu"
					value={minPrice}
					onChange={(event) => setMinPrice(event.target.value)}
				/>

				<input
					style={styles.input}
					type="number"
					min="0"
					placeholder="Gia den"
					value={maxPrice}
					onChange={(event) => setMaxPrice(event.target.value)}
				/>

				<select
					style={styles.input}
					value={sortMode}
					onChange={(event) => setSortMode(event.target.value)}
				>
					<option value="price-asc">Gia tang dan</option>
					<option value="price-desc">Gia giam dan</option>
					<option value="name-asc">Ten A-Z</option>
					<option value="name-desc">Ten Z-A</option>
				</select>
			</div>

			<div style={styles.metaRow}>
				<p>
					So san pham sau loc: <strong>{filteredProducts.length}</strong>
				</p>
				<p>
					Tong tien: <strong>{formatVnd(totalPrice)}</strong>
				</p>
				<button type="button" style={styles.ghostBtn} onClick={() => setTick((prev) => prev + 1)}>
					Re-render khong lien quan ({tick})
				</button>
			</div>

			<p style={styles.note}>
				Kiem tra: danh sach ben duoi dang hien thi {Math.min(VISIBLE_COUNT, filteredProducts.length)}
				/{filteredProducts.length} dong de giao dien khong bi cham.
			</p>

			<ul style={styles.list}>
				{filteredProducts.slice(0, VISIBLE_COUNT).map((product) => (
					<li key={product.id} style={styles.item}>
						<span>{product.name}</span>
						<strong>{formatVnd(product.price)}</strong>
					</li>
				))}
			</ul>

			<p style={styles.beforeHint}>Mo Console de xem timing logs truoc/sau toi uu.</p>
		</section>
	);
}

const styles = {
	wrapper: {
		maxWidth: 900,
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
		margin: '8px 0 16px',
		color: '#4b5563',
	},
	controls: {
		display: 'grid',
		gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
		gap: 10,
	},
	input: {
		padding: '10px 12px',
		borderRadius: 8,
		border: '1px solid #9ca3af',
		fontSize: 14,
	},
	metaRow: {
		marginTop: 14,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',
		gap: 12,
		flexWrap: 'wrap',
	},
	ghostBtn: {
		padding: '8px 12px',
		border: '1px solid #9ca3af',
		borderRadius: 8,
		background: '#f9fafb',
		color: '#111827',
		cursor: 'pointer',
	},
	note: {
		marginTop: 12,
		color: '#6b7280',
	},
	list: {
		marginTop: 10,
		listStyle: 'none',
		padding: 0,
		borderTop: '1px solid #e5e7eb',
		maxHeight: 420,
		overflowY: 'auto',
	},
	item: {
		display: 'flex',
		justifyContent: 'space-between',
		gap: 8,
		padding: '10px 6px',
		borderBottom: '1px solid #e5e7eb',
	},
	beforeHint: {
		marginTop: 10,
		color: '#6b7280',
		fontSize: 13,
	},
};

export default Bai3;
