//Require the connection file in the configuratiosn directory

const db = require(`../../config/connection`);

module.exports = {
  getAll() {
    console.log(`Inside the getAll function on the menuDB model`);
    return db.query(`SELECT * FROM menu_items`);
  },

  findById(id) {
    console.log(`Inside the GetOne function on the menuDB model`);
    return db.one(
      `
        SELECT * FROM menu_items
        WHERE id=$1
      `,
      [id]
    )
  },

  makeOne(item) {
    console.log(`Inside the makeOne function on the menuDB model`);
    return db.one(
      `
        INSERT INTO menu_items
        (cost, course, name, description, allergy)
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *
      `,
      [item.cost, item.course, item.name, item.description, item.allergy]
    );
  },

  updateInfo(item) {
    console.log(`Inside the updateInfo function on the menuDB model`);
    return db.one(
      `
        UPDATE menu_items SET
          cost = $1,
          course = $2,
          name = $3,
          description = $4,
          allergy = $5
        WHERE id = $6
        RETURNING *
      `,
      [item.cost, item.course, item.name, item.description, item.allergy]
    );
  },

  delete(id) {
    console.log(`Inside the delete function on the menuDB model`);
    return db.none(
      `
        DELETE FROM menu_items
        WHERE id = $1
      `,
      [id]
    );
  },
};
