document.addEventListener("DOMContentLoaded", () =>{
    const formulario = document.getElementById("formulario-login");
    const mensajeError = document.getElementById("mensaje-error");

    const usuarioCorrecto = "Angel";
    const contraseñaCorrecta = "1234";

    formulario.addEventListener("submit", (event) => {
        event.preventDefault();

        const usuario = document.getElementById("user").value;
        const contraseña = document.getElementById("password").value;

        if ( usuario === usuarioCorrecto && contraseña === contraseñaCorrecta){
            window.location.href = "html-principal";  ///si es correcto redirige
        }else {
            mensajeError.style.display = "block";  //mostrar eror
        }
    })
})