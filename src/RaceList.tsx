import React from 'react';
import useNextFiveRaces from './hooks/useNextFiveRaces';


let raceCategories: any = {
	'9daef0d7-bf3c-4f50-921d-8e818c60fe61': 'greyhound',
	'4a2788f8-e825-4d36-9894-efd4baf1cfae': 'horse',
	'161d9be2-e909-4326-8c2c-35ed71fb460b': 'harness',
};

const RaceList = () => {
	const nextFiveRaces: Object = useNextFiveRaces();

	return (
		<div className='race-list-container'>
			<ul className='race-list'>
				{Object.entries(nextFiveRaces).map(([key, race]) => {
					const raceType = raceCategories[race?.category_id];
					return (
						<li className='race-list-item' key={key}>
							<span className={`race-type-icon ${raceType}`}></span>
							<span className='race-number'>{'R' + race?.race_number}</span>
							<span className='race-meeting-name'>{race?.meeting_name}</span>
							<span className='race-countdown-timer'>{race?.advertised_start?.seconds}</span>
						</li>
					)
				})}
			</ul>
		</div>
	);
};

export default RaceList;