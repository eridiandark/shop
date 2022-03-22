const dbConfig = require('../Configs/db.json');
const {Pool} = require("pg");
const pool = new Pool(dbConfig);
require('require-sql');

const createTables = require('../sql/createTables.sql');

/*
console.log(testsql);
pool.query(testsql, (err, res) => {
    console.log({r: res.rows})
})
*/