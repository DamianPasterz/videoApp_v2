
import React, { useContext, useEffect, useReducer } from 'react';
import reducer from './Film_reducer';
import fetchElement from '../tools/fetchElement'


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
		fetchElement(movieInput, provider)
			.then(newItem => {
				if (isPresent(newItem)) {
					dispatch({ type: "GET_MOVIE_END" });
					return setAlert(
						true,
						'The movie is already in your list!',
						'warning',
						place
					);
				}
				dispatch({ type: "ADD_MOVIE", payload: newItem });
				setAlert(
					true,
					'Movie successfully added to the list!',
					'success',
					place
				);
				dispatch({ type: "GET_MOVIE_END" });
			})
			.catch(error => {
				setAlert(true, "I'm sorry, adding the movie failed!", 'danger', place);
				dispatch({ type: "GET_MOVIE_END" });
			});
	};


	const setAlert = (
		show = false,
		msg = '',
		type = state.alert.type,
		place = "HEADER"
	) => {
		dispatch({ type: "SET_ALERT", payload: { show, msg, type, place } });
	};


	const removeFilm = id => {
		dispatch({ type: "REMOVE_MOVIE", payload: id });
	};
	const clearfilms = () => dispatch({ type: "CLEAR_ALL" });
	const toggleFavourites = id => dispatch({ type: "TOGGLE_FAV", payload: id });

	return (
		<FilmContext.Provider
			value={{
				...state,
				addItem,
				removeFilm,
				toggleFavourites,
				clearfilms,

			}}>
			{children}
		</FilmContext.Provider>
	);
};

export const useFilmContext = () => {
	return useContext(FilmContext);
};
