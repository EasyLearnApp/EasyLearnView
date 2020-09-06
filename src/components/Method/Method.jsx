import React from 'react';

import { NavLink } from 'react-router-dom';

function Method(props) {
    return (
        <li className="nav-item">
            <NavLink className="nav-link list-group-margin" activeStyle={{ backgroundColor: '#000000' }} to={props.to}>{props.label}</NavLink>
        </li>
    );
}

export default Method;