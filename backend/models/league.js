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

async function insert(league) {
  return db.query({
    sql: `
    INSERT INTO tbl_tb_leagues (
      id,
      comp_id,
      name,
      creatorId
    ) VALUES (
      :leagueId,
      :compId,
      :leagueName,
      :creatorId
    )
    `,
    values: { ...league }
  });
}

async function update(league) {
  return db.query({
    sql: `
    UPDATE tbl_tb_leagues SET
    name = :leagueName
    WHERE id = :id`,
    values: {
      ...league
    }
  });
}

module.exports = {
  getAll,
  insert,
  update,
  getById
}