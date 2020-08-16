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
import Listing from '../Listing/Listing.jsx';

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
    const [modalListing, setModalListing] = useState({ data: [], header: [], title: "", display: false });

    /** @var {Array} */
    const [inputName, setInputName] = useState('');
    /** @var {Array} */
    const [inputDateOfBirth, setInputDateOfBirth] = useState('');
    /** @var {Array} */
    const [inputSex, setInputSex] = useState('');
    /** @var {Array} */
    const [inputClass, setInputClass] = useState('');

    /** @var {Array} */
    const [searchName, setSearchName] = useState('');
    /** @var {Array} */
    const [searchSex, setSearchSex] = useState('');
    /** @var {Array} */
    const [searchClass, setSearchClass] = useState('');

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

    /**
     * Função responsável pela busca do aluno a partir dos filtros.
     * 
     * @param {Void}
     */
    function handleStudentSearch() {

    }

    /**
     * Retorna uma listagem de todos os estudantes.
     * 
     * @param {Void}
     */
    function handleGetAllStudents() {
        const response = (new StudentController()).index();

        response.then(success => {
            const data = (success.data).map(student => {
                return [
                    student.nome,
                    student.data_nascimento,
                    student.sexo === "M" ? "Masculino" : "Feminino",
                    student.nome_turma,
                ];
            });

            setModalListing(
                {
                    header: ["Aluno", "Data de Nascimento", "Sexo", "Turma"],
                    data: data,
                    title: "Resultado da busca - Alunos",
                    display: true
                });
        }).catch(err => {
            setModalShow({ msg: err.response.data.erro, title: "Resultado da busca - Alunos", display: true });
        });
    }

    return (
        <>
            <Header />

            <Folder name="Alunos" path={PATH} />

            <div className="container-fluid content-row">
                <div className="row pt-3">

                    <div className="col-md-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <strong>Cadastrar Aluno</strong>
                                </h5>
                                <div className="row">
                                    <FormInput icon={FaUserAlt} error="Informe o nome" type="text" value={inputName} setter={setInputName} placeholder="Nome Completo do Aluno" />

                                    <FormInput icon={FaRegCalendarAlt} error="Informe a Data de Nascimento" type="date" value={inputDateOfBirth} setter={setInputDateOfBirth} placeholder="Data de Nascimento do Aluno" />

                                    <Select icon={FaRegCircle} data={SEXO} error="Informe o Sexo" value={inputSex} setter={setInputSex} hidden="Sexo" />

                                    <Select icon={TiGroup} data={classes} error="Informe a Turma" value={inputClass} setter={setInputClass} hidden="Turma" />
                                </div>
                                <div className="row justify-content-end">
                                    <div className="p-3">
                                        <button type="button" onClick={handleSubmitRecordStudent} className="btn btn-primary btn-lg">Cadastrar Aluno</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <strong>Pesquisar Aluno</strong>
                                </h5>
                                <div className="row">
                                    <FormInput icon={FaUserAlt} error="Informe o nome" type="text" value={searchName} setter={setSearchName} placeholder="Nome Completo do Aluno" />

                                    <Select icon={FaRegCircle} data={SEXO} error="Informe o Sexo" value={searchSex} setter={setSearchSex} hidden="Sexo" />

                                    <Select icon={TiGroup} data={classes} error="Informe a Turma" value={searchClass} setter={setSearchClass} hidden="Turma" />
                                </div>
                                <div className="row justify-content-end">
                                    <div className="p-3">
                                        <button type="button" onClick={handleStudentSearch} className="btn btn-primary btn-lg">Buscar Aluno</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <Alert data={modalShow} show={modalShow.display} onHide={() => setModalShow({ display: false })} />
                </div>

                <div className="card mb-3 mt-5">
                    <div className="row no-gutters">
                        <div className="col-md-10">
                            <div><strong>Visualizar Alunos</strong></div>
                        </div>
                        <div className="col-md-2">
                            <div className="p-3">
                                <button type="button" onClick={handleGetAllStudents} className="btn btn-primary btn-lg">Exibir</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Listing info={modalListing} show={modalListing.display} onHide={() => setModalListing({ data: [], header: [], title: "", display: false })} />
            </div>
        </>
    );
}

export default Student;