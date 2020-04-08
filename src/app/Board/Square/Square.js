import React from 'react';
import './Square.css';

const square = (props) => {
    return (
        <button className="Square" onClick={() => props.click(props.index)}>{props.value}</button>
    );
};

export default square;