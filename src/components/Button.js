import React from 'react';
import './Button.css';

// inside arr are CSS classes
const STYLES = ['btn--heimer', 'btn--barbie'];


const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({children, onClick, buttonStyle, buttonSize, linkTo}) => {
    // if coding component has a set button style then it will have  thatbutton style, if not it will default to first value in STYLES array.
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0];
        const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
        return (
            <a href={linkTo} className='btn-mobile'>
                <button 
                className={`btn ${checkButtonStyle} ${checkButtonSize}`}
                onClick={onClick}>
                    {/* children are whatever we put in the text inside the button */}
                    {children}
                </button>
            </a>
        )
    }