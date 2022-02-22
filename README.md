# Proyecto-citas

Backend de una app para una clinica veterinaria en la cual podremos ver parte de usuario, mascotas, veterinarios y programar citas.

Tecnologias necesarias:<br>
-Javascript<br>
-Node.js<br>
-MySQL<br>
-Sequelize<br>
-Express<br>
-Postman<br>

Instalación:

Descargaremos haciendo: git clone "https://github.com/Manelus/Proyecto-citas.git" (en la terminal).

Instalaremos las siguientes dependencias con:<br>
-yarn install<br>
o<br>
-npm install

Porsteriormente para poder visualizarlo en tablas crearemos las tablas con: sequelize db:create<br>
y luego haremos la migracion con: sequelize db:migrate.

Funciones:<br>
En Postman <br>
-Usuarios:<br>
/Crear usuario:<br>
Post localhost:3000/usuarios/register<br>
En el body:<br>
{<br>
    "nombre": "nombre",<br>
    "apellido": "apellido",<br>
    "email": "test@test.com",<br>
    "password": "password"<br>
}<br>
/Login usuario:<br>
Post localhost:3000/usuarios/login<br>
En el body:<br>
{<br>
    "email": "test@test.com",<br>
    "password": "password"<br>
}<br>
/Mostrar usuarios:<br>
Get localhost:3000/usuarios/Users<br>
/Mostrar usuario por id:<br>
Get localhost:3000/usuarios/id/"id usuario"<br>
/Borrar usuario:<br>
Delete localhost:3000/usuarios/delete/"id usuario"<br>
<br>
-Mascotas:<br>
/añadir mascotas:<br>
Post localhost:3000/mascotas/register<br>
En el body:<br>
{<br>
    "nombre": "nombre mascota",<br>
    "tipo": "tipo de animal",<br>
    "raza": "raza",<br>
    "idUser": "id del usuario"<br>
}<br>
/Ver mascota:<br>
Get localhost:3000/mascotas/id/"id mascota"<br>
/Ver mascotas:<br>
Get localhost:3000/mascotas/<br>
/borrar mascotas:<br>
Delete localhost:3000/mascotas/"id mascota"<br>
<br>
-Veterinarios:<br>
/Registro veterinarios
Post localhost:3000/veterinarios/register<br>
En el body:<br>
{<br>
    "nombre": "nombre",<br>
    "apellido": "apellido"<br>   
}<br>
/Ver veterinario:<br>
Get localhost:3000/veterinarios/id/"id veterinario"<br>
/Ver veterinarios:<br>
Get localhost:3000/veterinarios/<br>
-Citas:
/añadir citas:<br>
Post localhost:3000/citas/register<br>
En el body:<br>
{<br>
    "idMascota": "id mascota",<br>
    "isUser": "id usuario",<br>
    "diaCita": "yyyymmddhhminminss",//La fecha se escribe junta pero luego en la tabla saldra bien escrita<br>
    "idVeterinario": "id del veterinario"<br>
}<br>
/ver citas<br>
/Ver veterinario:<br>
Get localhost:3000/citas<br>

Autor-Manel Barreda Albuixech







