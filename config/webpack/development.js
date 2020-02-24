process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.API_ENDPOINT = 'http://localhost:3000'

const environment = require('./environment')

console.log(environment.toWebpackConfig())
module.exports = environment.toWebpackConfig()
