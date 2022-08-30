const Sequelize = require('sequelize');
const db = require('../database');

module.exports = db.define(
    'candy',
    {
        name: {
            type: Sequelize.STRING,
            allowNull: false,
            unique: true,
        },
        description: {
            type: Sequelize.TEXT,
            allowNull: false,
        },
        quantity: {
            type: Sequelize.INTEGER,
        },
        imageUrl: {
            type: Sequelize.STRING,
            defaultValue: '/favicon.ico',
        },
    },
    {
        hooks: {
            beforeUpdate: candy => {
                if (candy.quantity < 0 || candy.quantity > 10)
                    throw new Error('That amount is not allowed');
            },
        },
    }
);
