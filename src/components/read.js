import React from 'react';//import React to enable use of React library for single page application
import { Movies } from './movies';
export class Read extends React.Component {

    //state - object to store data (movies object) for use by this component (read)
    state = {
        movies: [ //movie information in Java Script Object Notation (JSON) format (in an array) with hyper links to jpg image files
            {
                "Title": "Avengers: Infinity War",
                "Year": "2018",
                "imdbID": "tt4154756",
                "Type": "Action/Sci-fi",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
            },
            {
                "Title": "Captain America: Civil War",
                "Year": "2016",
                "imdbID": "tt3498820",
                "Type": "Action/Adventure",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
            },
            {
                "Title": "Charlie Wilson's War",
                "Year": "2007",
                "imdbID": "tt0472062",
                "Type": "Drama",
                "Poster": "https://m.media-amazon.com/images/M/MV5BMTgwMDgwMDc4MF5BMl5BanBnXkFtZTYwOTU3MDM4._V1_SX300.jpg"
            }
        ]
    };

    render() {
        return (
            //jsx (javascript in XML) code (allows HTML code in React, then transpiled to js) - Movies component in read 
            //create movies object in component Movies using state object that contains movie data in movies object from above
            <div>
                <h1 style = {{color:"red"}}>Featured Movies</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}