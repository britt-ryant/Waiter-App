//Require the connection file in the configuratiosn directory

const db = require(`../../config/connection`)

module.exports = {
  getAll() {
    console.log(`Inside the getAll function on the usersDB model`);
    return db.query(`SELECT * FROM users`);
  },

  findById(id) {
    console.log(`Inside the GetOne function on the usersDB model`);
    return db.one(
      `
        SELECT * FROM users
        WHERE id=$1
      `,
      [id]
    );
  },

  makeOne(user) {
    console.log(`Inside the makeOne function on the usersDB model`);
    return db.one(
      `
        INSERT INTO users
        (user_name, user_password)
        VALUES ($1, $2)
        RETURNING *
      `,
      [user.username, user.password]
    );
  },

  updateInfo(user) {
    console.log(`Inside the updateInfo function on the usersDB model`);
    return db.one(
      `
        UPDATE users SET
          user_name = $1,
          user_password = $2,
        WHERE id = $6
        RETURNING *
      `,
      [user.username, user.password]
    );
  },

  delete(id) {
    console.log(`Inside the delete function on the usersDB model`);
    return db.none(
      `
        DELETE FROM users
        WHERE id = $1
      `,
      [id]
    );
  },
};
