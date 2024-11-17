let menuVisible = false; //variable que mantiene el estado del menu

// funcion que muestra o oculta el menu

function mostrarOcultar(){
    if(menuVisible){
        document.getElementById("bar").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("bar").classList ="responsive";
        menuVisible = true;
    }
}

// funcion cuando el usuario quiera ocultar el menu cuando el selecciona una opcion

function seleccionar(){
    document.getElementById("bar").classList = "";
    menuVisible = false;
}
