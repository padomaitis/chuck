import React from 'react';
import LikeBadge from '../components/LikeBadge';

const Joke = (props) => {
    const {value,category,liked,toggleLiked, id} = props;
    return (
        <div className="card margin-20">
            <h3 className="card-header">{category || 'Random'}</h3>
            <div className="card-block">
                <p className="card-text">{value}</p>
            </div>
            <LikeBadge liked = {liked} toggleLiked = {toggleLiked} id = {id} />
        </div>
    ); 
}

export default Joke;