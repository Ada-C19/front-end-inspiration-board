import React from "react";
import PropTypes from 'prop-types';
import "./LikesIcon.css";

const LikesIcon = ({ count, handleLike }) => {
    let likesDisplay;
    
    if (count >= 100) {
        likesDisplay = <div className="ellipsis">...</div>;
    // } else if (count >= 10) {
    //     likesDisplay = <div className="ellipsis">..</div>;
    } else {
        likesDisplay = count;
    }
    
    const handleClick = () => {
        handleLike && handleLike();
    };
    
    return (
        <div className="likes-icon" onClick={handleClick}>
            <div className="likes-button">
                <div className="heart-icon">{count > 0 ? '❤️' : '🤍'}</div>
                {count > 0 && <div className="likes-count">{likesDisplay}</div>}
            </div>
        </div>

    );
};

LikesIcon.propTypes = {
    count: PropTypes.number.isRequired,
    handleLike: PropTypes.func
};

export default LikesIcon;
