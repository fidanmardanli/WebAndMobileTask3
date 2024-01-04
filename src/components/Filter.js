
import React from 'react';

const Filter = ({ handleFilterChange }) => {
    return (
        <div className='filter-section'>
            <select onChange={(e) => handleFilterChange(e.target.value)}>
                <option value='All'>All</option>
                <option value='Noted'>Noted</option>
                <option value='Want to Learn'>Want to Learn</option>
                <option value='Learned'>Learned</option>
            </select>
        </div>
    );
};

export default Filter;
