//Schemas
const {getIncomes, getIncome, addIncome} = require('../Schemas/income')

//Routes
function incomeRoutes (fastify, options, done) {
    const client = fastify.db.client
    fastify.get('/incomes', {schema: getIncomes}, async function (req, reply) {
        const query = {
            text: `select * from incomes`
        }
        try {
            const {rows} = await client.query(query)
            reply.send(rows)
        } catch(err) {
            throw new Error(err)
        }
    })

    fastify.get('/income/:id', {schema: getIncome}, async function (req, reply) {
        const {id} = req.params
        const query = {
            text: `select * from incomes where id = $1`,
            values: [id]
        }
        try {
            const {rows} = await client.query(query)
            reply.send(rows[0])
        } catch(err) {
            throw new Error(err)
        }
    })

    fastify.post('/income', {schema: addIncome}, async function (req, reply) {
        const {title, rate, weekly_hours, notes} = req.body
        const query = {
            text: `insert into incomes (title, rate, weekly_hours, notes) values ($1, $2, $3, $4)`,
            values: [title, rate, weekly_hours, notes]
        }
        try {
            const {rows} = await client.query(query)
            console.log(rows[0])
            reply.code(201)
            return {created: true}
        } catch(err) {
            throw new Error(err)
        }
    })
    done()
}

module.exports = incomeRoutes