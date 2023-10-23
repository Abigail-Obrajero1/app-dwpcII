// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import projectController from './project.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/project
// GET '/project/project
// GET '/project/projects'
// GET /project/dashboard
router.get(
  ['/', '/projects', '/projects', '/dashboard'],
  projectController.showDashboard,
);

// GET /project/add-form
// GET /project/add
router.get(['/add-form', '/add'], projectController.addForm);

router.get('/add', projectController.addForm);

// Exporto este tramo de ruta
export default router;
