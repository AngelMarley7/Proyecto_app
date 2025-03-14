document.addEventListener("DOMContentLoaded", () =>{
    const botonLogin = document.createElement("button");
    botonLogin.id = "boton-login";
    botonLogin.textContent = "Ir a Login";

    document.body.appendChild(botonLogin);

    botonLogin.addEventListener("click", () =>{
        console.log("Redirigiendo a login.html......");
        window.location.href =  "login.html";
    })
})