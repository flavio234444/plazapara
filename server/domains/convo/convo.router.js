// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import convoController from './convo.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/'
// GET '/home'
// GET '/index
router.get('/convocatoria', convoController.convocatoria);

router.get('/con', convoController.con);

router.get('/cons', convoController.cons);


// Exporto este tramo de ruta
export default router;