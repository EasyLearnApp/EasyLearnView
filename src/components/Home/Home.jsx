import React, { useState } from 'react';

import Header from '../../Header/Header.jsx';
import Card from '../../Card/Card.jsx';

import Copyright from '../Copyright/Copyright.jsx';

/** @var {Object} */
const OPTIONS = [
    {
        "url": "student",
        "label": "Alunos",
    },
    {
        "url": "class",
        "label": "Turmas"
    }
];

function Home() {
    /** @var {Array} */
    const [options, setOptions] = useState([]);

    /** @var {Array} */
    const [inputFilterText, setinputFilterText] = useState('');

    /** @var {Array} */
    const [optionMethod, setOptionMethod] = useState('');

    /**
     * Mostra as opções para o usuário.
     * 
     * @param {Object} e 
     */
    function handleSubmit(e) {
        e.preventDefault();

        const ElementsFilter = OPTIONS.map((value, index) => {
            return ((value.label).includes(inputFilterText)) ? value : {};
        });

        var newArray = ElementsFilter.filter(value => Object.keys(value).length !== 0);

        setOptions(newArray);
    }

    return (
        <>
            <Header name="Home" />

            <div className="jumbotron">
                <h1 className="display-4"><strong>Olá,</strong></h1>

                <p className="lead">Este sistema foi desenvolvido para facilitar parte da administração de sua</p>
                <p className="lead">escola e estamos felizes em ter você aqui!</p>

                <a className="btn btn-primary btn-lg" href="/home" role="button">Saiba mais</a>
            </div>

            <form>
                <div className="row">
                    <div className="form-group col-md-5">
                        <input
                            type="email" placeholder="Procuras por ..."
                            className="form-control" id="email"
                            onChange={e => { setinputFilterText(e.target.value) }}
                            aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group col-md-5">
                        <select id="inputState" value={optionMethod} onChange={e => setOptionMethod(e.target.value)} className="form-control">
                            <option disabled hidden >Choose...</option>
                            <option value="alunos">Alunos</option>
                            <option value="turmas">Turmas</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <button type="button" className="btn btn-primary" onClick={e => { handleSubmit(e) }}>Pesquisar</button>
                    </div>
                </div>
            </form>

            <div className="row">
                {
                    options.map((option, key) => {
                        return (option.url && option.label) ? <Card key={key} label={option.label} url={option.url} /> : <div key={key}></div>
                    })
                }
            </div>

            <Copyright />
        </>
    );
}

export default Home;