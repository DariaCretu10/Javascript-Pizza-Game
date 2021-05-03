let vec = JSON.parse(localStorage.getItem('items')) || [];
if (vec.length!=0)
    {const mesaj=document.querySelector("#mesaj").innerHTML = "Hello" + vec[0].pre;
    document.querySelector("#sign").style.display = "none";
    }
else
    {
    document.querySelector("#play").style.display = "none";
     document.querySelector("#delete").style.display = "none";
    
    }

sterge = async function (event) {
        
        deleteUtilizator(url='http://localhost:3000/sterge-utilizator', vec[0])
        document.querySelector("#play").style.display = "none";
        document.querySelector("#delete").style.display = "none";
        document.querySelector("#sign").style.display = "block";
        localStorage.clear("items");
        vec = [];


      }

document.querySelector("#delete").addEventListener("click", sterge);

async function deleteUtilizator(url = '', data={}) {
  
        const response = await fetch(url, {
            method: 'DELETE', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
      }
      
 /*Animatie = function(event) 
      { */
        
         const text = document.querySelector(".mesaj1");
         const strtxt = text.textContent;
         const splittxt = strtxt.split("");
         console.log(splittxt);
         text.textContent = "";
         for (let i = 0; i < splittxt.length; i++)
         {
           text.innerHTML += "<span>" + splittxt[i] + "</span>";

         }
        let litera = 0;
        let timp = setInterval(AparitieText, 50);
        
        function AparitieText()
        { 
          const span = text.querySelectorAll('span')[litera];
          span.classList.add('tranzitie');
          const span1 = text.querySelectorAll('span')[splittxt.length-litera-1];
          span1.classList.add('tranzitie');
        
          litera++;
          if (litera === splittxt.length/2+1)
          {
            complet();
            return;
          }
        }
        function complet()
        {
          clearInterval(timp);
          timp = null;
        }

        

      

 /*window.addEventListener("load", Animatie);  */
      
