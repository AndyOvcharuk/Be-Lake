const knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: 'db/lakes.db'
  }
})

const readAll = async (req, res) =>
  res.send(await knex.select('*').from('lake'))

exports.readAll = readAll
