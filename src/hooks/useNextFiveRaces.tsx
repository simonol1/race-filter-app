import React, {useState, useEffect} from 'react';
import {getNextFiveRaces} from '../races';

const useNextFiveRaces = () => {
	const [nextFiveRaces, setNextFiveRaces] = useState([]);

	useEffect(() => {
		let mounted = true;

    getNextFiveRaces().then(res => {
      if (!mounted || !res?.data) return;
     	setNextFiveRaces(res.data?.data?.race_summaries);
    }).catch(err => {
      console.warn(`Failed to get next five races: ${err}`);
    });
    
	return () => {
		mounted = false;
	};
}, []);

	return nextFiveRaces;
};

export default useNextFiveRaces;