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

async function getById(filter = {}) {
  return db.query({
    sql: `
    SELECT *
    FROM tbl_tb_bets
    WHERE id = :betId
    `,
    values: {
      ...filter
    }
  }).then(
    rows => rows[0]
  );
}

async function insert(bet) {
  return db.query({
    sql: `
    INSERT INTO tbl_tb_bets (
      league_id,
      user_id,
      game_id,
      home_result,
      away_result
    ) VALUES (
      :leagueId,
      :userId,
      :gameId,
      :homeResult,
      :awayResult
    )
    `,
    values: { ...bet }
  });
}

async function update(bet) {
  return db.query({
    sql: `
    UPDATE tbl_tb_bets SET
    home_result = :homeResult,
    away_result = :awayResult
    WHERE id = :id`,
    values: {
      ...bet
    }
  });
}

module.exports = {
  getAllBy,
  getById,
  insert,
  update
}