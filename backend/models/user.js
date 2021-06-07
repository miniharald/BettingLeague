const db = require("../db")

async function getAll() {
  return db.query({
    sql: `
    SELECT *
    FROM tbl_tb_users
    `
  });
}

async function getBy(filter = {}) {
  return db.query({
    sql: `
    SELECT *
    FROM tbl_tb_users
    WHERE 1 = 1
    ${filter.userId ? "AND id = :userId" : ""}
    ${filter.username ? "AND username = :username" : ""}
    ${filter.mail ? "AND mail = :mail" : ""}
    ${filter.reset_token ? "AND reset_token = :reset_token" : ""}
    ${filter.reset_token_expiration ? "AND reset_token_expiration = :reset_token_expiration" : ""}
    `,
    values: {
      ...filter
    }
  }).then(
    rows => rows[0]
  );
}

async function insert(user) {
  return db.query({
    sql: `
    INSERT INTO tbl_tb_users (
      username,
      first_name,
      last_name,
      mail,
      password
    ) VALUES (
      :username,
      :firstName,
      :lastName,
      :mail,
      :password
    )
    `,
    values: { ...user }
  });
}

async function deleteUser(user) {
  return db.query({
    sql: `
    DELETE FROM tbl_tb_users
    WHERE id = :id
    `, values: { ...user }
  })
}

module.exports = {
  getBy,
  getAll,
  insert,
  deleteUser
}