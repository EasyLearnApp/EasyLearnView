import React from 'react';

import './styles.css';

function Folder(props) {
    return (
        <div className="route-link">
            <h1>/ {props.name}</h1>
        </div>
    );
}

export default Folder;