const express = require('express');
const app = express();

// Set EJS as templating engine
app.set('view engine', 'ejs');

// Serve static files from the 'public' directory
app.use(express.static('public'));

app.get('/transaction/:month', (req, res) => {
    let transactions = [
        { date: '2024-05-01', type: 'expense', amount: 100 },
        { date: '2024-05-02', type: 'income', amount: 200 },
    ];

    res.render('transaction', { transactions: transactions });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
