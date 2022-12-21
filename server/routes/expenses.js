//Schemas
const {getExpenses, getExpense, addExpense} = require('../Schemas/expenses')

//Routes
async function expenseRoutes (fastify, options, done) {
    const client = fastify.db.client
    //get all expenses
    fastify.get('/expenses', {schema: getExpenses}, async function (req, reply) {
        try {
            const {rows} = await client.query('select * from expenses')
            console.log(rows)
            reply.send(rows)
        } catch(err) {
            throw new Error(err)
        }
    })

    //get a specific expense
    fastify.get('/expense/:id', {schema:getExpense}, async function (req, reply) {
        const {id} = req.params
        const query = {
            text: `select * from expenses where id = $1`,
            values: [id]
        }
        try {
            const {rows} = await client.query(query)
            reply.send(rows[0])
        } catch(err) {
            throw new Error(err)
        }
    })

    fastify.post('/expense', {schema: addExpense}, async function (req, reply) {
        const {name, monthly_total, notes, actual} = req.body
        const query = {
            text: `insert into expenses (name, monthly_total, notes, actual) values ($1, $2, $3, $4)`,
            values: [name, monthly_total, notes, actual]
        }
        try {
            const {rows} = await client.query(query)
            console.log(rows[0])
            reply.code(201)
            return {created: true}
        } catch (err) {
            throw new Error(err)
        }
    })

    done()
}

module.exports = expenseRoutes