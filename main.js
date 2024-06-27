const sentences = [
    "We need more of nimstarr, his part was just too good", 
    "michael jackson's 'leave me alone' vibes all arounddddd",
    "Discover the newest hand-picked palettes of Color Hunt",
    "In color theory, a color scheme is a combination of 2 or more colors used in aesthetic or practical design."
];


const displayInterface = document.getElementById("text-display"); 

function generateHTML(sentence){
    const letterArray = [...sentence];
    for(const letter of letterArray){
        const placeHolder = document.createElement("span");
        placeHolder.innerHTML = letter; 
        displayInterface.appendChild(placeHolder); 
    }
}

function randomNumber(arr){
    const max = arr.length; 
    const num = Math.floor(Math.random() * max); 

    return num; 
}

const num = randomNumber(sentences); 

generateHTML(sentences[`${num}`]); 

const userInput = document.getElementById("user-text"); 

userInput.addEventListener("input", () => {
    const userArray = userInput.value.split(""); 
    const textReference = displayInterface.querySelectorAll("span"); 
    let validText = true; 
    textReference.forEach((letter, index) =>{
        const character = userArray[index]; 
        if(character == null){
            letter.classList.remove("correct");
            letter.classList.remove("incorrect");
            validText = false; 
        }else if(character === letter.innerText){
            letter.classList.add("correct");
            letter.classList.remove("incorrect"); 
        }else{
            letter.classList.remove("correct");
            letter.classList.add("incorrect");
            validText = false; 
        }
    });

    if(validText){
        userInput.disabled = true; 
    }
})