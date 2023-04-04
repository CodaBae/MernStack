// importing packages
const express = require('express')
const mongoose = require('mongoose')

// importing files
const expenseSchema = require('./Model/expense')

const expenseModel = mongoose.model('Expense',expenseSchema )

const app = express()

const mongoDBAccess = "mongodb+srv://admin123:admin123@expense.cnpijed.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(mongoDBAccess, { useNewUrlParser: true }).then(() => {
    console.log('connected to DataBase')
}).catch((err) => {
    console.log(err)
})

const newExpense = {
    name: 'transportation',
    amount: 500,
    date: 'Apr 1',
    invoice: 'payment for food'
}


const addExpense = new expenseModel(newExpense)

addExpense.save()


const port = 7000

app.listen(port, ()=>{
    console.log('hello, you are listening to port ' + port)
})

app.get('/', (req, res) =>{
    res.send('hello wellcome to expense server')
})