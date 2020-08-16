import Axios from "axios";

class ClassController {
    /** @var {String} */
    static ALL = "http://swvschools.swvsoftware.com.br/api/turmas";

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
}

export default ClassController;