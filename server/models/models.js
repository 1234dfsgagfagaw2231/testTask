const sequelize = require('../db');
const {DataTypes} = require('sequelize');

const Data = sequelize.define('dataset', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: DataTypes.STRING,
    coordinate: DataTypes.ARRAY(DataTypes.INTEGER),
    labels:  DataTypes.ARRAY(DataTypes.STRING),
});

module.exports = Data;