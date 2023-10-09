import express from 'express';

const { Router } = express;

const router = Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Express with babel and HRM' });
});

router.get('/author', (req, res) => {
  // Creating a View-Model
  const author = {
    name: 'Eddy RUiz',
    lastname: 'Ruiz',
    twitter: '@ruiz',
    job: 'ITGAM',
  };
  // Sending the view-model to be rendered by a View
  res.render('author', author);
});

export default router;
