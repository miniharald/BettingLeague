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

async function getByCreatorId(filter = {}) {
  return db.query({
    sql: `
    SELECT *
    FROM tbl_tb_leagues
    WHERE creator_id = :creatorId
    `,
    values: {
      ...filter
    }
  });
}

async function insert(league) {
  return db.query({
    sql: `
    INSERT INTO tbl_tb_leagues (
      comp_id,
      name,
      creatorId
    ) VALUES (
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

async function addUserToLeague(user) {
  return db.query({
    sql: `
    INSERT INTO tbl_tb_league_users (
      league_id,
      user_id,
      points
    ) VALUES (
      :leagueId,
      :userId,
      0
    )
    `,
    values: {
      ...user
    }
  });
}

module.exports = {
  getAll,
  insert,
  update,
  getById,
  getByCreatorId,
  addUserToLeague
}