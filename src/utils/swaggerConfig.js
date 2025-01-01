import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const swaggerOptions = {

    swaggerDefinition: {
        openapi: '3.0.0',

      info: {
            title: 'Adopme API',
            version: '1.0.0',
            description: 'API para gestionar el sistema de adopciones de mascotas.',
      },

      servers: [
        {
          url: 'http://localhost:8080/api', // Cambia esto según tu configuración
        },
      ],

    },
    apis: ['./src/routes/users.router.js'], // Apunta a la ruta donde están las anotaciones Swagger
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);

export default (app) => {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};