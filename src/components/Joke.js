import React, { Component } from 'react';
import LikeBadge from '../components/LikeBadge';

class Joke extends Component {
    static defaultProps = {
        category: 'Random'
    }
    constructor(props) {
        super(props);
        this.state = {
            liked:false
        }
    }

    toggleLike = () => {
        this.setState({
            liked: !this.state.liked
        }) 
    }
    render() {
        const {value,category} = this.props;
        return (
            <div className="card margin-20">
                <h3 className="card-header">{category}</h3>
                <div className="card-block">
                    <p className="card-text">{value}</p>
                </div>
                <LikeBadge liked = {this.state.liked} toggleLike = {this.toggleLike}/>
            </div>
        ); 
    }
}

export default Joke;