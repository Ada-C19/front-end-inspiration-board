

const BoardList = ({boards}) => {
    return(
        <select>
            {boards.map((board) => (
                <option value={board.board_id} key={board.board_id}>{board.title}</option>
            )
            ) 
            }
        </select>
    )
}

export default BoardList;