const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/projects', (req, res) => {
    const projects = [
        { id: 1, name: 'Portfolio Website', description: 'A personal portfolio website built with HTML, CSS, and JavaScript' },
        { id: 2, name: 'API Management with Apigee', description: 'API management project using Apigee' },
        { id: 3, name: 'Java Data Structures', description: 'A collection of data structures implemented in Java' },
    ];
    res.json(projects);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
