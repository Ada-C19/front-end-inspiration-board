import React from 'react'
import './NavBar.css';
import PropTypes from 'prop-types';

const NavBar = ({ boards, deleteBoard, selectBoard, selectedTheme, handleLogout }) => {

    const board_titles = boards.map((board, index) => {
        return (
            <li key={index} className={`${selectedTheme}-board-title`}>
                <button className={`${selectedTheme}-boards-list-item`} onClick={() => selectBoard(board)}>{board.title}</button>
                <button className={`${selectedTheme}-boards-list-item-delete`} onClick={() => deleteBoard(board.board_id)}>X</button>
            </li>
        );
    });
    
    return (
        <nav className={`${selectedTheme}-nav`}>
            <h1>Insp<span className={`${selectedTheme}-flicker-slow`}>ira</span>tion <br/> <span className={`${selectedTheme}-flicker-fast`}>Bo</span>ard</h1>
            <aside className={`${selectedTheme}-dropdown`}>
                <h4>All Boards</h4>
                <ul className={`${selectedTheme}-dropdown-content`}>{board_titles}</ul>
            </aside>
        </nav>
    );
};

NavBar.propTypes = {
    boards: PropTypes.arrayOf(
        PropTypes.shape({
        title: PropTypes.string.isRequired,
        })
    ).isRequired,
    handleLogout: PropTypes.func.isRequired,
};

export default NavBar;