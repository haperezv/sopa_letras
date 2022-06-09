let palabra = [];

document.querySelectorAll('.letter').forEach(function(letter){
    letter.addEventListener('click', function(){

        letter.classList.toggle('selected');
        letter.style.backgroundColor = "#D7BDE2";
        let letra = letter.innerText.split('');
        palabra.push(letra);
        let palabraSecreta = palabra.join('');


        if(palabraSecreta === 'VARIABLES' ){
            searchLetter(palabra);
        }
        
        if(palabraSecreta === 'OBJETO'){
            searchLetter(palabra);
        }

        if(palabraSecreta === 'ENCAPSULAMIENTO'){
            searchLetter(palabra);
        }

        if(palabraSecreta === 'VISIBILIDAD'){
            searchLetter(palabra);
        }

        if(palabraSecreta === 'ABSTRACCION'){
            searchLetter(palabra);
        }

        if(palabraSecreta === 'INSTANCIA'){
            searchLetter(palabra);
        }

    })
})

function searchLetter(){
    let letras = document.querySelectorAll('.selected');
    letras.forEach(function(letter){
           letter.style.backgroundColor = "#C9E2BD";
           letter.classList.remove('selected');
   })

   palabra = [];
}

