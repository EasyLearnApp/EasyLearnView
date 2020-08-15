import React from 'react';
import Method from '../Method/Method.jsx';

import './styles.css';

function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-xl navbar-dark bg-dark navbar-height rounded">
                <span className="navbar-brand">SWV Schools</span>

                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <Method to="/home" label="Home" />
                        <Method to="/student" label="Alunos" />
                        <Method to="/class" label="Turmas" />
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Header;