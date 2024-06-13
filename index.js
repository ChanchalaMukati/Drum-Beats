

var numberOfButtons= document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtons;i++){

 document.querySelectorAll(".drum")[i].addEventListener("click", function () {
   var buttonInnerHTML= this.innerHTML;

    soundBeat(buttonInnerHTML); 
    buttonAnimation(buttonInnerHTML);
});
}

document.addEventListener("keydown", (e)=> {
    keyPressed= e.key;
    soundBeat(keyPressed); 
    buttonAnimation(keyPressed); 
});

function soundBeat(buttonPressed){
    switch (buttonPressed) {
        case "w":
            var audioW = new Audio("sounds/tom-1.mp3");
            audioW.play();        
            break;
    
        case "a":
            var audioA = new Audio("sounds/tom-2.mp3");
            audioA.play();        
            break;
            
        case "s":
            var audioS = new Audio("sounds/tom-3.mp3");
            audioS.play();        
            break;
    
        case "d":
            var audioD = new Audio("sounds/tom-4.mp3");
            audioD.play();        
            break;
    
        case "j":
            var audioJ = new Audio("sounds/snare.mp3");
            audioJ.play();        
            break;
    
        case "k":
            var audioK = new Audio("sounds/crash.mp3");
            audioK.play();        
            break;
    
        case "l":
            var audioL = new Audio("sounds/kick-bass.mp3");
            audioL.play();        
            break;
    
       
        default: 
            console.log(buttonInnerHTML);
            break;
       }
}

function buttonAnimation(currentKey){
   var clickedButton= document.querySelector("."+ currentKey);
   clickedButton.classList.add("pressed");
   setTimeout(function() {
    clickedButton.classList.remove("pressed");
   },100);
};

