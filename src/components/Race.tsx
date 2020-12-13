import moment from "moment";

let raceCategories: any = {
	'9daef0d7-bf3c-4f50-921d-8e818c60fe61': 'greyhound',
	'4a2788f8-e825-4d36-9894-efd4baf1cfae': 'horse',
	'161d9be2-e909-4326-8c2c-35ed71fb460b': 'harness',
};

interface IProps {
    race: any;
}

/* Formats the time until jump
 * @param {number} timestamp: unix timestamp in seconds
 * @returns the time remaining until race jump in human readable format
 */

export const getFormattedTime = (timestamp: number) => {
    const currentTime = Date.now() / 1000;
    const remainingTime = moment.duration(currentTime - timestamp,'seconds').humanize();
    return remainingTime;
};

/* Handles the race time and renders each race
 * @param {Object} race: Object of race data
 * @returns the race type (with an icon), race number, meeting name and time until start
 */

const Race = ({race}: IProps) => {
    const raceType = raceCategories[race?.category_id];

	return (
        <li className='race-list-item'>
            <span className={`race-type-icon ${raceType}`}></span>
            <span className='race-number'>{'R' + race?.race_number}</span>
            <span className='race-meeting-name'>{race?.meeting_name}</span>
            <span className='race-countdown-timer'>{getFormattedTime(race?.advertised_start?.seconds)}</span>
        </li>
	);
};

export default Race;