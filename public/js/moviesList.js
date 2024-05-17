window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    const logo = document.querySelector("figure.logoList")
    
    console.log("logo")


    logo.addEventListener('mouseover', ()=>{
        body.style.backgroundColor = '#7f7f7f'
        body.classList.add('fondoMoviesList');
    })
    logo.addEventListener('mouseleave', ()=>{
        body.style.backgroundColor = 'white'
       body.classList.remove('fondoMoviesList');
   })
   


    
  
  
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}