const express = require('express');
const cors = require('cors');
const qs = require('../questions.json');
const app = express();
const port = 8000;

app.use(cors());

app.get('/:topic', (req, res) => {
    const randomNum = Math.floor(Math.random() * 10);
    const topic = req.params.topic;

    let questions;
    if (topic === 'Education') {
        questions = qs.educationQuestions;
    } else if (topic === 'Health') {
        questions = qs.healthQuestions;
    } else if (topic === 'Technology') {
        questions = qs.technologyQuestions;
    } else {
        res.status(404).json({ error: 'Invalid topic' });
        return;
    }
    const randomQuestions = questions.slice(0, randomNum);
    res.json(randomQuestions);
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});