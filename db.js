const {Sequelize , DataTypes, Model} = require('sequelize')


const sequelize = new Sequelize('database', 'username', 'password', {
    dialect: 'sqlite', 
    storage: './Restaurant.sqlite', 
    logging: false
})

module.exports = {Sequelize, DataTypes, Model}