const db = require("../db")

async function getAll() {
    return db.query({
      sql: `
      SELECT *
      FROM tbl_tb_comps
      `
    });
  }

async function getById(filter = {}) {
  return db.query({
    sql: `
    SELECT *
    FROM tbl_tb_comps
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
  getAll,
  getById
}