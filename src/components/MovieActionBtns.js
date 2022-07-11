import React from 'react';
import { List, Button, ListInlineItem } from 'reactstrap';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';


import { useFilmContext } from '../context/film_context';
import { useFilterContext } from '../context/filter_context';

const ActionBtns = ({ item, place }) => {
	const { id, favourite } = item;
	const { removeMovie, toggleFavourites } = useFilmContext();
	const { updateCurrentMovie } = useFilterContext();

	return (
		<List
			type='inline'
			className={`${place === 'LIST_VIEW' ? 'list-btn-container' : 'tile-btn-container'
				}`}>
			<ListInlineItem>
				<Button
					size='sm'
					className='movie-action-btn'
					onClick={() => {
						updateCurrentMovie(item);
					}}>
					Play{' '}
					<span>
						<PlayCircleIcon />
					</span>
				</Button>
			</ListInlineItem>
			<ListInlineItem>
				<Button
					size='sm'
					onClick={() => toggleFavourites(id)}
					className='movie-action-btn'>
					Favourite{' '}
					<span>
						{/* conditional color render */}
						<FavoriteIcon className={`heart-icon ${favourite && 'active'}`} />
					</span>
				</Button>
			</ListInlineItem>
			<ListInlineItem>
				<Button
					size='sm'
					onClick={() => removeMovie(id)}
					className='movie-action-btn'>
					Remove{' '}
					<span>
						<DeleteIcon />
					</span>
				</Button>
			</ListInlineItem>
		</List>
	);
};

export default ActionBtns;
