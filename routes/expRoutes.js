const express= require('express');                    // using Express

const router = express.Router();

const expController = require('../controllers/expControllers');        // import  controllers file expControllers.js

router.get('/', expController.getExpense)                             // create route for Expense home page

router.post('/add', expController.addData);                          // create route for add data..

router.get('/get-data', expController.getData);                      // create route for get data from database

router.delete('/delete-data/:id', expController.deleteData);           // create route for delete data from database

router.delete('/edit-data/:id', expController.editData);               // create route for edit data from database


module.exports = router;