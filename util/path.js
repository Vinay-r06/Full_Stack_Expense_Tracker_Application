const path=require("path");              // the path module provides a way of working with directories and file paths... 

module.exports=path.dirname(process.mainModule.filename);