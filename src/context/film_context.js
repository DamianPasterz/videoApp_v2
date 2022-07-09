
import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './Film_reducer';


const initLocalStorage = () => {
	let data = localStorage.getItem('movies');
	if (data) return JSON.parse(localStorage.getItem('movies'));
	else return [];
};


const initialState = {
	movies: initLocalStorage(),
	provider: '',
	vimeo_movies: [],
	alert: { show: false, type: 'success', msg: '', place: "HERO" },
	isLoading: false,
};



const FilmContext = React.createContext();
export const FilmProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);


	useEffect(() => {
		localStorage.setItem('movies', JSON.stringify(state.movies));
	}, [state.movies]);



	const isPresent = item =>
		state.movies.findIndex(movie => movie.movieUrl === item.movieUrl) !== -1;


	const addItem = (movieInput, provider, place) => {
		dispatch({ type: "GET_MOVIE_BEGIN" });

	};





	const removeMovie = id => {
		dispatch({ type: "REMOVE_MOVIE", payload: id });
	};
	const clearMovies = () => dispatch({ type: "CLEAR_ALL" });
	const toggleFavourites = id => dispatch({ type: "TOGGLE_FAV", payload: id });

	return (
		<FilmContext.Provider
			value={{
				...state,
				addItem,
				removeMovie,
				toggleFavourites,
				clearMovies,

			}}>
			{children}
		</FilmContext.Provider>
	);
};

export const useFilmContext = () => {
	return useContext(FilmContext);
};
