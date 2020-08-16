import React from 'react';

import Header from '../Header/Header.jsx';
import Folder from '../Folder/Folder.jsx';

import FormInput from '../FormInput/FormInput.jsx';

import { FaUserAlt, FaRegCalendarAlt, FaRegCircle } from "react-icons/fa";

import { TiGroup } from 'react-icons/ti';

const PATH = ['Home', 'Library', 'Data'];

function Student() {
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

                            <FormInput icon={FaUserAlt} error="Informe o nome" placeholder="Nome Completo do Aluno" />

                            <FormInput icon={FaRegCalendarAlt} error="" placeholder="Data de Nascimento do Aluno" />

                            <FormInput icon={FaRegCircle} error="" />

                            <FormInput icon={TiGroup} error="" />

                            <div className="d-flex flex-row-reverse">
                                <div className="p-3">
                                    <button type="button" className="btn btn-primary btn-lg">Cadastrar Aluno</button>
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
                            <a href="#" className="btn btn-primary">Go somewhere</a>

                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Student;