import React from 'react';

const LikeBadge = (props) => { 
    let badgeText = props.liked ? 'Liked' : 'Like it';
    let badgeColorClass = props.liked ? 'badge-primary ' : 'badge-success';
    return (
        <span className={'badge badge badge-pill like-badge ' + badgeColorClass}
            onClick = {props.toggleLike}>
            {badgeText}
        </span>
    );
};

export default LikeBadge;