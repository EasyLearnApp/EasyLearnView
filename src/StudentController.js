import Axios from "axios";
import api from './service/api';

class StudentController {
    /** @var {String} */
    static ALL = "http://swvschools.swvsoftware.com.br/api/alunos";

    /** @var {String} */
    static POST = "http://swvschools.swvsoftware.com.br/api/setaluno";

    /**
     * Método responsável pela obtenção de uma listagem geral.
     * 
     * @param {Void}
     * 
     * @return {Array}
     */
    index() {
        return api.get('alunos');
    }

    /**
     * Método responsável pelo cadastro de um aluno.
     * 
     * @param {Object} params 
     */
    create(params) {
        return api.post('setaluno', params);
    }

    /**
     * Realiza uma busca a partir de determinados critérios.
     * 
     * @param {Array} params
     */
    display(params) {
        if (params.length === 0) {
            return (new StudentController()).index();
        }

        const Url = `${StudentController.ALL}?${params.join('&')}`;

        return Axios.get(Url);
    }
}

export default StudentController;