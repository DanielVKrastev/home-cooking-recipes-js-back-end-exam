import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('it words');
});

// Start Express
app.listen(3000, () => console.log('Server is listening on http://localhost:3000...'));