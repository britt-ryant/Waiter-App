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

        //Dont forget to call next()
      })
      .catch(err => {
        next(err);
      });
  },

  show(req, res, next) {
    menu_db
    .getOne()
    .then(menuItem => {
      res.json({
        message: 'got one menu item',
        data: menuItem,
      })
    })
  }

  create(req, res, next) {
    menuDB
      .makeOne()
      .then(menuItem => {
        res.json({
          message: 'created one menu item',
          data: menuItem,
        });

        //Dont forget to call next()
      })
      .catch(err => {
        next(err);
      });
  },

  update(req, res, next) {
    menuDB
      .updateInfo()
      .then(menuItem => {
        res.json({
          message: 'updated one menu item',
          data: menuItem
        });

        //Dont forget to call next()
      })
      .catch(err => {
        next(err);
      });
  },

  destroy(req, res, next) {
    menuDB
      .delete()
      .then(() => {
        //Dont forget to call next()
      })
      .catch(err => {
        next(err);
      });
  },
};
