import React, { useState, useEffect } from 'react';

import Header from '../Header/Header.jsx';
import Folder from '../Folder/Folder.jsx';

import ClassController from '../ClassController.js';
import StudentController from '../StudentController.js';

import FormInput from '../FormInput/FormInput.jsx';
import Select from '../Select/Select.jsx';

import { FaUserAlt, FaRegCalendarAlt, FaRegCircle } from "react-icons/fa";
import { TiGroup } from 'react-icons/ti';

import Alert from '../Alert/Alert.jsx';

/** @var {Array} */
const PATH = ['Home', 'Library', 'Data'];

/** @var {Array} */
const SEXO = [
    {
        value: "m",
        label: "Masculino"
    },
    {
        value: "f",
        label: "Feminino"
    }
];

function Student() {
    /** @var {Array} */
    const [modalShow, setModalShow] = useState({ msg: "", title: "", display: false });

    /** @var {Array} */
    const [inputName, setInputName] = useState('');

    /** @var {Array} */
    const [inputDateOfBirth, setInputDateOfBirth] = useState('');

    /** @var {Array} */
    const [inputSex, setInputSex] = useState('');

    /** @var {Array} */
    const [inputClass, setInputClass] = useState('');

    /** @var {Array} */
    const [classes, setClasses] = useState([]);

    /**
     * Forma o array de opções do select.
     * 
     * @param {Void}
     * 
     * @return {Void}
     */
    useEffect(() => {
        fetch(ClassController.ALL)
            .then(response => {
                response.json().then(data => {
                    const newArray = data.map((value, key) => {
                        return ({ value: value.id_turma, label: value.nome });
                    })

                    setClasses(newArray);
                });
            });
    }, []);

    /**
     * Realiza a validação da data.
     * 
     * @param {String} date
     * 
     * @return {Boolean}
     */
    function Validator(date) {
        const DateOfBirthValidatorBrazilian = /\d{1,2}[/|\-|/]{1}\d{1,2}[/|\-|/]\d{4}/.test(date);
        const DateOfBirthValidatorEnglish = /\d{4}[/|\-|/]{1}\d{1,2}[/|\-|/]\d{1,2}/.test(date);

        return (DateOfBirthValidatorEnglish || DateOfBirthValidatorBrazilian) ? true : false;
    }

    /**
     * Função responsável pela validação e persistência das informações do aluno.
     * 
     * @param {Void}
     */
    function handleSubmitRecordStudent() {
        if (Validator(inputDateOfBirth) && inputName && inputSex && inputClass) {

            const params = {
                "nome": inputName,
                "data_nascimento": inputDateOfBirth,
                "sexo": inputSex,
                "id_turma": inputClass
            };

            (new StudentController()).create(params)
                .then(response => {
                    setModalShow({ msg: "Cadastro realizado com sucesso!", title: "Cadastro", display: true });
                })
                .catch(err => {
                    setModalShow({ msg: err.response.data.erro, title: "Cadastro", display: true });
                });
        } else {
            setModalShow({ msg: "Existem campos que não foram informados!", title: "Cadastro", display: true });
        }
    }

    return (
        <>
            <Header />

            <Folder name="Alunos" path={PATH} />

            <div className="row pt-3">

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">
                                <strong>Cadastrar Aluno</strong>
                            </h5>

                            <FormInput icon={FaUserAlt} error="Informe o nome" type="text" value={inputName} setter={setInputName} placeholder="Nome Completo do Aluno" />

                            <FormInput icon={FaRegCalendarAlt} error="Informe a Data de Nascimento" type="date" value={inputDateOfBirth} setter={setInputDateOfBirth} placeholder="Data de Nascimento do Aluno" />

                            <Select icon={FaRegCircle} data={SEXO} error="Informe o Sexo" value={inputSex} setter={setInputSex} hidden="Sexo" />

                            <Select icon={TiGroup} data={classes} error="Informe a Turma" value={inputClass} setter={setInputClass} hidden="Turma" />

                            <div className="d-flex flex-row-reverse">
                                <div className="p-3">
                                    <button type="button" onClick={handleSubmitRecordStudent} className="btn btn-primary btn-lg">Cadastrar Aluno</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">

                            <h5 className="card-title">
                                <strong>Pesquisar Aluno</strong>
                            </h5>

                            <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>

                            <button type="button" className="btn btn-primary">Go somewhere</button>
                        </div>
                    </div>
                </div>

                <Alert data={modalShow} show={modalShow.display} onHide={() => setModalShow({ display: false })} />

            </div>
        </>
    );
}

export default Student;