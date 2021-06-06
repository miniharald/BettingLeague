const db = require("../db")

async function getAll() {
    return db.query({
      sql: `
      SELECT *
      FROM tbl_tb_leagues
      `
    });
  }

async function getById(filter = {}) {
  return db.query({
    sql: `
    SELECT *
    FROM tbl_tb_leagues
    WHERE id = :leagueId
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