require('dotenv').config()
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use((req, res, next) => {
    next();
})
app.get('/', (req, res) => {
    res.send('Backend service running');
})
mongoose.connect(process.env.DATABASE_URL).then(() => {
    app.listen(PORT, () => {
        console.log(`Backend service listening on ${PORT}`);
        app.get('/check', (req, res) => {
            res.send('Backend service running with database connection');
        })
    })
}).catch((err) => {
    console.log("Failed to connect to database")
})
