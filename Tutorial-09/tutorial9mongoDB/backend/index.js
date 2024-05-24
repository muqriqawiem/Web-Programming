const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const port = 3000;        //define a variable port to save the port number 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/tutorial9_db', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));

//Define Transaction schema
const TransactionSchema = new mongoose.Schema({
    date: {
        type: Date,
        default: Date.now
    },
    type: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

//Create Transaction Model
const Transaction = mongoose.model('Transaction', TransactionSchema);

//Root route 
app.get('/', (req, res) => {
    res.send('Hello World, Express.js with MongoDB!!')
})

app.listen(port, () => {
    console.log(`App has started on port ${port}!`)
})

//POST route
app.post('/transaction', (req, res) => {
    const newTransaction = new Transaction({
        type: req.body.type,
        description: req.body.description,
        amount: req.body.amount,
        status: req.body.status
    });

    newTransaction.save()
        .then(transaction => res.json(transaction))
        .catch(err => console.log(err));
});

//GET route
app.get('/transaction', (req, res) => {
    Transaction.find()
        .then(transactions => res.json(transactions))
        .catch(err => console.log(err));
});

//Get route by Id
app.get('/transaction/:id', (req, res) => {
    Transaction.findById(req.params.id)
    .then(transaction => res.json(transaction))
    .catch(err => console.log(err));
});