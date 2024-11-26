const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use((req, res, next) => {
    next();
})
app.get('/', (req, res) => {
    res.send('Backend service running');
})

app.listen(PORT, () => {
    console.log(`Backend service listening on ${PORT}`)
})

