const {sequelize, DataTypes, Model} = require('./db')

const { Menus } = require('./Menus')
const { Restaurant } = require('./Restaurant')
Menus.belongsTo(Restaurant)
Restaurant.hasMany(Menus)


module.exports = {Menus, Restaurant, sequelize}

