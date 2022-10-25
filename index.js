const express = require('express')
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Learning website is runing')
})

app.listen(port, () => {
    console.log('Education learning site running on port', port);
})
