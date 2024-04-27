/**
 * @swagger
 * tags:
 *   name: Swagger
 *   description: Routes for Swagger demo
 */

const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /hello-swagger:
 *   get:
 *     summary: Returns a hello message.
 *     description: Returns a hello message for Swagger.
 *     responses:
 *       200:
 *         description: Hello message.
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */
router.get('/hello-swagger', (req, res) => {
    try {
        res.status(200).send('Hello Swagger!');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

/**
 * @swagger
 * /wass-going-on-swagger:
 *   get:
 *     summary: Returns a message.
 *     description: Returns a message for Swagger.
 *     responses:
 *       200:
 *         description: Message.
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */
router.get('/wass-going-on-swagger', (req, res) => {
    try {
        res.status(200).send('Wass Going on Swagger!');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

/**
 * @swagger
 * /hey-hey:
 *   get:
 *     summary: Returns a greeting.
 *     description: Returns a greeting for Swagger.
 *     responses:
 *       200:
 *         description: Greeting.
 *         content:
 *           text/plain:
 *             schema:
 *               type: string
 */
router.get('/hey-hey', (req, res) => {
    try {
        res.status(200).send('Hey Hey!');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
