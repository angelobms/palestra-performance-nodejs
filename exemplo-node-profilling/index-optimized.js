'use strict'
const crypto = require('crypto')
function hash (password, cb) {
  const salt = crypto.randomBytes(128).toString('base64')
  crypto.pbkdf2(password, salt, 100000, 512, 'sha512', cb)
}

// Imagine that loop below is real requests to some route
for (let i = 0; i < 15; i++) {
  hash('random_password', (error, hash) => console.log(i))
}
