import React, { useState } from 'react';

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
            <p>You have {likeCount} likes</p>
                <button onClick={updateLikes}>Click</button>
        </section>
    )
};

export default PostLikes;
