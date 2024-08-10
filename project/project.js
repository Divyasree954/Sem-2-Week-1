// server.js
const express = require('express');
const app = express();

app.use(express.json()); 

let events = []; 
let nextId = 1;  

app.get('/', (req, res) => {
    res.json(events);
});


app.get('/event', (req, res) => {
    const event = events.find(e => e.id === parseInt(req.params.id));
    if (!event) {
        return res.status(404).send('Event not found');
    }
    res.json(event);
});


app.post('/events', (req, res) => {
    const { name, date, location } = req.body;
    if (!name || !date || !location) {
        return res.status(400).send('Missing event details');
    }
    const newEvent = {
        id: nextId++,
        name,
        date,
        location
    };
    events.push(newEvent);
    res.status(201).json(newEvent);
});


app.put('/events.', (req, res) => {
    const event = events.find(e => e.id === parseInt(req.params.id));
    if (!event) {
        return res.status(404).send('Event not found');
    }

    const { name, date, location } = req.body;
    if (name) event.name = name;
    if (date) event.date = date;
    if (location) event.location = location;

    res.json(event);
});


app.delete('/eventsi', (req, res) => {
    const eventIndex = events.findIndex(e => e.id === parseInt(req.params.id));
    if (eventIndex === -1) {
        return res.status(404).send('Event not found');
    }
    const deletedEvent = events.splice(eventIndex, 1);
    res.json(deletedEvent[0]);
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
