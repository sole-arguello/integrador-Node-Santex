# Trabajo Integrador XAcademy - Santex 

### Herramientas: Node.js - Express - Sequelize - Sqlite3 - Passport - JWT

## ✅ Inicio el proyecto Node.js con `npm init`



✳️ Instalo dependencias `npm i --save-dev nodemon` `npm i --save lodash` 

✳️ Configuro en el `package.json` con el script para correr la aplicacion `npm run start:dev`
   
✳️ Inatalo Express para el manejo de rutas `npm i --save express`

✳️ Instalo Sequelize como ORM y sqlite3 para persistencia de datos `npm install sequelize sequelize-cli sqlite3`


## ✅ Creo la Estructura con las capas 
### Comienzo con la carpeta SRC que contiene las capas del proyecto

    ☑️ "Config" 
    Es la carpeta que contiene el archivo de configuracion de la db (base de datos) y el archivo que crea el 'usuario 
    admin' al momento de iniciar la base de datos, que es el autorizado a Crear, Actualizar y eliminar registros de la db. 
    Mientras que los otros usuarios son creados luego y solo pueden hacer consultas a la db.

    ☑️ "Middleware" 
    Es la carpeta donde defino los archivos del login de usuarios y su auntenticacion para luego la proteccion de las rutas. 
    De tal manera que solo el usuario 'admin' recibe un token de autorizacion que al estar logeado como [ user: admin y pass: admin ] 
    que lo autoriza a poder hacer el CRUD de registros de la db, mientras que los demas usuarios reciben un token que los autoriza 
    a logearse como [ user: email@gmail.com y pass: contraseña de 6 digitos ] y  solo les permite consultar
    
    ☑️ "app.js" 
    Es el archivo principal donde hago correr el servidor y que escuche el puerto, para hacer las consultas de las rutas de 
    Book, Library, User y login de usuarios usando del middleware 'use' propio de la libreria
    
    ☑️ "Routes" es donde hago los llamados a las diferentes rutas de consulta y para el CRUD 
          
          En insomnia hago las consutas:

              ⏩ Post creo un registro (create)

               - En el caso de usuarios solo el Usuario logeado como admin puede realizar esta accion
               - En el caso del Book, se puede crear asignado o no a una libreria.
               - En el caso de Library, al crearse no debe poseer libros, pero una vez creada
               puede agregar libros.

              ⏩ Get consulto el/los registro (get)

               - En el caso de usuario tanto admin y cualquier usuario logeado puede realizar esta accion
               - En el caso de Book debe poder consultar por un libro en particular, por medio
                  de su id y por todos los libros creados 
               - En el caso de Library debe poder consultar por una libreria en particular, por 
                  medio de su id y los libros que hay en ella, como asi tambien poder consultar por 
                  todas sus librerias y libros en cada una de ellas.

              ⏩ Put edito un registro (update)

                 - Solo el usuario logeado como admin puede realizar esta accion
                 
              ⏩ Delete elimino un registro (delete)

                  - Solo el usuario logeado como admin puede realizar esta accion
                  
          
    ☑️ "Controllers" 
    Es la carpeta que defino para los archivos donde controlo el manejo de las respuestas del sistema (req, res)
    
    ☑️ "Services" 
    Es la carpeta donde defino la logica de nogocio para el funcionamiento del sistema  
    
    ☑️ "Providers" 
    El la carpeta donde defino las acciones del CRUD, son la abstraccion, es la llamda a un servicio (sqlite) 
    donde persisten los datos (db), crea, modifica, interactua, donde el intermediario entre el modelo y el servicio (db)
       
    ☑️ "Models" 
    Es la carpeta donde defino los modelo de las entidades Book, Library, User, defino como se van a representar 
    los datos (tablas) en la db.

## ✅ Creo la Relacion entre Library y Book
 - una a muchos `hasMany`, donde una libreria puede tener 0 a muchos libros 
 - pertenece a `belongsTo` donde el libro pertenece a la libreria
 - Dentro de la estructura de Library creo las capas para una vez creada la libreria, se pueda tambien crear un libro
   nuevo que le pertenecezca a la libreria.
   ```
      GET http://localhost:8080/library/1

                🔸(siendo id la PK de Library)
               {
               	"id": 1,
               	"name": "El Maipu",
               	"location": "Av. La Plata 2098",
               	"phone": "3514563000",
               	"createdAt": "2023-07-01T01:14:39.396Z",
               	"updatedAt": "2023-07-01T01:14:39.396Z",
               	"deletedAt": null,
               	"Books": [
                     🔸(siendo id la PK de Book y library la FK de Library)
               		{
               			"id": 1,
               			"isbn": 9788498382549,
               			"title": "Cien años de soledad",
               			"author": "Gabriel García Márquez",
               			"year": "1967",
               			"library": 1,
               			"createdAt": "2023-07-01T01:15:12.530Z",
               			"updatedAt": "2023-07-01T01:15:12.530Z",
               			"deletedAt": null,
               			"LibraryId": null
               		}
               	]
               }


   ```
   ## ✅ Creo la Autenticacion

   ✳️  Instalo libreria Passport `npm i --save passport passport-jwt` para la implementacion
       y las estrategias de la autenticacion
   
   ✳️  Instalo libreria "jsonwebtoken" `npm i --save jsonwebtoken` que me permite crear un jwt

   Esto es un mecanismo de seguridad para verificar la identidad de un usuario antes de otorgarle
   acceso a ciertos recursos o funcionalidades. Es un proceso de verificacion de identidad de un
   usuario que intenta acceder a recursos protegidos en un sistema web.


      

    
