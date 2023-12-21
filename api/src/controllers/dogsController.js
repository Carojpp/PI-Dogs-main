/*
Conectaremos el api y a la base de datos
*/
const express = require('express');
const axios = require('axios');
const URL_API = 'https://thedogapi.com/'; // Esta es la ruta de la API que necesitamos para obtener las razas de los perros

//Como acceso un controlador desde la ruta? , debo importarlo en routes
const getDogsController = async () => {
    try {
        const response = await axios.get('https://api.thedogapi.com/v1/breeds', {
            headers: {
                "Content-Type": "application/json",
                'x-api-key': 'live_9Bhss5Zu4ygXfxx8XRyTuj7pvAgcCskGWDnKPqxuV6hFYVqdInDgZqvHXhym33Y7'
            }
        });
        return response.data;
        //res.json(response.data);
    } catch (error) {
        return error
        //res.status(500).send(error.toString());
    }
}

module.exports = {
    getDogsController
};