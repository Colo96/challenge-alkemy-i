function Login() {

    const submitHandler = e => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === "" || password === "") {
            console.log("Los campos no pueden estar vacios");
            return;
        }

        if(email !== "" && !regexEmail.test(email)) {
            console.log("Debes escribir una direccion de correo electronico valida");
            return;
        }

        if(email !== "challenge@alkemy.org" || password !== "react") {
             console.log("Credenciales inválidas!");
             return;
        }

        console.log("Ok estamos listos para enviar la información")
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