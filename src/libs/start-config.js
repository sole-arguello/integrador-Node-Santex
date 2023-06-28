const Users = require('../models/user')

const createData = async () =>{
    try{
       
        const userFound = await Users.findAll({
            where: {
              email: "admin@gmail.com",
            },
          });
      
          if (userFound.length > 0) return;
      
          await Users.create({
            id: 9,
            firstName: "admin" ,
            lastName: "lala",
            email: "admin@gmail.com",
            password: "admin",
          });

         console.log("Datos de Usuario insertados correctamente en la base de datos.");
    }catch(err){
        console.error("Error al insertar los datos de roles:", err);
    }
}

module.exports = createData