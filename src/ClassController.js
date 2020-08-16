import Axios from "axios";

class ClassController {
    /** @var {String} */
    static ALL = "http://swvschools.swvsoftware.com.br/api/turmas";

    /** @var {String} */
    static POST = "http://swvschools.swvsoftware.com.br/api/setturma";

    /**
     * Método responsável pela obtenção de uma listagem geral.
     * 
     * @param {Void}
     * 
     * @return {Array}
     */
    index() {
        return Axios.get(ClassController.ALL);
    }

    /**
     * Método responsável pelo cadastro de um aluno.
     * 
     * @param {Object} params 
     */
    create(params) {
        return Axios.post(ClassController.POST, params);
    }

    /**
     * Realiza uma busca a partir de determinados critérios.
     * 
     * @param {Array} params
     */
    display(params) {
        if (params.length === 0) {
            return (new ClassController()).index();
        }

        const Url = `${ClassController.ALL}?${params.join('&')}`;

        return Axios.get(Url);
    }
}

export default ClassController;