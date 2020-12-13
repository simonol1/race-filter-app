import axios from 'axios';

export const getNextFiveRaces = async () => await axios.get('https://api.neds.com.au/rest/v1/racing/?method=nextraces&count=5');