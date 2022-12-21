const expense = {
    type: 'object',
    properties: {
        id: {type: 'integer'},
        name: {type: 'string'},
        monthly_total: {type: 'number'},
        notes: {type: 'string'},
        actual: {type: 'boolean'}
    }
}

const getExpenses = {
    response: {
        200: {
            type: 'array',
            items: expense
        }
    }
}

const getExpense = {
    response: {
        200: expense
    }
}

const addExpense = {
    body : {
        type: 'object',
        required: ['name', 'monthly_total', 'actual'],
        properties: {
            name: {type: 'string'},
            monthly_total: {type: 'number'},
            notes: {type: 'string', nullable: true, default: null},
            actual: {type: 'boolean', default: false}
        }
    },
    response: {
        201: {
            type: 'object',
            properties: {
                created: {type: 'boolean'}
            }
        }
    }
}

module.exports = {
    getExpenses,
    getExpense,
    addExpense
}

