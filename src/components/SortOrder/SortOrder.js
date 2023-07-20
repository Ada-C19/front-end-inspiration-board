import './SortOrder.css';

const SortOrder = props => {
    return (
        <div className="sort-dropdown">
            <label htmlFor="sort">Sort by:</label>
            <select id="sort" onChange={props.handleSortChange}>
                <option value={undefined}>None</option>
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    );
}
export default SortOrder;