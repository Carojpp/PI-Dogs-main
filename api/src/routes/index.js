const { Router } = require('express');
const dogsRouter = require('../routes/dogsRouter.js'); 

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use('/', dogsRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
