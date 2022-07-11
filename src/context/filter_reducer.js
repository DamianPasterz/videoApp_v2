import moment from 'moment';




const filter_reducer = (state, action) => {
	switch (action.type) {
		case 'LOAD_MOVIES':
			return {
				...state,
				all_movies: [...action.payload],
				filtered_movies: [...action.payload],
			};
		case 'SET_VIEW':
			return { ...state, view: action.payload };

		// SORT

		case 'UPDATE_SORT':
			return { ...state, sort: action.payload };
		case 'SORT_MOVIES':
			const { sort, filtered_movies } = state;
			let sortedMovies = [...filtered_movies];
			if (sort === 'OLD') {
				sortedMovies = sortedMovies.sort((a, b) =>
					moment(a.publishedAt).diff(b.publishedAt)
				);
			}
			if (sort === 'NEW') {
				sortedMovies = sortedMovies.sort((a, b) =>
					moment(b.publishedAt).diff(a.publishedAt)
				);
			}
			if (sort === 'NAME_AZ') {
				sortedMovies = sortedMovies.sort((a, b) =>
					a.title.localeCompare(b.title)
				);
			}
			if (sort === 'NAME_ZA') {
				sortedMovies = sortedMovies.sort((a, b) =>
					b.title.localeCompare(a.title)
				);
			}
			return { ...state, filtered_movies: sortedMovies };

		// FILTER

		case 'FILTER_MOVIES':
			const {
				all_movies,
				filters: { favourite },
				provider,
			} = state;
			let filtered = [...all_movies];

			if (provider !== 'ALL') {
				filtered = filtered.filter(item => item.provider === provider);
			}

			if (favourite) {
				filtered = filtered.filter(item => item.favourite);
			}
			return { ...state, filtered_movies: filtered };
		case 'UPDATE_FILTERS':
			const { name, checked } = action.payload;
			return {
				...state,
				filters: { ...state.filters, [name]: checked },
			};

		// PROVIDER & PAGE TO DISPLAY

		case 'UPDATE_PROVIDER':
			return { ...state, provider: action.payload };

		// MOVIE PLAYER

		case 'SET_MODAL':
			return { ...state, modal_open: !state.modal_open };
		case 'UPDATE_CURRENT_MOVIE':
			return { ...state, current_movie: action.payload };
		//
		default:
			return console.log(`No Matching "${action.type}" - action type`);
	}
};

export default filter_reducer;
