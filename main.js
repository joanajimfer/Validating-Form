'use strict';

function validateForm() {
    const userName = document.querySelector("[name=name]");
    const userLastname = document.querySelector("[name=lastname]");
    const userEmail = document.querySelector("[name=email]");
    const userCity = document.querySelector("[name=city]");
    const userPostCode = document.querySelector("[name=postCode]");
    const userAlias = document.querySelector("[name=user-name]");
    const userPassword = document.querySelector("[name=password]");
    const userConfirmPassword = document.querySelector("[name=confirm-password]");
    const userAcceptAgreement = document.querySelector("[name=accept-agreement]");
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const postCodeRegex = /^(?:0[1-9]|[1-4]\d|5[0-2])\d{3}$/;
    const userAliasRegex = /^[a-zA-Z0-9]{4,15}$/;
    const userPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

    //Return to original background after every submit
    userName.style.backgroundColor="white";
    userLastname.style.backgroundColor="white";
    userEmail.style.backgroundColor="white";
    userCity.style.backgroundColor="white";
    userPostCode.style.backgroundColor="white";
    userAlias.style.backgroundColor="white";
    userPassword.style.backgroundColor="white";
    userConfirmPassword.style.backgroundColor="white";


    //Function to validate user name input
    if((userName.value) === "" || (userName.value.length) >= 15) {
        userName.style.backgroundColor="red";
        alert('El campo Nombre es obligatorio y debe contener menos de 15 caracteres');
        return false;
    }

    //Function to validate user lastname input
    else if((userLastname.value) === "" || (userLastname.value.length) >= 30) {
        userLastname.style.backgroundColor="red";
        alert('El campo Apellidos es obligatorio y debe contener menos de 30 caracteres');
        return false;
    }

    //Function to validate user email input
    else if((userEmail.value) === "" || (!emailRegex.test(userEmail.value))){
        userEmail.style.backgroundColor = "red";
        alert('El campo Email es obligatorio y debe contener un email válido con el formato nombre@example.es');
        return false
    }

    //Function to validate user city
    else if((userCity.value) === "" || (userCity.value.length) >= 15){
        userCity.style.backgroundColor = "red";
        alert('El campo Ciudad es obligatorio y debe contener menos de 15 caracteres');
        return false
    }

    //Function to validate user post code
    else if((userPostCode.value) === "" || (!postCodeRegex.test(userPostCode.value))){
        userPostCode.style.backgroundColor = "red";
        alert('El campo Código Postal es obligatorio y debe contener un código postal válido');
        return false
    }

    //Function to validate user alias name
    else if((userAlias.value) === "" || (!userAliasRegex.test(userAlias.value))){
        userAlias.style.backgroundColor = "red";
        alert('El campo Nombre de usuario es obligatorio y no puede contener caracteres especiales');
        return false
    }

    //Function to validate user password
    else if((userPassword.value) === "" || (!userPasswordRegex.test(userPassword.value))){
        userPassword.style.backgroundColor = "red";
        alert('El campo Clave es obligatorio y debe contener al menos 8 caracteres, una mayúscula, número, letra y caracter especial');
        return false
    }

    //Function to validate confirm password
    else if((userConfirmPassword.value) === "" || ((userConfirmPassword.value) !== (userPassword.value))){
        userConfirmPassword.style.backgroundColor = "red";
        alert('El campo Vuelve a escribir la clave es obligatorio y debe ser igual al campo Clave');
        return false
    }

    //Function to accept agreement by user checked
    else if(!userAcceptAgreement.checked) {
        alert('Debe aceptar el acuerdo de servicios, las cookies y la declaración de privacidad para continuar');
        return false
    }
    else {
        alert('Gracias por registrarte');
    }
}






