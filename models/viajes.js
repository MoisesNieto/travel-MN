import Sequelize, { STRING } from 'sequelize';
import db from '../config/db.js';

export const viajes = db.define('viajes',{
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida:{
        type: Sequelize.DATE
    },
    fecha_vuelta:{
        type: Sequelize.STRING
    },
    imagen:{
        type: Sequelize.STRING
    },
    descripcion:{
        type: Sequelize.STRING
    },
    slug:{
        type: Sequelize.STRING
    }
})
