const User = require('../models/user')

const createData = async () =>{
    try{
       
        const userFound = await User.findAll({
            where: {
              email: "admin@gmail.com",
            },
          });
      
          if (userFound.length > 0) return;
      
          await User.create({
            id: 0,
            user: "admin" ,
            email: "admin@gmail.com",
            password: "admin",
          });

         console.log("Data of the Administrator User correctly inserted in the database.");
    }catch(err){
        console.error("Error when inserting the User data:", err);
    }
}

module.exports = createData