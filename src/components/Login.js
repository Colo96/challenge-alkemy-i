import axios from 'axios';
import swAlert from '@sweetalert/with-react';

function Login() {

    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === "" || password === "") {
            swAlert(
                <h1>
                    Los campos no pueden estar vacios
                </h1>
            );
            return;
        }

        if(email !== "" && !regexEmail.test(email)) {
            swAlert(
                <h1>
                    Debes escribir una direccion de correo electronico valida
                </h1>
            );
            return;
        }

        if(email !== "challenge@alkemy.org" || password !== "react") {
            swAlert(
                <h1>
                    Credenciales inválidas!
                </h1>
            );
             return;
        }

        axios.post('http://challenge-react.alkemy.org', { email, password }).then(res => {
            swAlert(<h2>Perfecto, ingresaste correctamente!</h2>);
            console.log(res.data);
        });
    }

    return (
        <>
            <h1>Formulario de contacto</h1>
            <form onSubmit={submitHandler}>
                <label>
                    <span>Correo electrónico:</span><br />
                    <input type="text" name="email" />
                </label>
                <br />
                <label>
                    <span>Contraseña:</span><br />
                    <input type="password" name="password" />
                </label>
                <br />
                <button type="submit">
                    Ingresar
                </button>
            </form>
        </>
    );
}

export default Login;