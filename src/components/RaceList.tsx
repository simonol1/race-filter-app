import React, {useEffect} from 'react';
import useNextFiveRaces from '../hooks/useNextFiveRaces';
import Race from './Race';

interface IProps {
	showGreyhound: boolean;
	showHorse: boolean;
	showHarness: boolean;
}

/* Handles a rerender when a filter changes and the filter/sort hook
 * @param {boolean} showGreyhound: Value to determine filtering
 * @param {boolean} showHorse: Value to determine filtering
 * @param {boolean} showHarness: Value to determine filtering
 * @returns the Race component or empty results text
 */

const RaceList = ({showGreyhound, showHorse, showHarness}: IProps) => {

	const filterProps = {
		showHorse,
		showGreyhound,
		showHarness
	};
	const nextFiveRaces = useNextFiveRaces({...filterProps});

	useEffect(() => {
	}, [showGreyhound, showHorse, showHarness]);

	return (
		<div className='race-list-container'>
			{nextFiveRaces && nextFiveRaces.length !== 0 ? (
				<ul className='race-list'>
					{Object.entries(nextFiveRaces).map(([key, race]) => <Race race={race} key={key} />)}
				</ul>
			) : (
				<div className='empty-results-container'>
					<p>There are no upcoming races for your selected race type.</p>
				</div>
			)}

		</div>
	);
};

export default RaceList;