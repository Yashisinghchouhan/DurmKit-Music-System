var n = document.querySelectorAll(".drum").length;

for(var i=0; i<n;i++)
{
  document.querySelectorAll(".drum")[i].addEventListener(
  "click", function(){
    var instrument = this.innerHTML;
    makeSound(instrument);
    buttonAnimation(instrument);
  });
}

document.addEventListener("keypress", function(event){

  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(instrument){
  switch(instrument){
      case "w":
        var audio = new Audio('sounds/tom-1.mp3');
        audio.play();
      break;

      case "a":
         var audio2 = new Audio('sounds/tom-2.mp3');
         audio2.play();
      break;

      case "s":
          var audio3 = new Audio('sounds/tom-3.mp3');
          audio3.play();
       break;

      case "d":
         var audio4 = new Audio('sounds/tom-4.mp3');
         audio4.play();
      break;

      case "j":
          var audio5 = new Audio('sounds/kick-bass.mp3');
          audio5.play();
      break;

      case "k":
           var audio6 = new Audio('sounds/crash.mp3');
           audio6.play();
      break;

      case "l":
            var audio7 = new Audio('sounds/snare.mp3');
            audio7.play();
      break;

      default:
            console.log(instrument);
}
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("."+currentKey);
  var originalColor = activeButton.style.color;
  activeButton.classList.add("pressed");
  activeButton.style.color = "yellow";
  setTimeout( function(){
    activeButton.style.color = originalColor;
    activeButton.classList.remove("pressed");

  }
  ,300
  );
}
