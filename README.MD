# PRIMERA PRE ENTREGA - BACKEND 3

## REQUISITOS

- MongoDB
- NODE.JS v14 o superior

## Instalación del proyecto

Paso 1
* Clonar repositorio o descargar los archivos.

```bash
git clone https://github.com/GMaximilianoCuello/Backend3-Entrega
```
Paso 2
* instalar dependencias.

```bash
npm install
```
Paso 3 Configurar las variables
* Las variables de entornos las encontraras en el archivo **.env.examble**.

Paso 4 
* Ejecuta el proyecto.

```bash
npm start
```

## FUNCIONES

* Metodo GET para generar usuarios/users (Tener en cuenta los params de postman)

GET - http://localhost:8080/api/mocks/mockingusers?num=50

![Imagen 50 users](./src/public/img/50users.jpg)

* Metodo GET para generar mascotas/pets (Tener en cuenta los params de postman)

GET - http://localhost:8080/api/mocks/mockingpets?num=25

![Imagen 25 pets](./src/public/img/25pets.jpg)

* Metodo POST para insertar los datos generados en la base de datos
    * En Postman, nos dirigimos a body y seleccionamos RAW con formato JSON:
    {
        "users": 10,
        "pets": 5
    }

POST - http://localhost:8080/api/mocks/generateData

![Imagen Data](./src/public/img/generarData.jpg)

### Comprobar base de datos

Users:

![Imagen users](./src/public/img/obtenerUsers.jpg)

* USERS EN MONGO
![Imagen users](./src/public/img/UsersMongo.jpg)

Pets:
![Imagen users](./src/public/img/obtenerPets.jpg)

* PETS EN MONGO
![Imagen users](./src/public/img/PetsMongo.jpg)