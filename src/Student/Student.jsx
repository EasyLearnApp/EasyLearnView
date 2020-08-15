import React from 'react';

import Header from '../Header/Header.jsx';
import Folder from '../Folder/Folder.jsx';

const PATH = ['Home', 'Library', 'Data'];

function Student() {
    return (
        <>
            <Header />

            <Folder name="Alunos" path={PATH} />
        </>
    );
}

export default Student;