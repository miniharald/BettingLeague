const db = require("../db")

async function getAllByCompetition(filter = {}) {
  return db.query({
    sql: `
    SELECT *
    FROM tbl_tb_comp_games
    WHERE comp_id = :compId
    `,
    values: {
      ...filter
    }
  });
}

module.exports = {
    getAllByCompetition,
}