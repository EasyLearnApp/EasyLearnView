import React, { useState } from 'react';

import Header from '../Header/Header.jsx';
import Folder from '../Folder/Folder.jsx';

import { FaUserAlt } from 'react-icons/fa';

import Listing from '../Listing/Listing.jsx';
import Alert from '../Alert/Alert.jsx';

import FormInput from '../FormInput/FormInput.jsx'; import ClassController from '../ClassController.js';

const PATH = ['Home', 'Turmas'];

function Class() {
    /** @var {Array} */
    const [modalShow, setModalShow] = useState({ msg: "", title: "", display: false });
    /** @var {Array} */
    const [modalListing, setModalListing] = useState({ data: [], header: [], title: "", display: false });

    /** @var {Array} */
    const [inputClass, setInputClass] = useState('');

    /** @var {Array} */
    const [searchClass, setSearchClass] = useState('');

    /**
     * Função responsável pela validação e persistência das informações da turma.
     * 
     * @param {Void}
     */
    function handleSubmitRecordClass() {
        if (inputClass) {
            const params = {
                "nome": inputClass
            };

            (new ClassController()).create(params)
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
     * Função responsável pela busca da turma a partir dos filtros.
     * 
     * @param {Void}
     */
    function handleClassSearch() {
        let fields = [];

        if (searchClass) {
            fields.push(`nome=${searchClass}`);
        }

        const response = (new ClassController()).display(fields);

        response.then(success => {
            const data = (success.data).map(student => {
                return [
                    student.nome
                ];
            });

            setModalListing(
                {
                    header: ["Turma"],
                    data: data,
                    title: "Resultado da busca - Turmas",
                    display: true
                });
        });
    }

    /**
     * Retorna uma listagem de todos as turmas.
     * 
     * @param {Void}
     */
    function handleGetAllClasses() {
        const response = (new ClassController()).index();

        response.then(success => {
            const data = (success.data).map(classItem => {
                return [
                    classItem.nome
                ];
            });

            setModalListing(
                {
                    header: ["Turma"],
                    data: data,
                    title: "Visualizar Turmas",
                    display: true
                });

            console.log(success.data);
        }).then(err => {
            console.log(err);
        })
    }

    return (
        <>
            <Header name="Turmas" />

            <Folder name="Turmas" path={PATH} />

            <div className="container-fluid content-row">
                <div className="row pt-3">

                    <div className="col-md-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <strong>Cadastrar Turma</strong>
                                </h5>
                                <div className="row">
                                    <FormInput icon={FaUserAlt} error="Informe o nome" type="text" value={inputClass} setter={setInputClass} placeholder="Descrição Turma" />
                                </div>
                                <div className="row justify-content-end">
                                    <div className="p-3">
                                        <button type="button" onClick={handleSubmitRecordClass} className="btn btn-primary btn-lg">Cadastrar Turma</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title">
                                    <strong>Pesquisar Turma</strong>
                                </h5>
                                <div className="row">
                                    <FormInput icon={FaUserAlt} error="Informe o nome" type="text" value={searchClass} setter={setSearchClass} placeholder="Descrição Turma" />
                                </div>
                                <div className="row justify-content-end">
                                    <div className="p-3">
                                        <button type="button" onClick={handleClassSearch} className="btn btn-primary btn-lg">Buscar Turma</button>
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
                            <div><strong>Visualizar Turmas</strong></div>
                        </div>
                        <div className="col-md-2">
                            <div className="p-3">
                                <button type="button" onClick={handleGetAllClasses} className="btn btn-primary btn-lg">Exibir</button>
                            </div>
                        </div>
                    </div>
                </div>

                <Listing info={modalListing} show={modalListing.display} onHide={() => setModalListing({ data: [], header: [], title: "", display: false })} />
            </div>

        </>
    );
}

export default Class;