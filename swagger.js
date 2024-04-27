const swaggerJSDoc = require('swagger-jsdoc');

// Swagger options
const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express API with Swagger',
            version: '1.0.0',
            description: 'A simple Express API with Swagger documentation',
        },
        servers: [
            {
                url: 'http://localhost:3000',
            },
        ],
    },
    apis: ['./routes/*.js'], // Path to the API routes file(s)
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);
module.exports = swaggerSpec;