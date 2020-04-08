import React from 'react';
import './Board.css'
import Square from "./Square/Square";

const board = (props) => {
    const squares = props.squares.map((value, index) => {
        return (
            <Square value={value} index={index} key={index} click={props.click}/>
        )
    });
    return (
        <div className="Board">
            {squares}
        </div>
    );
}

export default board;