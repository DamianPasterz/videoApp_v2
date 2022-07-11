import React from 'react';
import { Container, Row } from 'reactstrap';

import FilmsList from '../components/FilmsList';
import Filters from '../components/Filters';

const FilmListPage = () => {
	return (
		<Container>
			<Row>
				<Filters />
			</Row>
			<Row>
				<FilmsList />
			</Row>
		</Container>
	);
};

export default FilmListPage;
