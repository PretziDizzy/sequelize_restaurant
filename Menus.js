const {sequelize, DataTypes, Model} = require('./db')

class Menus extends Model {}

Menus.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    inSpanish: DataTypes.BOOLEAN,
}, 
{
    sequelize, 
    timestamps: false
})

module.exports = {Menus}