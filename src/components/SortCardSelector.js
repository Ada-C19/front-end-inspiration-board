import React from 'react';

const SortCardSelector = ( { onSortSelect }) => {
    
    const handleSortSelect = (event) => {
        onSortSelect(event.target.value)
    }

    return (
    <div>
        <h3>Choose Sort Direction</h3>
        <div>
            <select onChange={handleSortSelect}>
                <option value="Alphabetical">Alphabetical</option>
                <option value="Likes">Likes</option>
                <option value="ID">ID</option>
            </select>
        </div>
    </div>
    )
}

export default SortCardSelector