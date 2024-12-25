const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT||3001;

app.use(cors());
app.use(express.json());

let tasks = [];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.post('/tasks', (req, res) => {
    const task = {
        id: Date.now().toString(),
        name: req.body.name,
        status: 'stopped',
        time: 0,
        startTime: null
    };
    tasks.push(task);
    res.json(task);
});

app.put('/tasks/:id', (req, res) => {
    const task = tasks.find(t => t.id === req.params.id);
    if(task) {
        if (req.body.status === 'running') {
            task.startTime = Date.now();
        } else if (req.body.status === 'stopped' && task.startTime) {
            task.time += Date.now() - task.startTime;
            task.startTime = null;
        }
        task.status = req.body.status;
    }
    res.json(task);
});

app.delete('/tasks/:id', (req, res) => {
    tasks = tasks.filter(t => t.id !== req.params.id);
    res.json({success: true});
});

app.listen(port, () => console.log(`Server running on port ${port}`));
