import React, { Component } from 'react';
import LikeBadge from '../components/LikeBadge';

class Joke extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const {value,category} = this.props;
        return (
            <div className="card margin-20">
                <h3 className="card-header">{category}</h3>
                <div className="card-block">
                    <h4 className="card-title"></h4>
                    <p className="card-text">{value}</p>
                </div>
                <LikeBadge/>
            </div>
        ); 
    }
}

Joke.defaultProps = {
    category: 'Random'
}
export default Joke;