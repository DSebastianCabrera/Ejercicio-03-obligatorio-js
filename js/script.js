let form = document.querySelector('form');

form.addEventListener('submit', (event) => {

    if(document.getElementById('usuario').value == '' || document.getElementById('clave').value == ''){
        alert('Los campos no pueden estar vacíos');
        event.preventDefault();
    }
    let flag = false;
    if(document.getElementById('usuario').value != '' && document.getElementById('clave').value != ''){
        for(i = 0 ; i < document.getElementById('usuario').value.length ; i++){
            if(document.getElementById('usuario').value[i] == '@'){
                flag = true;
            }
        }
        if(flag == false){
            alert('El usuario debe contener un "@"');
            event.preventDefault();
        } else {
            alert('Los datos fueron enviados');}
    }    
})