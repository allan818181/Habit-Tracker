const express = require('express')
const app =express();

const PORT = 3000;


app.use(express.json());

app.get('/api', (req, res) => {
    res.json({message: 'my backend is on port 3000'})
});

app.post('/api/data', (req,res) => {
    const data =req.body;
    res.json({
        message: 'data received',
        received: data
    });
});

app.listen(PORT, () =>{
    console.log('server is running: http://localhost:${PORT}')
});

















