import React, { Component } from 'react';

class LikeBadge extends Component { 
    constructor(props) {
        super(props)
        this.state = {
            liked: false,    
        }
    }
    changeText = () => {
        this.setState({
            liked: !this.state.liked
        })
    }
    render() {
        let badgeText = this.state.liked ? 'Liked' : 'Like it';
        let badgeColorClass = this.state.liked ? 'badge-primary ' : 'badge-success';
        return (
            <span className={'badge badge badge-pill like-badge ' + badgeColorClass}
                onClick = {this.changeText}>
                {badgeText}
            </span>
        );
    };
};

export default LikeBadge;