import React, { useState } from 'react';
import './PostLikes.css';

const PostLikes = () => {

    const [likeCount, setLikeCount] = useState(0);
    const [hasLiked, setHasLiked] = useState(false);

    const updateLikes = () => {
        if (hasLiked) {
            setLikeCount(likeCount - 1);
        } else {
            setLikeCount(likeCount + 1);
        }
        setHasLiked(!hasLiked);
    };

    return (
        <section>
            <p>You have {likeCount} {likeCount === 1 ? 'like' : 'likes'}</p>
            <button className={hasLiked ? 'liked' : ''} onClick={updateLikes}></button>
        </section>
    )
};

export default PostLikes;
