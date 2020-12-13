import React, {useState} from 'react';
import RaceList from './RaceList';
import RaceFilter from './RaceFilter';

/* Declares the filtering states
 * @returns the header, RaceFilter and RaceList components 
 */

const NextToGoRaces = () => {
	const [showGreyhound, setShowGreyhound] = useState(true);
	const [showHarness, setShowHarness] = useState(true);
	const [showHorse, setShowHorse] = useState(true);

	return (
		<div className='next-to-go-races-container'>
				<header className='next-to-go-races-header'>
					<h3>Next 5 races</h3>
					<RaceFilter
						showGreyhound={showGreyhound}
						showHarness={showHarness}
						showHorse={showHorse}
						setGreyhound={setShowGreyhound}
						setHarness={setShowHarness}
						setHorse={setShowHorse}
					/>
				</header>
				<RaceList
					showGreyhound={showGreyhound}
					showHarness={showHarness}
					showHorse={showHorse}
				/>
		</div>
	);
};

export default NextToGoRaces;