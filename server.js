const express = require('express');
const app = express();
const PORT = 8000;

const rappers = {
    '21 savage': {
        'age': 29,
        'brithName': 'Sheyaa Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'chance the rapper': {
        'age': 29,
        'birthName': 'Chancellor Bennett',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }

} 

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/api/:name', (req, res) => {
    console.log(req.params.name);
    const rapperName = req.params.name.toLowerCase();
    if ( rappers[rapperName] ) {
        res.json(rappers[rapperName]);
    } else {
        res.json(rappers['unknown']);
    }
})

app.listen(PORT, () => {
    console.log(`The server is now running on ${PORT}.`);
});