import React from 'react';

const SortCardRadio = ( { onSortSelect }) => {
    
    const handleSortSelect = (event) => {
        onSortSelect(event.target.value)
    }

    return (
    <div>
        <h3>Choose Sort Direction</h3>
        {/* <div>
            <input type="radio" value="Alphabetical" name="cardSortDirection" onClick={handleSortSelect}/> Alphabetical
            <input type="radio" value="Likes" name="cardSortDirection" onClick={handleSortSelect}/> Likes
            <input type="radio" value="ID" name="cardSortDirection" onClick={handleSortSelect}/> ID
        </div> */}
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

export default SortCardRadio