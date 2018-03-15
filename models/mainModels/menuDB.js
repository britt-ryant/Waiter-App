//Require the connection file in the configuratiosn directory

const db = require(`../../config/connection`);

module.exports = {
  getAll() {
    console.log(`Inside the getAll function on the menuDB model`);
  },

  getOne() {
    console.log(`Inside the GetOne function on the menuDB model`);
  },

  makeOne() {
    console.log(`Inside the makeOne function on the menuDB model`);
  },

  updateInfo() {
    console.log(`Inside the updateInfo function on the menuDB model`);
  },

  delete() {
    console.log(`Inside the delete function on the menuDB model`);
  },
};
