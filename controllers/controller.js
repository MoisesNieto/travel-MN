import { viajes } from '../models/viajes.js';
import { testimonial } from '../models/testimoniales.js';




const paginaInicio = async (req, res)=>{

    //consular 3 viajes para

    const promiseDB = [];

    promiseDB.push(viajes.findAll({limit: 3}) );
    promiseDB.push(testimonial.findAll({limit:3}) );


    try {
        const result = await Promise.all(promiseDB);

        res.render('home', {
            pagina: 'Inicio',
            clase: 'home',
            travel: result[0],
            testimoniales: result[1]
        });
    } catch (error) {
        console.log(error);
    }

    

}
const paginaNosotros = (req,res)=>{
    res.render('nosotros',{
        pagina: 'Nosotros'
    });
}
const paginaViajes = async (req, res)=>{
    //consular base datos
    const travel = await viajes.findAll();
    

    res.render('viajes',{
        pagina: 'Pasión Por Viajar',
        travel,
    });
}
const paginaTestimoniales = async(req,res)=>{

    try{

        const testimoniales = await testimonial.findAll();
        res.render('testimoniales',{
            pagina: 'testimoniales',
            testimoniales
        });
    } catch(error){
        console.log(error);
    }
    
}

const paginaDetalleViajes = async (req, res)=>{

  const { slug } = req.params;
  console.log(slug);
  
  
  try {
    const viaje = await viajes.findOne({ where: {  slug } }); 

    

    res.render('viaje', {
        pagina: 'Información Viajes',
        viaje
    })

  } catch(error){
    console.log(error);
  }
  
  
  
}
export{
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViajes
} 