/*const { start } = require("live-server");*/

var regx_chr = /^([a-zA-Z0-9_-]+)$/;
var regx_mail = /^([a-zA-Z0-9]+[a-zA-Z0-9._%-]*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4})$/;
const adaugaBtn = document.querySelector("#butform");
let vec = [];

function checkForm() {
    
    var fre = false;
    const nume = document.querySelector("#nume");
      const email = document.querySelector("#email");
      const parola = document.querySelector("#parola");

    if(nume.value.length<3 || nume.value.length>18 || nume.value.search(regx_chr)==-1) {
        alert('Numele trebuie sa contina intre 3 si 18 caractere \nNumere, Litere, "-" si "_"');
        nume.select();    // selecteaza casuta pt. Nume
      }
      else if(parola.value.length<7 || parola.value.length>18 || parola.value.search(regx_chr)==-1) {
        alert('Parola trebuie sa contina intre 7 si 18 caractere \nNumere, Litere, "-" si "_"');
        parola.select();    // selecteaza casuta pt. Parola
      }
      else if(email.value.search(regx_mail)==-1) {
        alert('Adaugati o adresa de e-mail corecta');
        email.select();    // selecteaza casuta pt. E-mail
      }
      else fre = true;
    
      return fre;
    }
   
    adaugaBtn.addEventListener("click", async function () {
     
      
      const nume = document.querySelector("#nume").value;
      const pre = document.querySelector("#pre").value;
      const email = document.querySelector("#email").value;
      const parola = document.querySelector("#parola").value;
      alert("Seintampla");
      const newUtilizator = {
          nume,
          pre,
          email,
          parola
      }
  
      const newUtilizatoriList =  postData('http://localhost:3000/adauga-utilizator', newUtilizator)
  
      console.log("Data", newUtilizatoriList)
      vec.push(newUtilizator);
      localStorage.setItem('items', JSON.stringify(vec));
      console.log(vec);

  
  })
  let formular = document.getElementById("form");
  adaugaBtn.addEventListener("click", checkForm);
  async function postData(url = '', data = {}) {
    
    const response = await fetch(url, {
        method: 'POST', 
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return response.json();
}
//task-ul 13, nivel1 - Culoarea titlului se schimba parcurgand 3 culori la infinit
AnimatieCuloare = function(event) {
  let start = new Date();
  if(adaugaBtn){
      adaugaBtn.addEventListener('click', function(){
          let end = new Date() - start;
          alert("Au trecut "+end/1000+" secunde de la intrarea în pagină până la completarea formularului");
      });
  }
  
    setInterval(() => {
          setTimeout(() => {
            var elem = document.getElementById("comanda1");
            var cul = window.getComputedStyle(elem, null).getPropertyValue("color");
            if(cul === "rgb(0, 0, 0)")
              document.getElementById("comanda1").style.color = "green";
          }, 1000);
          setTimeout(() => {
            var elem = document.getElementById("comanda1");
            var cul = window.getComputedStyle(elem, null).getPropertyValue("color");
            if(cul === "rgb(0, 128, 0)")
              document.getElementById("comanda1").style.color = "red";
          }, 2000);
          setTimeout(() => {
            var elem = document.getElementById("comanda1");
            var cul = window.getComputedStyle(elem, null).getPropertyValue("color");
            if(cul === "rgb(255, 0, 0)")
              document.getElementById("comanda1").style.color = "black";
          }, 3000);
      
    }, 3000);
}

window.addEventListener("load", AnimatieCuloare);
  



