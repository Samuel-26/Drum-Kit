var numberofdrums  = document.querySelectorAll(".drum").length



// click sound
for(var i=0; i<numberofdrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML)

        buttonAnimation(buttonInnerHTML)
   
});
}


// keypress sound
document.addEventListener("keypress", function(event){
  makeSound(event.key)

  buttonAnimation(event.key)
});


function makeSound(key){
    
    switch (key) {
        case "w" :
        var w = new Audio('./sounds/tom-1.mp3');
        w.play();
        break;

        case "a" :
        var a = new Audio('./sounds/tom-2.mp3');
        a.play();
        break;


        case "s" :
        var s = new Audio('./sounds/tom-3.mp3');
        s.play();
        break;
        case "d" :
        var d = new Audio('./sounds/tom-4.mp3');
        d.play();
        break;
        case "j" :
        var j = new Audio('./sounds/kick-bass.mp3');
        j.play();
        break;
        case "k" :
        var k = new Audio('./sounds/snare.mp3');
        k.play();

        break;
        case "l" :
        var l = new Audio('./sounds/crash.mp3');
        l.play();
        break;

        default:
            console.log(buttonInnerHTML);
        break;

    }
}


function buttonAnimation (currentKey){

    var activeButton = document.querySelector("." + currentKey)

    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed")
    },100);


}