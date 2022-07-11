import React from 'react';
import Moment from 'react-moment';
import { List } from 'reactstrap';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import YouTubeIcon from '@mui/icons-material/YouTube';


const MovieInfoList = ({ publishedAt, likes, views, provider }) => {
	const providerIcon = provider =>
		provider === 'YOUTUBE' ? (
			<span>
				<YouTubeIcon className='yt-icon' />
			</span>
		) : (
			<span>
				<img src='../images/vimeo.svg' className='vimeo-icon' />
			</span>
		);

	return (
		<>
			{providerIcon(provider)}
			<List type='unstyled' className='mb-2'>
				<li>
					<span>
						<ChevronRightIcon />
					</span>{' '}
					published:{' '}
					<span>
						<Moment date={publishedAt} format='MMM Do YYYY' />
					</span>
				</li>
				{likes && (
					<li>
						<span>
							<ChevronRightIcon />
						</span>{' '}
						likes: <span>{likes}</span>
					</li>
				)}
				{views && (
					<li>
						<span>
							<ChevronRightIcon />
						</span>{' '}
						views: <span>{views}</span>
					</li>
				)}
			</List>
		</>
	);
};

export default MovieInfoList;
