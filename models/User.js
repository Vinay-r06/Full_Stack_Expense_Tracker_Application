const Sequelize = require('sequelize');    //need sequelize constructor or class...

const sequelize = require('../util/database');     //import our own sequelize object which holds the connections on from the util folder and there the database file...

const Expense = sequelize.define('expenses', {            // now i will create the model and name the "user"...and store in user constant...// and then as an object u define the "structure of the user"..

    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey:true
    },
    expenses:Sequelize.STRING,

    description:{ 
        type:Sequelize.STRING,
        allowNull: false,
    },
    category:{
        type: Sequelize.STRING,
        allowNull: false,

    }
});

module.exports=Expense; 