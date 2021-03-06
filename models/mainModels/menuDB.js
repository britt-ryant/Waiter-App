//Require the connection file in the configuratiosn directory

const db = require(`../../config/connection`);

module.exports = {
  getAll() {
    console.log(`Inside the getAll function on the menuDB model`);
    return db.query(`SELECT * FROM menu_items`);
  },

  findById(id) {
    console.log(`Inside the GetOne function on the menuDB model`, id);
    return db.one(
      `
        SELECT * FROM menu_items
        WHERE id=$1
      `,
      [id]
    );
  },

  makeOne(item) {
    console.log(`Inside the makeOne function on the menuDB model`, item);
    return db.one(
      `
        INSERT INTO menu_items
        (cost, course, name, description)
        VALUES ($1, $2, $3, $4)
        RETURNING *
      `,
      [item.cost, item.course, item.name, item.description, item.allergy]
    );
  },

  updateInfo(item) {
    console.log(`Inside the updateInfo function on the menuDB model`, item);
    return db.one(
      `
        UPDATE menu_items SET
          cost = $1,
          course = $2,
          name = $3,
          description = $4
        WHERE id = $5
        RETURNING id
      `,
      [item.cost, item.course, item.name, item.description, item.id]
    );
  },

  delete(id) {
    console.log(`Inside the delete function on the menuDB model`, id);
    return db.none(
      `
        DELETE FROM menu_items
        WHERE id = $1
      `,
      [id]
    );
  },
};
