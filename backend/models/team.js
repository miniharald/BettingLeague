const db = require("../db")

async function getById(filter = {}) {
  return db.query({
    sql: `
    SELECT *
    FROM tbl_tb_teams
    WHERE id = :teamId
    `,
    values: {
      ...filter
    }
  }).then(
    rows => rows[0]
  );
}

module.exports = {
  getById
}