//Create MovieItem component (to split up list of movies in 'movies' into single movie components
import React from 'react';//import React to enable use of React library for single page 
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export class MovieItem extends React.Component { //create MovieItem class that inherits Component class from React 
    //and allow export for external use
    render() { //render method to render / draw content of div to screen
        return (
            //div with component content
            <div>

                {/* <h4>{this.props.movie.Title}</h4>   //output movie Title from state object in read component 
                <p>{this.props.movie.Year}</p>          //output movie Title from state object in read component 
                <img src={this.props.movie.Poster} width="200" height="200"></img>  //output movie Poster image from state object in read component
                */
                }
                {/*Card code from react-bootstrap (with ammended styling)*/}
                <Card className="text-center">
                    <Card.Header style={{fontWeight:'bold',color:'#FF0000'}}>{this.props.movie.Type}</Card.Header>{/*output movie Type from state object in read component*/}
                    <Card.Body>
                        {/*output movie Title from state object in read component*/}
                        <Card.Title>{this.props.movie.Title}</Card.Title>
                        {/*output movie Poster from state object in read component*/}
                        <Card.Text><img src={this.props.movie.Poster} alt="Movie Poster" width="200" height="200"></img></Card.Text>
                        {/*inactive button for future link to further information component*/}
                        <Button variant="primary">More Info</Button>
                    </Card.Body>
                    {/*output movie Year from state object in read component*/}
                    <Card.Footer className="text-muted" style={{fontWeight:'bold',color:'#FF6347'}}>{this.props.movie.Year}</Card.Footer>
                   
                   <hr style={{height:2,backgroundColor :'#FF0000'}}></hr>
                </Card>
            </div>
        );
    }
}