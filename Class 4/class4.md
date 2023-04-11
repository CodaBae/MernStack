# Here is sample code to implement the above steps:

- Get all expenses
app.get('/expenses', (req, res) => {
  Task.find()
    .then(expenses => res.json(expenses))
    .catch(err => res.status(400).json({ success: false }));
}); 

- Create a expense
app.post('/expenses', (req, res) => {
  const newTask = new Task({
    name: req.body.name
  });

  newTask
    .save()
    .then(expense => res.json({ expense, success: true }))
    .catch(err => res.status(400).json({ success: false }));
});

- Get a expense by ID
app.get('/expenses/:id', (req, res) => {
  Task.findById(req.params.id)
    .then(expense => res.json(expense))
    .catch(err => res.status(400).json({ success: false }));
});

- Update a expense by ID
app.put('/expenses/:id', (req, res) => {
  Task.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
    .then(expense => res.json({ expense, success: true }))
    .catch(err => res.status(400).json({ success: false }));
});

- Delete a expense by ID
app.delete('/expenses/:id', (req, res) => {
  Task.findByIdAndDelete(req.params.id)
    .then(expense => res.json({ expense, success: true }))
    .catch(err => res.status(400).json({ success: false }));
});

# Deployment of API & Documentation

- Cyclic - https://www.cyclic.sh/

- Heroku

- Digtal ocean

- AWS

- Postman - https://www.postman.com/api-documentation-tool/ 

# Setup Frontend project

- Folder stucture

- Component Structure