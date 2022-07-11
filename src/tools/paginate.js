export const paginate = (items, perPage) => {
	const pages = Math.ceil(items.length / perPage);


	const newItems = Array.from({ length: pages }, (_, index) => {
		const start = index * perPage;
		return items.slice(start, start + perPage);
	});

	return newItems;
};
