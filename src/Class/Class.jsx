import React from 'react';

import Header from '../Header/Header.jsx';
import Folder from '../Folder/Folder.jsx';

const PATH = ['Home', 'Turmas'];

function Class() {
    return (
        <>
            <Header name="Turmas" />

            <Folder name="Turmas" path={PATH} />
        </>
    );
}

export default Class;