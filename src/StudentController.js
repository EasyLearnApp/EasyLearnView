import Axios from "axios";

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
        return Axios.get(StudentController.ALL);
    }

    /**
     * Método responsável pelo cadastro de um aluno.
     * 
     * @param {Object} params 
     */
    create(params) {
        return Axios.post(StudentController.POST, params);
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