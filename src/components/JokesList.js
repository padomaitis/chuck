import React from 'react';
import Joke from './Joke';

const JokesList = (props) => {
    const {jokes,likedJokes,toggleLiked} = props;
    return (
        <div>
            {jokes.map(joke => {
                 return <Joke key = {joke.id}
                    id = {joke.id}
                    value = {joke.value}
                    category = {joke.category || undefined}
                    liked = {likedJokes.includes(joke.id)}
                    toggleLiked = {toggleLiked}
                />})
            }
        </div>    
    ) 
}

export default JokesList;