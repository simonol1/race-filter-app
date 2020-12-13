import React, {useState} from 'react';
import RaceList from './RaceList';
import RaceFilter from './RaceFilter';

const NextToGoRaces = () => {
	const [filterOpen, setFilterOpen] = useState(false);

	return (
		<div className='next-to-go-races__container'>
				<header className='next-to-go-races__header'>
						<h3>Next 5 races </h3>
						<RaceFilter open={filterOpen} setOpen={setFilterOpen} />
				</header>
				<RaceList />
		</div>
	);
};

export default NextToGoRaces;