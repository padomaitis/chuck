import React from 'react';
import Joke from './Joke';

const JokesList = (props) => {
    const {jokes} = props;
    return (
        <div>
            {jokes.map(joke => {
                 return <Joke key={joke.id}
                    value={joke.value}
                    category={joke.category || undefined}
                />})
            }
        </div>    
    ) 
}

export default JokesList;