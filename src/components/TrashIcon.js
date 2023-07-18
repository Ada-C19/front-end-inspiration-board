import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./TrashIcon.css";

const TrashIcon = ({ onClick }) => {
    return (
        <div onClick={onClick}>
            <FontAwesomeIcon icon={faTrash} className="trash-icon" />
        </div>
    );
};

export default TrashIcon;