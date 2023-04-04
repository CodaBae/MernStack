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

// const newExpense = {
//     name: 'transportation',
//     amount: 500,
//     date: 'Apr 1',
//     invoice: 'payment for food'
// }


// const addExpense = new expenseModel(newExpense)
// addExpense.save()

app.get('/',(reqest, responds) => {
    responds.send('hello, welcome to expense app')
})

app.get('/greeting',(reqest, responds) => {
    responds.send('hello, paul welcomes you to expense app')
})


// # Implement the following routes for the expense API:

// a. GET /expenses - to retrieve all expenses

app.get('/expenses', async (req, res)=>{
     const data = await expenseModel.find()
    res.send(data)
})

// b. POST /expenses - to create a new expense

app.post('/addExpense', async (req,res) =>{
const newExpense =  {
    name: 'ice-cream',
    amount: 200,
    date: 'Apr 5',
    invoice: 'payment for ice-cream'
}

let addExpense = new expenseModel(newExpense)
let data = await addExpense.save()

 res.send(data)

})




// c. GET /expenses/:id - to retrieve a specific expense by ID


// d. PUT /expenses/:id - to update a expense by ID


// e. DELETE /expenses/:id - to delete a expense by ID



const port = 5000

app.listen(port, ()=>{
    console.log('hello, you are listening to port ' + port)
})

