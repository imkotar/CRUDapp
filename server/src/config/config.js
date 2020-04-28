const path = require('path');
require('dotenv/config')
module.exports = {
    port : process.env.PORT || 7000,
    dbConnectionUrl : process.env.DB_CONNECTION
}