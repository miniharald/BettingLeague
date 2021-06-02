const db = require("../db")

async function getBy(filter = {}) {
  return db.query({
    sql: `
    SELECT *
    FROM users
    WHERE 1 = 1
    ${filter.id ? "AND id = :id" : ""}
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

module.exports = {
  getBy,
}