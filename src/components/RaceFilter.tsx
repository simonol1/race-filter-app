import clsx from 'clsx';

interface IProps {
    showGreyhound: boolean;
    showHorse: boolean;
    showHarness: boolean;
    setGreyhound: Function;
    setHorse: Function;
    setHarness: Function;
}

/* Renders a list of buttons for filtering races
 * @param {boolean} showGreyhound: Value to determine filtering
 * @param {Function} setGreyhound: Toggle button filter
 * @returns a list of buttons 
 */

const RaceFilter = ({showGreyhound, showHorse, showHarness, setGreyhound, setHorse, setHarness} : IProps) => {

return (
    <div className='filter-buttons-container'>
			<button onClick={() => setHorse(!showHorse)} className={clsx(`race-type-icon horse`, {'selected': showHorse})}></button>
			<button onClick={() => setHarness(!showHarness)} className={clsx(`race-type-icon harness`, {'selected': showHarness})}></button>
			<button onClick={() => setGreyhound(!showGreyhound)} className={clsx(`race-type-icon greyhound`, {'selected': showGreyhound})}></button>
    </div>
)
};

export default RaceFilter;