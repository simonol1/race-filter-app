import React, {useState} from 'react';


const RaceFilter = (open: any, setOpen: any) => {

return (
    <button
        onClick={() => setOpen(!open)}
        className=''
    >
        filter
    </button>
)
};

export default RaceFilter;