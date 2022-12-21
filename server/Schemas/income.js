const income = {
    type: 'object',
    properties: {
        id: {type: 'integer'},
        title: {type: 'string'},
        rate: {type: 'number'},
        weekly_hours: {type: 'integer'},
        notes: {type: 'string'}
    }
}

const getIncomes = {
    response: {
        200: {
            type: 'array',
            items: income
        }
    }
}

const getIncome = {
    response: {
        200: income
    }
}

const addIncome = {
    body : {
        type: 'object',
        required: ['title', 'rate', 'weekly_hours'],
        properties: {
            title: {type: 'string'},
            rate: {type: 'number'},
            weekly_hours: {type: 'integer'},
            notes: {type: 'string', nullable: true, default: null}
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
    getIncomes,
    getIncome,
    addIncome
}