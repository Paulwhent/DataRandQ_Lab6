//Create Movies component
import React from 'react';//import React to enable use of React library for single page application
import { MovieItem } from './movieItem';
export class Movies extends React.Component {  //create Header class that inherits Component class from React 
    //and allow export for external use
    render() {                                 //render method to render / draw content of div to screen
        //return props object 'movies' from state object in read component split into individual MovieItem components by the map function
        return this.props.movies.map((movie) => {
            return <MovieItem movie={movie}></MovieItem>
        })
    }
}