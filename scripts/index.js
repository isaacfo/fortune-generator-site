console.log("I'm here")

// Make code run when I click button 
const triggerElement = document.querySelector('[data-trigger]');
const outputElement = document.querySelector('[data-output]');

const fortunes = [ "You laugh now, wait till you get home.", 
"The early bird gets the worm, but the second mouse gets the cheese.", 
"Be on the alert to recognize your prime at whatever time of your life it may occur.", 
"When you squeeze an orange, orange juice comes out - because that's what's inside."]

// function hello() {
//     console.log('Hello addEventListener!');
// }
// addEventListener accepts 2 arguments
//- a string that identifies the kind of event to listen for
// - a function that says what to do when that event happens
triggerElement.addEventListener('click',function() {
    console.log('Hello addEventListener!');
    outputElement.textContent = fortunes.pop();
});


// Write some text to the page on button click





// Pull text from an array of text
// to write to pag