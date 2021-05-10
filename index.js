import express from 'express';
import router from './routes/index.js'
import db from './config/db.js'

const app = express();

db.authenticate()
    .then(()=> console.log('base de datos conectada'))
    .catch(error => console.log(error));


const port = process.env.PORT || 4000;

//habilitar pug

app.set('view engine', 'pug');

//obtener el año actual
app.use((req, res, next)=>{
    const year = new Date();

    res.locals.actualyear = year.getFullYear();
    res.locals.nombreSitio= "Agencia de viaje";
     next();

})

//definir carpeta publica

app.use(express.static('public'));

app.use('/', router);

app.listen(port, ()=>{
    console.log(`el servidor esta funcionaddo ${port} `);
})