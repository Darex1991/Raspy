'use strict'
const fs = require('fs');
const path = require('path');
const config = require('../config');
const bcryptjs = require('bcryptjs');

const databasePath =  (process.env.NODE_ENV != 'production')
                      ? config.development.databasePath
                      : config.production.databasePath;

let filePath = path.join(path.dirname(__dirname), databasePath);

if (!fs.existsSync(filePath)) {
  console.log("Setting up database at path " + filePath + "...");

  const FileSync = require('lowdb/adapters/FileSync');
  const database = require('lowdb')(new FileSync(filePath));

  bcryptjs.hash('secret', 10, function(err, hash) {
    database.defaults({ users: [{ id: 1, username: 'admin', password: hash, type: 'admin' }, { id: 2, username: 'janusz', password: hash, type: 'user' }] }).write();
  });
}
