import {testimonial} from '../models/testimoniales.js';


const guardarTestimoniales= async (req, res)=>{


    console.log(req.body);

    const {nombre, correo, mensaje} = req.body;

    const errores = [];

    if(nombre.trim() === ''){
        errores.push({mensaje: ' El nombre esta vacio'});
    }
    if(correo.trim() === ''){
        errores.push({mensaje: ' El correo esta vacio'});
    }
    if(mensaje.trim() === ''){
        errores.push({mensaje: ' El mensaje esta vacio'});
    }

   
    if(errores.length > 0){


        const testimoniales = await testimonial.findAll();

       res.render('testimoniales', {
           pagina: 'Testimoniales',
           errores,
           nombre,
           correo,
           mensaje,
           testimoniales
       })
    }else {

        //almacenar en la bse de datos
        try {
            await testimonial.create({
                nombre,
                correo,
                mensaje
            })
            res.redirect('/testimoniales');

        } catch(error){
            console.log(error);
        }
        
    }

}


export {
    guardarTestimoniales
} 