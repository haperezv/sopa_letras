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
            palabras(palabraSecreta);
        }
        
        if(palabraSecreta === 'OBJETO'){
            searchLetter(palabra);
            palabras(palabraSecreta);
        }

        if(palabraSecreta === 'ENCAPSULAMIENTO'){
            searchLetter(palabra);
            palabras(palabraSecreta);
        }

        if(palabraSecreta === 'VISIBILIDAD'){
            searchLetter(palabra);
            palabras(palabraSecreta);
        }

        if(palabraSecreta === 'ABSTRACCION'){
            searchLetter(palabra);
            palabras(palabraSecreta);
        }

        if(palabraSecreta === 'INSTANCIA'){
            searchLetter(palabra);
            palabras(palabraSecreta);
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

function palabras(palabraSecreta){
    const response = document.querySelector("#ABSTRACCION");
    const response1 = document.querySelector("#INSTANCIA");
    const response2 = document.querySelector("#VARIABLES");
    const response3 = document.querySelector("#ENCAPSULAMIENTO");
    const response4 = document.querySelector("#VISIBILIDAD");
    const response5 = document.querySelector("#OBJETO");

    if(palabraSecreta === 'ABSTRACCION'){
        response.innerHTML = response.innerText.replace("________________", palabraSecreta);
    }
    if(palabraSecreta === 'INSTANCIA'){
        response1.innerHTML = response1.innerText.replace("_______________", palabraSecreta);
    }
    if(palabraSecreta === 'VARIABLES'){
        response2.innerHTML = response2.innerText.replace("_____________", palabraSecreta);
    }
    if(palabraSecreta === 'ENCAPSULAMIENTO'){
        response3.innerHTML = response3.innerText.replace("______________________", palabraSecreta);
    }
    if(palabraSecreta === 'VISIBILIDAD'){
        response4.innerHTML = response4.innerText.replace("_______________", palabraSecreta);
    }
    if(palabraSecreta === 'OBJETO'){
        response5.innerHTML = response5.innerText.replace("___________", palabraSecreta);
    }

}
