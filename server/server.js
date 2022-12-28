const fastify = require("fastify")({ logger: true })

const PORT = 5500

const dbConnect = require('./db')

fastify.register(require("@fastify/cors"), {origin: '*'})
fastify.register(dbConnect)
fastify.register(require('./routes/expenses'))
fastify.register(require('./routes/income'))

const start = async () => {
    try {
        await fastify.listen({ port: PORT })
    } catch (error) {
        fastify.log.error(error)
        process.exit(1)
    }
}

start()