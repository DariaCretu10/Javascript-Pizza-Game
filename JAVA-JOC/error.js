AnimatieCuvant = function(event) 
{ /*var h1 = [];
  var h2 = document.querySelector("#mesaj").inerHTML;
  console.log(h2);*/
  /*h1=h2.split(" ");
  while( h1.length )
    console.log(h1.shift());*/
    
      
    
  setTimeout(function(){ document.querySelector("#mesaj1").innerHTML = document.querySelector("#mesaj1").innerHTML + " Ups -  " }, 1000/3);
  setTimeout(function(){ document.querySelector("#mesaj1").innerHTML = document.querySelector("#mesaj1").innerHTML + " Something " }, 1000/3*2);
  setTimeout(function(){ document.querySelector("#mesaj1").innerHTML = document.querySelector("#mesaj1").innerHTML + " must " }, 1000);
  setTimeout(function(){ document.querySelector("#mesaj1").innerHTML = document.querySelector("#mesaj1").innerHTML + " have" }, 1000/3*4);
  setTimeout(function(){ document.querySelector("#mesaj1").innerHTML = document.querySelector("#mesaj1").innerHTML + " gone" }, 1000/3*5);
  setTimeout(function(){ document.querySelector("#mesaj1").innerHTML = document.querySelector("#mesaj1").innerHTML + " wrong!" }, 2000);
  setTimeout(function(){ document.querySelector("#mesaj2").innerHTML = document.querySelector("#mesaj2").innerHTML + " Try" }, 1000/3*7);
  setTimeout(function(){ document.querySelector("#mesaj2").innerHTML = document.querySelector("#mesaj2").innerHTML + " going " }, 1000/3*8);
  setTimeout(function(){ document.querySelector("#mesaj2").innerHTML = document.querySelector("#mesaj2").innerHTML + " there!" }, 3000);
  setTimeout(function(){ document.querySelector("#mesaj3").style.display = "block"; }, 1000/3*10);
  

}

window.addEventListener("load", AnimatieCuvant); 