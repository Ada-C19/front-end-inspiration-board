import React from 'react';

const Board = (props) => {
    return (<p>{props.title}</p>)
};


Board.propType={
    title: PropType.string.isRequired
}




export default Board

