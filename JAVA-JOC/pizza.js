let ardei = document.querySelectorAll(".ingrediente")[0];
let branza = document.querySelectorAll(".ingrediente")[1];
let salam = document.querySelectorAll(".ingrediente")[2];
let masline = document.querySelectorAll(".ingrediente")[3];
let rosie = document.querySelectorAll(".ingrediente")[4];
let ketchup = document.querySelectorAll(".ingrediente")[5];
let varza = document.querySelectorAll(".ingrediente")[6];
let imag = document.createElement('img');
let sec = 59;
let min = 1;
let time;
var nr = 0;
/*creez nou div care sa aiba width 100% height 100% si sa aiba position fixed/ relative , display none*/
var divv = document.createElement("div");
            divv.style.width = "100%";
            divv.style.height = "100%";
            divv.style.position = "fixed";
            divv.style.opacity = "0.7";
            divv.style.left="0";
            divv.style.top="0";
            divv.style.zIndex="1000";
            divv.style.backgroundColor = "black";
            divv.style.display = "none";
            document.body.appendChild(divv);
            console.log("creat");
document.querySelectorAll("button")[0].style.opacity = "0";
document.querySelectorAll("button")[1].style.opacity = "0";
PuneIngrediente = (event) => {
    console.log("event este",event);
    if(event.target !== document.body) {
        if(event.target.alt=="ardei")
            {imag.src = ardei.src}
        if(event.target.alt=="branza")
            {imag.src = branza.src}
        if(event.target.alt=="salam")
            {imag.src = salam.src}
        if(event.target.alt=="masline")
            {imag.src = masline.src}
        if(event.target.alt=="rosie")
            {imag.src = rosie.src}
        if(event.target.alt=="ketchup")
            {imag.src = ketchup.src}
        if(event.target.alt=="varza")
            {imag.src = varza.src}
       

    }
    let div = document.createElement("div");
    let cln = imag.cloneNode(true);
    div.style.left = event.pageX+ "px";
    div.style.top = event.pageY + "px";
    div.style.width = "75px" ;
    div.style.height = "75px";
    div.style.position = "absolute" ;
    cln.style.width = "75px" ;
    cln.style.height = "75px";
    cln.classList.add("clona");
    div.append(cln);
    div.style.zIndex="999";
    console.log(event.target);
    let pizza = document.querySelector(".imagi");
    if (event.target == pizza)
        document.body.appendChild(div);
}
function timer(){

     time = setInterval(function(){
        document.getElementById('cron').innerHTML='0' + min + ':' + sec;
        sec--;
        if (sec < 0)
           {if(min < 1)
           { divv.style.display = "block";
            let div = document.createElement("div");
            div.style.width = "300px";
            div.style.height = "200px";
            div.style.backgroundColor = "red";
            div.innerHTML = "GAME OVER";
            div.style.textAlign = "center";
            div.style.zIndex = "10000";
            div.style.fontSize = "70px";
            div.style.padding = "5px";
            div.style.position = "relative";
            div.style.marginLeft = "500px";
            div.style.marginTop = "10px";
            document.body.appendChild(div);
            clearInterval(time);
           }
            else { min = min-1; sec = 59}
        }
    }, 1000);
}


/*La apasarea tastei enter se pune jocul pe pauza*/
MeniuPauza = function (event) { 
    
  if(event.key=='Enter')
    if(cont == 1)
   
        {  
            
          divv.style.display = "block";
          clearInterval(time);
          document.querySelectorAll("button")[0].style.opacity = "1";
          document.querySelectorAll("button")[1].style.opacity = "1";
          cont = 2;
            }
    else { 
        divv.style.display = "none";
        document.querySelectorAll("button")[0].style.opacity = "0";
        document.querySelectorAll("button")[1].style.opacity = "0";
        /*document.querySelector("#ecran").style.display = "none";
        document.querySelector("#salvare").style.display = "none";*/
        time = setInterval(function(){
        document.getElementById('cron').innerHTML='0' + min + ':' + sec;
        sec--;
        if (sec < 0)
           {if(min < 1)
           {
            clearInterval(time);
           }
            else { min = min-1; sec = 59}
        }
    }, 1000);
    cont = 1;


    }
        
    
}
let cont = 1; 

/*seteaza = async function (event){
    console.log("fundal");
   document.querySelector("#ecran").style.display = "block";
   document.querySelector("#ecran").style.zIndex ="10000";
   document.querySelector("#ecran").style.opacity = "1";
   document.querySelector("#salvare").style.display = "block";
   document.querySelector("#salvare").style.zIndex ="10000";
   document.querySelector("#salvare").style.opacity = "1";
   
}*/

/*UndoLant = function (event) { 
    if(event.key=='D')

}*/
/*salvare = async function (event)
{
    let culoare = document.getElementById("ecran").value;
    switch (culoare){
        case 'albastru' :
            {
             
                document.querySelector("body").style.backgroundColor = "blue" ;
            }
            break;
         case 'alb':
             {
                 
                 document.querySelector("body").style.backgroundColor = "white";
             }
             break;
        case 'negru':
            {
                    
                document.querySelector("body").style.backgroundColor = "black";
            }
            break;
         
    }
    document.querySelector("#ecran").style.display = "none";
    document.querySelector("#salvare").style.display = "none";
    
}*/

/*document.querySelector("#setari").addEventListener("click", seteaza);

document.querySelector("#salvare").addEventListener("click", salvare);*/

window.addEventListener("keydown", MeniuPauza); 

window.addEventListener("click",PuneIngrediente);





let menu = null;
        document.addEventListener('DOMContentLoaded', function(){
            //ne asiguram ca meniul de click dreapta este ascuns
            menu = document.querySelector('.menu');
            menu.classList.add('off');
            
            //adaugam evenimentul de right click la body
            let box = document.querySelector('body');
            box.addEventListener('contextmenu', showmenu);
            
            //adaugam un eveniment pentru ascunderea meniului la parasire
            menu.addEventListener('mouseleave', hidemenu);
            
            //adaugarea evenimentelor pentru itemii din meniu
            addMenuListeners();
        });
        
        function addMenuListeners(){
            document.getElementById('black').addEventListener('click', setColour);
            document.getElementById('white').addEventListener('click', setColour);
            
        }
        
        function setColour(ev){
            hidemenu();
            let clr = ev.target.id;
            document.querySelector('body').style.backgroundColor = clr;
        }
        
        function showmenu(ev){
            //oprim right clickul din default
            ev.preventDefault(); 
            //aparitia meniului
            console.log( ev.clientX, ev.clientY );
            menu.style.top = `${ev.clientY - 20}px`;
            menu.style.left = `${ev.clientX - 20}px`;
            menu.classList.remove('off');
        }
        
        function hidemenu(ev){
            menu.classList.add('off');
            menu.style.top = '-200%';
            menu.style.left = '-200%';
        }
        

