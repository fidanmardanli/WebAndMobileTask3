
import React from 'react';

const Sort = ({ handleSortChange }) => {
    return (
        <div className='sort-section'>
            <select onChange={(e) => handleSortChange(e.target.value)}>
                <option value='Date'>Date</option>
                <option value='status'>Status</option>
                <option value='text'>Text</option>
            </select>
        </div>
    );
};

export default Sort;
