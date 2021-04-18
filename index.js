import express from 'express';
import router from './routes/index.js'

const app = express();


const port = process.env.PORT || 4000;

//haboilitar pug

app.set('view engine', 'pug');

app.use('/', router);

app.listen(port, ()=>{
    console.log(`el servidor esta funcionaddo ${port} `);
})