const fastifyPlugin = require("fastify-plugin")

const { Client } = require('pg')

require("dotenv").config()

const client = new Client({
    user: 'admin',
    password: process.env.PASSWORD,
    host: 'localhost',
    port: 5432,
    database: process.env.DATABASE
})

async function dbConnect(fastify, options) {
    try {
        await client.connect()
        console.log("PG db connected")
        fastify.decorate('db', {client})
    } catch(err) {
        console.error(err)
    }
}

module.exports = fastifyPlugin(dbConnect)