import {useState, useEffect} from 'react';
import {getNextFiveRaces} from '../api';

interface IProps {
	showGreyhound: boolean;
	showHorse: boolean;
	showHarness: boolean;
}

const greyhound = '9daef0d7-bf3c-4f50-921d-8e818c60fe61';
const horse =	'4a2788f8-e825-4d36-9894-efd4baf1cfae';
const harness = '161d9be2-e909-4326-8c2c-35ed71fb460b';


/* Sort the races by time and truncate to 5 races
 * @param {array} races: a set of objects storing the data for the next 25 races 
 * @returns Array of filtered and sorted objects 
 */

export const getSortedNextFiveRaces = (races: any) => {
	const sortedRaces = races.sort((a: any, b: any) => a?.advertised_start?.seconds - b?.advertised_start?.seconds);
	return sortedRaces.slice(0,5);
}

/* Handle race filtering
 * @param {array} nextFiveRaces: a set of objects storing the data for the next 25 races 
 * @param {object} filterProps: Object of filter states
 * @returns Array of filtered and sorted objects 
 */

export const getFilteredRaceData = (nextFiveRaces: any, {...filterProps}) => {
	let filteredRaces: Array<Object> = [];
	const showHarness = filterProps?.showHarness;
	const showHorse = filterProps?.showHorse;
	const showGreyhound = filterProps?.showGreyhound;
	const filteredNextFiveRaces = nextFiveRaces.filter((r:any) => r?.advertised_start?.seconds + 60 > (Date.now() / 1000));
	
	if (!showHarness && !showHorse && !showGreyhound) {
		return getSortedNextFiveRaces(filteredNextFiveRaces);
	} 

	if (showGreyhound) {
		filteredNextFiveRaces.forEach((r: any) => {
			if (r?.category_id === greyhound) {
				filteredRaces.push(r);
			}
		});
	} 
	if (showHarness) {
		filteredNextFiveRaces.forEach((r: any) => {
			if (r?.category_id === harness) {
				filteredRaces.push(r);
			}
		});
	}
	if (showHorse) {
		filteredNextFiveRaces.forEach((r: any) => {
			if (r?.category_id === horse) {
				filteredRaces.push(r);
			}
		});
	}

	return getSortedNextFiveRaces(filteredRaces); 
};

/* Get the race data and set it to state
 * @param {object} filterProps: Object of filter states
 * @returns Array of filtered and sorted objects 
 */

const useNextFiveRaces = ({...filterProps}: IProps) => {
	const [nextFiveRaces, setNextFiveRaces] = useState([]);
	
	useEffect(() => {
		let mounted = true;

		getNextFiveRaces().then(res => {
			if (!mounted || !res?.data) return;
			const raceData = res.data?.data?.race_summaries;
			const raceDataArr: any = Object.values(raceData);
			setNextFiveRaces(raceDataArr);
    }).catch(err => {
      console.warn(`Failed to get next five races: ${err}`);
    });
    
	return () => {
		mounted = false;
	};
}, []);

	const filteredRaceData: any = getFilteredRaceData(nextFiveRaces, {...filterProps});

	return filteredRaceData;
};

export default useNextFiveRaces;