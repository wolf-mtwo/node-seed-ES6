import express from 'express';
import controller from './controllers/user';
import session from '../../components/session';

module.exports = (app) => {
  let router = express.Router();
  router.get('/users', controller.all);
  router.post('/users', controller.create);
  router.route('/users/:user_id')
    .get(controller.show)
    .put(controller.update)
    .delete(controller.remove);
  router.param('user_id', controller.model);

  router.post('/login', session.login);
  app.use('/api/v1', router);

  let routerAuth = express.Router();
  routerAuth.post('/logout', session.auth, session.logout);
  app.use('/api/v1', routerAuth);
};