import React from 'react';

const LikeBadge = (props) => { 
    const {liked, toggleLiked, id} = props;
    const badgeText = liked ? 'Liked' : 'Like it';
    const badgeColorClass = liked ? 'badge-primary ' : 'badge-success';
    return (
        <span className={'badge badge badge-pill like-badge ' + badgeColorClass}
            onClick = {toggleLiked(id)}>
            {badgeText}
        </span>
    );
};

export default LikeBadge;