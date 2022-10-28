const express = require('express')
const cors = require('cors')
const app = express();
app.use(cors());
const port = process.env.PORT || 5000;


const courses = require('./data/courses.json');

app.get('/', (req, res) => {
    res.send('Learning website is runing')
})

app.get('/courses', (req, res) => {
    res.send(courses);
})

app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const course = courses.find(n => n.id === id);
    res.send(course);
})

app.listen(port, () => {
    console.log('Education learning site running on port', port);
})
