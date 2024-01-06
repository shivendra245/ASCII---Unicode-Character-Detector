function detectCharacter(){

    const characterInput = document.getElementById("characterInput");
    const result = document.getElementById("result");

    const character = characterInput.value;
    if(isASCII(character)){
        result.innerText = 'Enetered character is an ASCII Character';
    }
    else{
        result.innerText = 'Enetered character is an Unicode Character';
    }
     
    result.classList.add('fadeIn');
    characterInput.value = '';

}

function isASCII(character){
    return character.charCodeAt(0)<=127;
}