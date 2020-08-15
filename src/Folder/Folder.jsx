import React from 'react';

import './styles.css';

const SPACE = String.fromCharCode(160);

function formatString(string) {
    return SPACE + SPACE + string + SPACE + SPACE;
}

function Folder(props) {
    return (
        <>
            <div className="route-link">
                <h1>/ {props.name}</h1>
            </div>

            <div className="directory-container">
                <h1>
                    {
                        (props.path).map(
                            (folder, index) => {
                                if (props.path[index + 1]) {
                                    return <span key={index} className="folder-active">{formatString(folder)} /</span>
                                } else {
                                    return <span key={index} className="folder-inactive">{formatString(folder)} </span>
                                }
                            })
                    }

                </h1>
            </div>
        </>
    );
}

export default Folder;