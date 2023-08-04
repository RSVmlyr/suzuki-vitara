
import { useNavigate } from "react-router-dom";
import messageError from "./messageApiError";

let title = 'El participante no existe'
let text = 'El participante no existe o no esta participando'
const filterName = (fullname) => {
    let result = '';
    // if(fullname === undefined) {
    //     return
    // }
    result = fullname.split(' ')[0];
    return result;
}

export default filterName;