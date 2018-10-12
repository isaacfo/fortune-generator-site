// console.log("I'm here")

// Make code run when I click button 
const triggerElement = document.querySelector('[data-trigger]');
const outputElement = document.querySelector('[data-output]');

const fortunes = [ "You laugh now, wait till you get home.", 
"The early bird gets the worm, but the second mouse gets the cheese.", 
"Be on the alert to recognize your prime at whatever time of your life it may occur.", 
"When you squeeze an orange, orange juice comes out - because that's what's inside."];

let index = 0;
triggerElement.addEventListener('click',function() {
    console.log('Hello addEventListener!');
    const newFortune = fortunes[index];
    outputElement.textContent = newFortune; index++;
    if (index > fortunes.length - 1) {
        index = 0;
    }
});

const clickerElement = document.querySelector('[data-clicker]');

const outputElement2 = document.querySelector('[data-output2]');

const outputImage = document.querySelector('[data-megaman]');
 
const moreFortunes = [ {text:"Megaman will appear standing heroically", pic:"images/stand2.png"}, {text:"Megaman will run to save you", pic:"images/move.png"}, {text:"Megaman will jump on the enemy", pic:"images/jump.png" }];
 //["You are not illterate.", 
// "Half of being smart is knowing what you are dumb about.", 
// "It is a good day to have a good day.", 
// "What you looking at?",
// "You kinda ugly" ];

clickerElement.addEventListener('click', function() {
    console.log('printed moreFortunes!');
    const addmoreFortune = moreFortunes[Math.floor(Math.random()*moreFortunes.length)];
    outputElement2.textContent = addmoreFortune["text"]; 
    // pulls image out when called 
    outputImage.src = addmoreFortune["pic"]
    
    index++;
    if (index > moreFortunes.length - 1) {
        index = 0;
    }

    // function randomFortune(){ 
    //     i = 0;
    //     outputElement2.textContent = moreFortunes[Math.floor(Math.random()*moreFortunes.length)];
    // }

});

// function hello() {
//     console.log('Hello addEventListener!');
// }
// addEventListener accepts 2 arguments
//- a string that identifies the kind of event to listen for
// - a function that says what to do when that event happens



// Write some text to the page on button click





// Pull text from an array of text
// to write to page

function createFortuneButton() {
    const theButton = document.createElement('button');
    theButton.textContent = 'Click here for a fortune';
    theButton.setAttribute('data-trigger', '');

    return theButton;
}

function createButtonContainer() {
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('buttonCotainer');
    
    buttonContainer.appendChild(createFortunebutton());



    return buttonContainer;
}
