const db = require("../db")

async function getAllBy(filter = {}) {
  return db.query({
    sql: `
    SELECT *
    FROM tbl_tb_bets
    WHERE 1 = 1
    ${filter.leagueId ? "AND league_id = :leagueId" : ""}
    ${filter.userId ? "AND user_id = :userId" : ""}
    ${filter.gameId ? "AND game_id = :gameId" : ""}
    `,
    values: {
      ...filter
    }
  });
}

module.exports = {
    getAllBy,
}