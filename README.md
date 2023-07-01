# Trabajo Integrador XAcademy - Santex 

### Herramientas: Node.js - Express - Sequelize - Sqlite3 - Passport - JWT

## ✔️ Inicio el proyecto Node.js con `npm init`



➖ Instalo dependencias `npm i --save-dev nodemon` `npm i --save lodash` 

➖ Configuro en el `package.json` con el script para correr la aplicacion `npm run start:dev`
   
➖ Inatalo Express para el manejo de rutas `npm i --save express`

➖ Instalo Sequelize como ORM y sqlite3 para persistencia de datos `npm install sequelize sequelize-cli sqlite3`




## ✔️ Creo la Estructura con las capas 


### Comienzo con la carpeta SRC que contiene las capas del proyecto

    ➖ "Config" 
    Contiene la configuracion de la db (base de datos), la creacion del 'usuario 
    admin' al momento de iniciar la base de datos, que es el autorizado a Crear, Actualizar y
    eliminar registros de la db. Mientras que otros usuarios solo pueden consultar.

    ➖ "Middleware" 
    Es donde defino el logeo de usuarios y su auntenticcion para luego 
    proteger las rutas. De tal manera que solo el usuario 'admin' recibe un token de autorizacion que al estar logeado como `user: admin y pass: admin` lo autoriza a poder hacer el CRUD de registros de la db, mientras que los demas usuarios reciben un token que los autoriza a logearse como `user: email@gmail.com y pass: contraseña de 6 digitos` y  solo les permite consultar
    
    ➖ "app.js" es donde hago correr el servidor y que escuche el puerto, para hacer las 
    consultas de las rutas de Book, Library, User y login de usuarios usando del middleware 'use'
    propio de la libreria
    
    ➖ "Routes" es donde hago los llamados a las diferentes rutas de consulta y para el CRUD 
          
          En insomnia hago las consutas:

              Post creo un registro (create)

               - En el caso del Book, se puede crear asignado o no a una libreria.
               - En el caso de Library, al crearse no debe poseer libros, pero una vez creada
               puede agregar libros.

              Get consulto el/los registro (get)

               - En el caso de Book debe poder consultar por un libro en particular, por medio
               de su id y por todos los libros creados 
               - En el caso de Library debe poder consultar por una libreria en particular, por 
               medio de su id y los libros que hay en ella, como asi tambien poder consultar por 
               todas sus librerias y libros en cada una de ellas.

              Put edito un registro (update)
              Delete elimino un registro (delete)
          
    ➖ "Controllers" es donde controlo el manejo de las respuestas del sistema (req, res)
    
    ➖ "Services" defino la logica de nogocio para el funcionamiento del sistema  
    
    ➖ "Providers" defino las accionesdel CRUD, son la abstraccion, es la llamda a un servicio (sqlite) donde persisten los datos (db), crea, modifica, interactua, donde el intermediario entre el modelo y el servicio (db)
       
    ➖ "Models" es donde defino los modelo Book, Library, User, defino como se van a representar
      los datos (tablas) en la db.

   






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
   ## ✔️ Creo la Autenticacion

   ➖ Instalo libreria Passport `npm i --save passport passport-jwt` para la implementacion
      y las estrategias de la autenticacion
   ➖ Instalo libreria "jsonwebtoken" `npm i --save jsonwebtoken` que me permite crear un jwt

   Esto es un mecanismo de seguridad para verificar la identidad de un usuario antes de otorgarle
   acceso a ciertos recursos o funcionalidades. Es un proceso de verificacion de identidad de un
   usuario que intenta acceder arecursos protegidos en un sistema web. 


      

    
