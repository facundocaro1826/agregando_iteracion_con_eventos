window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener("mouseover", ()=>{
        titulo.style.color = "#d7d7d7"
    })

    titulo.addEventListener("mouseleave", ()=>{
        titulo.style.color = "black"
    })

     
    const palabraSecreta = 'secreto';
    let estadoSecreto = 0;
    const inputTitulo = document.querySelector("#titulo")
  
    
    inputTitulo.addEventListener("keyup", (event)=>{
        const letraPresionada = event.key.toLowerCase();

        switch(estadoSecreto){
            case 0:
                if(letraPresionada === 's'){
                    estadoSecreto = 1;
                }else{
                    estadoSecreto = 0;
                }break;
            case 1:
                if(letraPresionada === 'e'){
                    estadoSecreto = 2;
                }else{
                    estadoSecreto = 0
                }break;
            case 2:
                if(letraPresionada === 'c'){
                    estadoSecreto = 3;
                }else{
                    estadoSecreto = 0;
                }break;

            case 3:
                if(letraPresionada === 'r'){
                    estadoSecreto = 4;
                }else{
                    estadoSecreto = 0;
                }break; 

            case 4:
                if(letraPresionada === 'e'){
                    estadoSecreto = 5;
                }else{
                    estadoSecreto = 0;
                }break;

            case 5:
                if(letraPresionada === 't'){
                    estadoSecreto = 6;
                }else{
                    estadoSecreto = 0;
                }break;

            case 6:
                if(letraPresionada === 'o'){
                    alert('¡SECRETO MAGICO!')
                    estadoSecreto = 0;
                }else{
                    estadoSecreto = 0;
                }break;                      
                
        }
    })


}