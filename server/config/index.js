const Sequelize = require('sequelize');
const sequelize = new Sequelize('FeedbackEvaluation_NCUT','sa','sa@2016', {
  host: '192.168.1.242',
  dialect:'mssql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  /*timezone:'+08:00'*/
});
sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch(err => {
      console.error('Unable to connect to the database:', err);
    });
module.exports=sequelize;

