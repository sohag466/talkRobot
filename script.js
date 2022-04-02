var msg = document.querySelector("#message");
var btn = document.querySelector("#interact");
var result = document.querySelector("#answer");

btn.addEventListener("click", function () {
  let c = msg.value.toLowerCase();
  let reply = "";
  if(c.match('hello')){
    reply = "hello there!"
  }
  else if(c.match('sing for me')){
    reply = "ami vbanglay gan gai";
  }
  else if(c.match('munni')){
    reply = "I Love you";
  }
  else if(c.match('ariful')){
    reply = "Sadia";
  }
  else if(c.match('khairul')){
    reply = "Sumaiya";
  }
  else if(c.match("tumar nam ki")){
    reply = "amar nam sohag ";
  }
  else{
    reply = "bujhi nai ভাই ";
  }

 result.innerHTML=reply;

 var kotha = new SpeechSynthesisUtterance(reply);
 window.speechSynthesis.speak(kotha);

});