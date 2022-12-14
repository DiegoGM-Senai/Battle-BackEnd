
const dbConfig = require('../config/db.config')

const Sequelize = require('sequelize')
const sequelize = new Sequelize({
       database:  dbConfig.DB,
       username: dbConfig.USER,
        password: dbConfig.PASSWORD,
        host:dbConfig.HOST,
        port: 7841,
        dialect: dbConfig.DIALECT,
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

const db = {}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.users = require('../models/user.model.js')(db.sequelize, db.Sequelize)
db.time = require('../models/time.model.js')(db.sequelize, db.Sequelize)
db.torneio = require('../models/torneio.model.js')(db.sequelize, db.Sequelize)
db.jogo = require('../models/jogo.model')(db.sequelize, db.Sequelize)

db.users.sync()
db.torneio.sync()
db.time.sync()
db.jogo.sync()



module.exports = db

 
