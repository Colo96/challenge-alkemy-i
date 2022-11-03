import { useNavigate } from 'react-router-dom'; 
import { useEffect } from 'react';

function Listado() {

    const history = useNavigate();

    /*const token = localStorage.getItem('token');*/

    useEffect(() => {
        const token = localStorage.getItem('token');
        if(token === null){
           history('/');
        }
    });

    return(
        <h2>
           Soy el componente listado
        </h2>
    )
}

export default Listado;