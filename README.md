# Integrador Node.js Express Sequelize Sqlite3

## ✔️ Inicio el proyecto Node.js con `npm init`



➖ Instalo dependencias `npm i --save-dev nodemon` `npm i --save lodash` 

➖ Configuro en el `package.json` el script para correr la aplicacion con `npm run start:dev`
   
➖ Inatalo Express para el manejo de rutas `npm i --save express`

➖ Instalo Sequelize como ORM y sqlite3 para persistencia de datos `npm install sequelize sequelize-cli sqlite3`




## ✔️ Creo la Estructura con las capas


### La carpeta SRC que contiene el proyecto

    ➖ Config donde configuro la db (base de datos) 
    
    ➖ app.js es donde hago correr el servidor y que escuche el puerto, para hacer las consultas de las rutas 
       de Book, Library, User usando del middleware 'use'
    
    ➖ Routes es donde hago los llamados a las diferentes rutas de consulta y para el CRUD 
          En insomnia hago las consutas:
              Post creo un registro (create)
              Get consulto el/los registro (get)
              Put edito un registro (update)
              Delete elimino un registro (delete)
          
    ➖ Controllers es donde controlo el manejo de las respuestas del sistema (req, res)
    
    ➖ Services defino la logica de nogocio para el funcionamiento del sistema
    
    ➖ Providers defino las acciones, son la abstraccion, es la llamda a un servicio
       de persistencia (sqlite) que es nuestra base de datos, crea, modifica, interactua, 
       es el intermediario entre el modelo y el servicio (db), es el que sabe que existe 
       
    ➖ Models es donde defino los modelo Book, Library, User, defino como se van a representar
      los datos en la db.

    ➖ Middleware

    ➖

    ➖

    ➖




## ✔️ Creo la Relacion entre Library y Book
 - una a muchos `hasMany`, una libreria puede tener muchos libros 
 - pertenece a `belongsTo` el libro pertenece a la libreria
 - Dentro de la estructura de Library creo las capas para que al momento de crear la libreria,
   me cree un libro nuevo que le pertenece a la libreria.
   ```
      GET http://localhost:8080/library/1

         (siendo id la PK de Library)
         {
           "id": 1,
           "name": "El Librote",
           "location": "Av. La Plata 2098",
           "phone": "3514563000",
           "createdAt": "2023-06-26T18:40:15.726Z",
           "updatedAt": "2023-06-26T18:40:15.726Z",
           "deletedAt": null
         }

      POST http://localhost:8080/library/1/book
   
         (siendo id la PK de Book y library la FK de Library)
         {
           "id": 4,
           "isbn": 978030727665,
           "title": "El Gran Gatsby",
           "author": "F. Scott Fitzgerald",
           "year": "1925",
           "library": "1",
           "updatedAt": "2023-06-26T20:02:39.830Z",
           "createdAt": "2023-06-26T20:02:39.830Z"
         }
   
   ```

      

    
