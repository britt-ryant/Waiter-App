//Require express and initiate the Router
const menuRouter = require(`express`).Router();

//Require the controllers that the router will point to
const menuController = require(`../../controllers/mainControllers/menuController`);

//Call all methods in the router that controller will utilize
menuRouter
  .route(`/`)
  .get(menuController.index)
  .post(menuController.create);

menuRouter
  .route(`/edit/:id`)
  .get(menuController.show)
  .put(menuController.update);

menuRouter
  .route(`/:id`)
  .delete(menuController.destroy);

//Export the router
module.exports = menuRouter;
