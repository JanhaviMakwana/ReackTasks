import React from 'react';
import './Header.css';

const Header = (props) => (
    <div className="Header">
        <i className="fa fa-film"></i>
        <div>{props.title}</div>
    </div>
);

export default Header;
