import express from 'express';
import path from 'path';
var ejsLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

// Use express-ejs-layouts
app.use(ejsLayouts);
app.set('layout', 'layout'); // Default layout

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { 
        title: 'Home'
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
