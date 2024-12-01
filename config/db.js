const Sequelize = require('sequelize');
const envConfig = require('./envs-config');

const sequelizeConfig = {
    dialect: 'postgres',
    port: envConfig.database.port,
    host: envConfig.database.host,
    logging: console.log
};



const sequelize = new Sequelize(
    envConfig.database.name,
    envConfig.database.user,
    envConfig.database.password, 
    sequelizeConfig
);

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

module.exports = { sequelize };