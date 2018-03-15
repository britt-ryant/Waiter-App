//Require the model
const userDB = require(`../../models/userModels/userDB`);

module.exports = {
  index(req, res, next) {
    console.log(`linked`);
    userDB
      .getAll()
      .then(users => {
        console.log('FOUND USERS---->', results);
        res.json({
          message: 'ok',
          data: users,
        });

        //Dont forget to call next()
      })
      .catch(err => {
        next(err);
      });
  },

  getOne(req, res, next) {
    console.log(`INSIDE GETONE--->`, req.params.id);
    userDB
    .getOne(req.params.id)
    .then(user => {
      console.log('FOUND USER WORKED---->', user);
      res.json({
        message: 'Got user',
        data: user,
      });
    }).catch(err => {
      console.log('FOUND USER FAILED---->', err);
    });
  },

  create(req, res, next) {
    userDB
      .makeOne()
      .then(result => {
        res.json({
          message: 'ok',
          data: result,
        });

        //Dont forget to call next()
      })
      .catch(err => {
        next(err);
      });
  },

  update(req, res, next) {
    userDB
      .updateInfo()
      .then(result => {
        res.json({
          message: 'ok',
          data: result,
        });

        //Dont forget to call next()
      })
      .catch(err => {
        next(err);
      });
  },

  destroy(req, res, next) {
    userDB
      .delete()
      .then(() => {
        //Dont forget to call next()
      })
      .catch(err => {
        next(err);
      });
  },
};
