import express from 'express';
import router from './routes/index.js'
import db from './config/db.js'
import dotenv from 'dotenv';

dotenv.config({path:"variables.env"})

const app = express();

db.authenticate()
    .then(()=> console.log('base de datos conectada'))
    .catch(error => console.log(error));




//habilitar pug

app.set('view engine', 'pug');

//obtener el año actual
app.use((req, res, next)=>{
    const year = new Date();

    res.locals.actualyear = year.getFullYear();
    res.locals.nombreSitio= "Agencia de viaje";
     next();

})

//agregar bdy parse actual
app.use(express.urlencoded({ extended:true }));

//definir carpeta publica

app.use(express.static('public'));

app.use('/', router);


/** puerto y host de la app */

const host= process.env.HOST || '0.0.0.0';
const port= process.env.PORT || 3000;

app.listen(port, host,  ()=>{
    console.log(`el servidor esta funcionado `);
})