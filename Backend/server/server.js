require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
var sqlite3 = require('sqlite3').verbose()


var db = new sqlite3.Database('prueba1');

db.serialize(function(){ 
  db.each("SELECT id FROM users", function(err, row) {
      console.log("User id : "+row.id);
  });
 
});
db.close();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

/////////


//========================================================
/*
app.post('/usuario',function(req,res){
    let body = req.body;//asi leo lo que hay en el vody de la peticion post, debe usarse body parser de npm

    if(body.nombre === undefined){ //asi respondo si las peticiones son buenas o malas
        res.status(400).json({
            ok:false,
            mensaje:'EL nombre es necesario'
        });
    }else{
        res.json({
            persona:body
        });
    }
    

});*/
app.post('/postevent',function(req,res){
  res.json('Aca va a tener que enviarme la informacion del evento para crearlo');
});
app.put('/editevent',function(req,res){
  res.json('Aca va a tener que enviarme la informacion del evento para actualizarlo');
});
app.get('/getevent/:id',function(req,res){
  let id = req.params.id;
  res.json({
      idEvent:id
  });
});


app.listen(process.env.PORT,()=>{
    console.log('escuchando al puerto',3000);
});