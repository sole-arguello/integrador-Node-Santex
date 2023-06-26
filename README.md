# Integrador Node.js Express Sequelize Sqlite3

## ✔️ Inicio el proyecto Node.js con `npm init`

   
   ➖ Instalo dependencias `npm i --save-dev nodemon` `npm i --save lodash` 

   ➖ Configuro en el `package.json` el script para correr la aplicacion con `npm run start:dev`
   
   ➖ Inatalo Express para el manejo de rutas `npm i --save express`

   ➖ Instalo Sequelize como ORM y sqlite3 para persistencia de datos `npm install sequelize sequelize-cli sqlite3`


## ✔️ Creo la Estructura con las capas

### La carpeta SRC que contiene el proyecto

    ➖ Config donde configuro la db (base de datos) 
    
    ➖ app.js es donde hago correr el servidor y que escuche el puerto, para hacer las consultas de las rutas de Book, Library, User
    
    ➖ Routes es donde hago los llamados a las diferentes rutas de consulta y para el CRUD 
          En insomnia hago las consutas:
              Post creo un registro
              Get consulto el/los registro
              Put edito un registro
              Delete elimino un registro
          
    ➖ Controllers es donde controlo el manejo de las respuestas del sistema (req, res)
    
    ➖ Services defino la logica de nogocio para el funcionamiento del sistema
    
    ➖ Providers defino las acciones, son la abstraccion, es la llamda a un servicio
       de persistencia (sqlite) que es nuestra base de datos, crea, modifica, interactua, 
       es el intermediario entre el modelo y el servicio (db), es el que sabe que existe 
       
    ➖ Models es donde defino los modelo Book, Library, User, defino como se van a representar
      los datos en la db.

      

    
