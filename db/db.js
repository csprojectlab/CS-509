const Sequelize = require('sequelize')
const sequelize = new Sequelize('studentdatabase', 'test', 'test', {
    host: 'localhost',
    dialect: 'mysql'
})
sequelize.authenticate().then(() => console.log("Connection successfull"))
                        .catch(error => console.log(error))
const Student = sequelize.define('student', {
    rollNo: {
        type: Sequelize.INTEGER
    },
    name: {
        type: Sequelize.STRING
    },
    subject: {
        type: Sequelize.STRING
    },
    marks: {
        type: Sequelize.INTEGER
    }
})       
sequelize.sync({force: false}).then(() => console.log("Database synced."))

module.exports = {
    Student
}