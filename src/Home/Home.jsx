import React from 'react';

import Header from '../Header/Header.jsx';

function Home() {
    return (
        <>
            <Header name="Home" />

            <div className="jumbotron">
                <h1 className="display-4"><strong>Olá,</strong></h1>

                <p className="lead">Este sistema foi desenvolvido para facilitar parte da administração de sua</p>
                <p className="lead">escola e estamos felizes em ter você aqui!</p>

                <a className="btn btn-primary btn-lg" href="/home" role="button">Saiba mais</a>
            </div>
        </>
    );
}

export default Home;