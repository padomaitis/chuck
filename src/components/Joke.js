import React, { Component } from 'react';
import LikeBadge from '../components/LikeBadge';

class Joke extends Component {
    static defaultProps = {
        category: 'Random'
    }
    render() {
        const {value,category} = this.props;
        return (
            <div className="card margin-20">
                <h3 className="card-header">{category}</h3>
                <div className="card-block">
                    <p className="card-text">{value}</p>
                </div>
                <LikeBadge/>
            </div>
        ); 
    }
}

export default Joke;