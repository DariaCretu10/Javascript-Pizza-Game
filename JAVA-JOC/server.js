const express = require('express');
const app =  express();
const port = 3000;
const cors = require('cors');
app.use(cors);

let utilizatori = [
    {"nume" : "Tudose" , 
    "pre" : "Alexandra" ,
    "email" : "alexandrat12@yahoo.com" , 
    "parola" : "bluesky"
    },
    /*{
      "nume" : "Grecu" , 
      "pre" : "Marian" ,
      "email" : "marian321@gmail.com" , 
      "parola" : "fortnight2"
    }*/
  ]

app.post('/adauga-utilizator', (req, res) => {
    const userData = req.body;
    utilizatori.push(req.body);
    res.statusCode = 201;
    res.send(utilizatori);
});
app.get('/lista-utilizator', (req, res) => {
  
  res.send(utilizatori);
});
app.delete('/sterge-utilizator', (req, res) => {
  const userData = req.body;
  utilizatori=utilizatori.filter(user=>(user.nume!=userData.nume & user.pre!=userData.pre & user.parola!=userData.parola & user.email!=userData.email))
  res.send(utilizatori);
});

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))