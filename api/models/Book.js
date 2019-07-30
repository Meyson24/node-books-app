const {sequelize, Sequelize} = require('../../config/sequelize');

const Book = sequelize.define('Book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    price: {
        type: Sequelize.NUMBER,
        allowNull: false,
    },
}, {underscored: true});

module.exports = Book;
