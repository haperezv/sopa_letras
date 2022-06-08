let palabra = [];

document.querySelectorAll('.letter').forEach(function(letter){
    letter.addEventListener('click', function(){
        
        letter.style.backgroundColor = "#D7BDE2";
        let letra = letter.innerText.split('').join('');
        palabra.push(letra);
        let palabraSecreta = palabra.join('');
        searchLetter(palabraSecreta, letra);
            

    })
})

function searchLetter(palabraSecreta, letra){
    
    if(palabraSecreta === 'VARIABLE'){

        document.querySelector('.letter').style.backgroundColor = '#4CAF50';
        console.log(letra);

    }
}

