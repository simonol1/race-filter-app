import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {getSortedNextFiveRaces, getFilteredRaceData} from './hooks/useNextFiveRaces';
import {getFormattedTime} from './components/Race';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe("Sort and truncate function", () => {
  test("it should sort by seconds ascending and truncate array to 5", () => {
    const input = [
      { id: 1, advertised_start: {seconds: 8}},
      { id: 2, advertised_start: {seconds: 4}},
      { id: 3, advertised_start: {seconds: 2}},
      { id: 4, advertised_start: {seconds: 7}},
      { id: 5, advertised_start: {seconds: 9}},
      { id: 6, advertised_start: {seconds: 3}},
    ];

    const output = [
      { id: 3, advertised_start: {seconds: 2}},
      { id: 6, advertised_start: {seconds: 3}},
      { id: 2, advertised_start: {seconds: 4}},
      { id: 4, advertised_start: {seconds: 7}},
      { id: 1, advertised_start: {seconds: 8}},
    ];

    expect(getSortedNextFiveRaces(input)).toEqual(output);
  });
});

describe("Format time until race jump", () => {
  test("it should return the time until jump in a human readable format ", () => {
    const input = (Date.now() / 1000) - 90;
    const output = '2 minutes';

    expect(getFormattedTime(input)).toEqual(output);
  });
});


// describe("Filter function", () => {
//   test("it should filter based on user selection", () => {
//     const input = [
//       { id: 1, category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61'},
//       { id: 2, category_id: '9daef0d7-bf3c-4f50-921d-8e818c60fe61'},
//       { id: 3, category_id: '161d9be2-e909-4326-8c2c-35ed71fb460b'},
//       { id: 4, category_id: '4a2788f8-e825-4d36-9894-efd4baf1cfae'},
//     ];

//     const filterProps = {
//       showHorse: true,
//       showGreyhound: false,
//       showHarness: true,
//     }
//     const output = [
//       { id: 3, category_id: '161d9be2-e909-4326-8c2c-35ed71fb460b'},
//       { id: 4, category_id: '4a2788f8-e825-4d36-9894-efd4baf1cfae'},
//     ];

//     expect(getFilteredRaceData(input, filterProps)).toEqual(output);
//   });
// });
