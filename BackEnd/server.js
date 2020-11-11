//Starter "Hello World" code copied/pasted from expressjs.com (Getting Started)
//CHANGE port from 3000 to 4000 to avoid conflict with FrontEnd server
//FrontEnd at localhost:3000 (React js App), BackEnd at localhost:4000 (node js/express framework app),
//two seperate, different domains.
//Open Integrated Terminal to view BackEnd Server command prompt (node server.js to run)
//Use regular command prompt as FrontEnd Server command prompt (npm start to run)

const express = require('express')
const app = express()
const port = 4000

//add access to 'cors' library 
//for Cross Origin Resource Sharing (to overcome browser security measures between two domains)
const cors = require('cors');

//add access to 'body-parser' 
//for getting body of incoming request
const bodyParser = require('body-parser');

//ensure cors is run each time
app.use(cors());

//add code from problem sheet
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// parse application/x-www-form-urlencoded (from expressjs.com)
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json (from expressjs.com)
app.use(bodyParser.json())

//add new route point to api/movies
app.get('/api/movies', (req, res) => {
    //movie data from problem sheet into array 
    const mymovies = [{

        "Title": "Avengers: Infinity War",
        "Year": "2018",
        "imdbID": "tt4154756",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    },
    {
        "Title": "Captain America: Civil War",
        "Year": "2016",
        "imdbID": "tt3498820",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    },
    {
        "Title": "World War Z",
        "Year": "2013",
        "imdbID": "tt0816711",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
    }
        , {
        "Title": "War of the Worlds",
        "Year": "2005",
        "imdbID": "tt0407304",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDUyODAzNDI1Nl5BMl5BanBnXkFtZTcwMDA2NDAzMw@@._V1_SX300.jpg"
    }];

    //pass object json data to server (inc optional status code/meggage to indicate success)
    res.status(200).json({ message: "Success", movies: mymovies });
})

//create route point for post request to api/movies from client
app.post('/api/movies', (req, res) => {

    console.log('*** Movie Received ***');
    //get title,year,poster from body using bodyParser
    console.log(req.body.Title);
    console.log(req.body.Year);
    console.log(req.body.Poster);
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})