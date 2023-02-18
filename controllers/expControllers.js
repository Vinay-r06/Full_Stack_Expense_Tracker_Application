const path = require('path');                  // the path module provides a way of working with directories and file paths

const rootDir = require('../util/path');

exports.getExpense=(req,res, next)=> {              // // create controllers for Expense home page
    console.log('Displayed data');
    res.sendFile(path.join(rootDir, "views", 'expense.html'));

};

// import models...

const Expense= require('../models/User');

exports.addData= async (req,res,next)=>{                     // create controllers for save data-- to add
 try{
    if(!req.body.category){
        throw new Error('Please say category');
    }
    const expenses= req.body.expenses;
    const description=req.body.description;
    const category = req.body.category;
    const data = await Expense.create({
        expenses:expenses,
        description:description,
        category: category,
    });

    res.status(201).json({newExpenseDetail: data});           // newExpense --> send data to frontend
 } 
 catch(err){
    console.log('error in addData');
    res.status(500).json({
        error:err
    });
 }

}

exports.getData= async (req,res,next)=>{                  // create controller for get data from database..
    try{
        const expense= await Expense.findAll();
        res.status(200).json({allExpense:expense});
    } catch (err){
        console.log('error in getdata');
    res.status(500).json({
        error:err
    });

    }
}

exports.deleteData=async (req,res,next)=>{                             // create controller for delete data from database
    try{
        if(!req.params.id){
            console.log('id is missing');
            return res.status(400).json({err:"Id is missing"});
        }
        const uId=req.params.id;
        await Expense.destroy({where: {id:uId} });                    // destroy method for deleting data
        res.sendStatus(200);
    } catch (err){
        console.log('error in deletedata');
        res.status(500).json(err);                 // sending object from backend(json)
    }

}



// not working edit functionality

exports.editData=async (req,res,next)=>{                             // create controller for edit data from database
    try{
        if(!req.params.id){
            console.log('id is missing');
            return res.status(400).json({err:"Id is missing"});
        }
        const uId=req.params.id;
        await Expense.update({where: {id:uId} });                    // destroy method for deleting data
        res.sendStatus(200);
    } catch (err){
        console.log('error in editdata');
        res.status(500).json(err);                 // sending object from backend(json)
    }

}