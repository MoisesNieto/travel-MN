import express, { Router } from 'express';


const router = express.Router();

router.get('/', (req, res)=>{
    res.send('inicio');

});


export default router;