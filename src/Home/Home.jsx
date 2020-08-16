import React, { useState } from 'react';

import Header from '../Header/Header.jsx';
import Card from '../Card/Card.jsx';

const CATEGORIES = {
    'TURMA': 'TURMA',
    'ALUNO': 'ALUNO'
};

const API = {
    TURMAS: "http://swvschools.swvsoftware.com.br/api/turmas",
    ALUNOS: "http://swvschools.swvsoftware.com.br/api/alunos"
};

/** @var {Object} */
const OPTIONS = [
    {
        "url": "\\alunos",
        "label": "Alunos",
    },
    {
        "url": "\\turmas",
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

    function handlesetinputFilterText(event) {
        setinputFilterText(event.target.value);
    }

    function handleSetOptionMethod(event) {
        setOptionMethod(event.target.value);
    }

    /**
     * Função responsável pela obtenção de todas as turmas.
     * 
     * @param {Void}
     * 
     * @return {Array}
     */
    async function handleGetStudent() {
        return fetch(API.ALUNOS).then(response => {
            response.json().then((data) => {
                return data;
            })
        });
    }

    /**
     * Função responsável pela obtenção de todas as turmas.
     * 
     * @param {Void}
     * 
     * @return {Array}
     */
    async function handleGetClass() {
        return fetch(API.TURMAS).then(response => {
            response.json().then((data) => {
                return data;
            })
        });
    }

    async function handleSubmit() {
        const selectValue = optionMethod || '';

        let alunos = await handleGetStudent();

        let turmas = await handleGetClass();

        console.log(alunos);

        console.log(turmas);

        // const api = axios.

        // http://swvschools.swvsoftware.com.br/api/alunos
        // http://swvschools.swvsoftware.com.br/api/turmas

        console.log(CATEGORIES.TURMA);
        console.log(CATEGORIES.ALUNO);

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
                            onChange={e => { handlesetinputFilterText(e) }}
                            aria-describedby="emailHelp"
                            required />
                    </div>
                    <div className="form-group col-md-5">
                        <select id="inputState" value={optionMethod} onChange={_e => handleSetOptionMethod(_e)} className="form-control">
                            <option disabled hidden >Choose...</option>
                            <option value="alunos">Alunos</option>
                            <option value="turmas">Turmas</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Pesquisar</button>
                    </div>
                </div>
            </form>

            <div className="row">

                {/* <Card label="Alunos" url="\student" /> */}

                {/* <Card label="Turmas" url="\class" /> */}

            </div>

            <div className="row">

                {
                    options.map((option, key) => {
                        return (option.url && option.label) ? <Card key={key} label={option.label} url={option.url} /> : <div key={key}></div>
                    })
                }

            </div>
        </>
    );
}

export default Home;