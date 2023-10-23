// Importando enrutador home
import homeRouter from './domains/home/home.router';
import userRouter from './domains/user/user.router';
import projectRouter from './domains/project/project.router';
import aboutRouter from './domains/about/about.router';

// Función que agrega rutas
const addRoutes = (app) => {
  // Agregando enrutado de Home
  app.use('/', homeRouter);
  app.use('/user', userRouter);
  app.use('/project', projectRouter);
  app.use('/about', aboutRouter);
  return app;
};

// Exportando objeto
export default { addRoutes };
