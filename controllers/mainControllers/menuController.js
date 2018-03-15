//Require the model
const menuDB = require(`../../models/mainModels/menuDB`);

module.exports = {
  index(req, res, next) {
    menuDB
      .getAll()
      .then(menuItems => {
        res.json({
          message: 'got all menu items',
          data: menuItems,
        });
        console.log('GETTING ALL ITEMS WORKED--->', menuItems);

        //Dont forget to call next()
      })
      .catch(err => {
        console.log('GETTING ALL ITEMS FAILED--->', err);
        next(err);
      });
  },

  show(req, res, next) {
    menuDB
      .findById(req.params.id)
      .then(menuItem => {
        res.json({
          message: 'got one menu item',
          data: menuItem,
        });
        console.log('GETTING ONE ITEM WORKED--->', menuItem);
      })
      .catch(err => {
        console.log('GETTING ONE ITEM FAILED--->', err);
        next(err);
      });
  },

  create(req, res, next) {
    menuDB
      .makeOne({
        name: req.body.name,
        description: req.body.description,
        course: req.body.course,
        cost: req.body.cost,
      })
      .then(menuItem => {
        res.json({
          message: 'created one menu item',
          data: menuItem,
        });
        console.log('CREATING ITEM WORKED--->', menuItem);

        //Dont forget to call next()
      })
      .catch(err => {
        console.log('CREATING ITEM FAILED--->', err);
        next(err);
      });
  },

  update(req, res, next) {
    menuDB
      .updateInfo({
        name: req.body.name,
        description: req.body.description,
        course: req.body.course,
        cost: req.body.cost,
        id: req.params.id,
      })
      .then(menuItem => {
        res.json({
          message: 'updated one menu item',
          data: menuItem,
        });
        console.log('UPDATING ITEM WORKED--->', menuItem);

        //Dont forget to call next()
      })
      .catch(err => {
        console.log('UPDATING ITEM FAILED---->', err);
        next(err);
      });
  },

  destroy(req, res, next) {
    menuDB
      .delete(req.params.id)
      .then(() => {
        console.log('DESTROYING ITEM WORKED');

        //Dont forget to call next()
      })
      .catch(err => {
        console.log('DESTROYING ITEM FAILED---->', err);
        next(err);
      });
  },
};
