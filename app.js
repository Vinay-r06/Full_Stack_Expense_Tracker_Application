const express= require('express');                                  // express , nodemon installed in this
const app= express();         

const cors= require('cors');                                        // it will allows a server to indicate any origins (domain, scheme, or post) other than its own from which a browser should permit load resources
app.use(cors());

const bodyParser = require('body-parser');                          // it gives 4 express middleware for parasing JSON, Text, URL-encoded, raw data sets over an HTTP request body... 
app.use(bodyParser.json({ extended: false}));


const expRoutes = require('./routes/expRoutes');                // routing to bookRoutes..
app.use(expRoutes);


const path = require('path');
app.use(express.static(path.join(__dirname, "public")));              // with this users should able to access "public" path...// it will take any request that tries to find some file..


const errorController = require('./controllers/error');              // error--> adding a  404 error page
app.use(errorController.get404);



//using sequelize database
const sequelize = require('./util/database');
sequelize.sync()
        .then((result)=>{
            app.listen(3000);
        })
        .catch((err)=>{
            console.log(err);
        });




// wat are pure functions?
//ex: Math.sqrt()--->Math-->class and sqrt()---> function or static function..............
// static means constant
// ex--Math.sqrt(16)=4              // 4x4=16
// the output always be the same for the input or the function will not change..its standard function for certain functionality
// there is no side effects..nothing will change the function inside...
//ex 2:
// Math.pow(2,2)=4..

// this is like normal any function...any function like basically which returns a constant output for a given in input that is static function..



// what is non-static fumction?
// for non static functions, basically a functions for which like

// ex: 
// Math.funsql(4)= 2 0r 3
// if i pass an argument 4, sometimes it can give me 2..sometimes it can give me 3 as well...this is a non-static function.
// for any argument it can return me different values..

//non-static function its kind of gets a little bit "dependent upon the object"..

// static function directly called by class...

// but non-static function cannot directly never called by class...
















