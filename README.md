## Información
Este repositorio contiene un sistema de inicio de sesion y registro funcional, hecho con Laravel y React.js sobre la plantilla que trae PHP artisan.


## Requisitos
- PHP7.4
- MYSQL
- Composer
- Laravel
- npm

## Procedimiento para replicarlo en local
1. Se debe instalar algunas extensiones de PHP

```
sudo apt-get install php7.4-curl
sudo apt-get install php7.4-mbstring
sudo apt-get install php7.4-xml
```
2. Luego se debe clonar el repositorio en la ubicación deseada, preferiblemente con permisos de usuario y no de root

3. Para la conexion con la bases de datos es necesario configurar el archivo .env y modificar los campos de DB_DATABASE, DB_USERNAME y DB_PASSWORD. La base de datos utilizada contiene una tabla llamada users. Se puede migrar desde PHP con:

```
php artisan migrate
```

4. Se instala las dependendias de node faltantes y se compila el proyecto

```
npm install
npm outdate
npm update
npm run dev
```

5. Por ultimo se abre el servidor mediante el comando:

```
php artisan serve
```
