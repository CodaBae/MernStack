# CRUD
- Create, Read, Update and Delete

- Create a new expense
const newTask = new Expense({
  taskName: 'My Expense',
  taskDescription: 'This is my expense.',
  taskDueDate: new Date()
});
newTask.save();

- Read all expenses
Expense.find((err, expenses) => {
  if (err) return console.error(err);
  console.log(expenses);
});

- Update a expense
Expense.findOneAndUpdate({ taskName: 'My Expense' }, { taskDescription: 'Updated expense description.' }, (err, expense) => {
  if (err) return console.error(err);
  console.log(expense);
});

- Delete a expense
Expense.findOneAndDelete({ taskName: 'My Expense' }, (err) => {
  if (err) return console.error(err);
  console.log('Expense deleted.');
});


# Implement the following routes for the expense API:

a. GET /expenses - to retrieve all expenses
b. POST /expenses - to create a new expense
c. GET /expenses/:id - to retrieve a specific expense by ID
d. PUT /expenses/:id - to update a expense by ID
e. DELETE /expenses/:id - to delete a expense by ID


# Test the API using Postman or a similar tool.

- Download Postman - https://www.postman.com/downloads/

- npm install body-parser

- import
const bodyParser = require('body-parser');

- parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

- parse application/json
app.use(bodyParser.json());


# Here is sample code to implement the above steps:

- Get all expenses
app.get('/expenses', (req, res) => {
  Expense.find()
    .then(expenses => res.json(expenses))
    .catch(err => res.status(400).json({ success: false }));
});

- Create a expense
app.post('/expenses', (req, res) => {
  const newTask = new Expense({
    name: req.body.name
  });

  newTask
    .save()
    .then(expense => res.json({ expense, success: true }))
    .catch(err => res.status(400).json({ success: false }));
});

- Get a expense by ID
app.get('/expenses/:id', (req, res) => {
  Expense.findById(req.params.id)
    .then(expense => res.json(expense))
    .catch(err => res.status(400).json({ success: false }));
});

- Update a expense by ID
app.put('/expenses/:id', (req, res) => {
  Expense.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then(expense => res.json({ expense, success: true }))
    .catch(err => res.status(400).json({ success: false }));
});

- Delete a expense by ID
app.delete('/expenses/:id', (req, res) => {
  Expense.findByIdAndDelete(req.params.id)
    .then(expense => res.json({ expense, success: true }))
    .catch(err => res.status(400).json({ success: false }));
});
