// Requiring module
const express = require('express');

// Creating express object
const app = express();

//tell the server where to look for files to be rendered
app.set('views', './views')
// set the view engine to ejs
app.set('view engine','ejs');

// Tell the server to render the stylesheet
// app.use(express.static('public'))

// app.use('/public/stylesheet.css',express.static(__dirname + 
// '../Assignment1/public/stylesheet.css'))

app.use(express.static('public'));

// site images folder
app.use(express.static('site_images'));


//route for About Page
app.get('/about', (req, res) => {
    res.render('about', {name: 'Mike Wedlock' });
});

//route for Resume Page
app.get('/resume', (req, res) => {
    res.render('resume');
});

//route for Movie Page includes movies array
app.get('/movie', (req, res) => {
    res.render('movie', {movies: movies});
});

// Handling GET request
app.get('/', (req, res) => {
    res.render('home', {pawprint: 'mowhty'})
});

// Port Number
const PORT = process.env.PORT ||3000;

// Server Setup
app.listen(PORT,console.log(
`Server started on port ${PORT}`));


// movie.ejs information will be created on the server.js 
//file as a array and passed to the movie.ejs file to be displayed in the list.
// Define an array of movie objects
const movies = [
    // one
    { 
        title: 'Star Wars: Episode VII - The Force Awakens',
        star: 'Daisy Ridley',
        director: 'J.J. Abrams'
    },
    // two
    {
        title: 'Avengers: Endgame',
        star: 'Anthony Russo',
        director: 'Robert Downey Jr.'
    },
    // three
    {
        title: 'Spider-Man: No Way Home',
        star: 'Tom Holland',
        director: 'Jon Watts'
    },
    // four
    {
        title: 'Avatar',
        star: 'Sam Worthington',
        director: 'James Cameron'
    },
    // five
    {
        title: 'Top Gun: Maverick',
        star: 'Tom Cruise',
        director: 'Joseph Kosinski'
    },
    // six
    {
        title: 'Black Panther',
        star: 'Chadwick Boseman',
        director: 'Ryan Coogler'
    },
    // seven
    {
        title: 'Avengers: Infinity War',
        star: 'Robert Downey Jr.',
        director: 'Anthony Russo'
    },
    // eight
    {
        title: 'Titanic',
        star: 'Leonardo DiCaprio',
        director: 'James Cameron'
    },
    //nine
    {
        title: 'Jurassic World',
        star: 'Chris Pratt',
        director: 'Colin Trevorrow'
    },
    //ten
    {
        title: 'The Avengers',
        star: 'Robert Downey Jr.',
        director: 'Joss Whedon'
    },
];
