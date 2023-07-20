import React from "react";
import "./TrashIcon.css";

const TrashIcon = ({ onClick }) => {
    return (
        <div onClick={onClick} className="trash-icon">
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="hwb(0 2% 98%)"
            width="30px"
            height="30px"
            >
            <path
                d="M17 7L7 17M7 7l10 10"
                stroke="hwb(0 2% 98%)"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            </svg>
        </div>
    );
};

export default TrashIcon;
