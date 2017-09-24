import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
        <nav className="navbar navbar-toggleable-md bg-inverse">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <a className="navbar-brand" href="#">PavAdo</a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                    <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
  }
}

export default Header;