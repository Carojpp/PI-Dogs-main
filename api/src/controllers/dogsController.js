/*
Conectaremos el api y a la base de datos
*/
const express = require('express');
const axios = require('axios');
const URL_API = 'https://thedogapi.com/'; // Esta es la ruta de la API que necesitamos para obtener las razas de los perros


/* Esta función asincrónica getDogsDb consulta la base de datos para obtener todos los registros de Dogs, incluyendo los nombres de sus tipos asociados (Type) incluido a solo el atributo name.

const getDogsDb = async ()=> {
    const response = await Dogs.findAll({
        include:{
            attributes: ['name'],
            model: Type,
            through: {
                attributes: [],
                },
        }
    })
        return response
}
*/

//Como acceso un controlador desde la ruta? , debo importarlo en routes
const getDogsController = () => {
    return [] // retorna el arreglo vacio
}

module.exports = {
    getDogsController
};