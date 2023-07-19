import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./TrashIcon.css";

const TrashIcon = ({ onClick }) => {
    return (
        <div onClick={onClick} className="trash-icon">
            <FontAwesomeIcon icon={faTimes} />
        </div>
    );
};

export default TrashIcon;
