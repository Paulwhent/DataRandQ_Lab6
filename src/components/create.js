
//Create 'create' component
import React from 'react';//import React to enable use of React library for single page application
import './create.css'; //import css styling
import axios from 'axios'; //import axios package to enable http requests (promise implementation)
export class Create extends React.Component {

    //constructor for create class
    constructor() {

        //invoke constructor of parent class React.Component
        super();
        // bind all input events to this instance of class
        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeYear = this.onChangeYear.bind(this);
        this.onChangePoster = this.onChangePoster.bind(this);

        //create instance of state and initialise blank local string variables values to take data 
        this.state = {

            Title: '',
            Year: '',
            Poster: ''
        }
    }

    //on new Title input event, method to update state
    onChangeTitle(e) {
        this.setState({
            Title: e.target.value
        });
    }

    //on new Year input event, method to update state
    onChangeYear(e) {
        this.setState({
            Year: e.target.value
        });
    }

    //on new Poster input event, method to update state
    onChangePoster(e) {
        this.setState({
            Poster: e.target.value
        });
    }

    //method for submission button
    onSubmit(e) {
        //ensure button cannot be triggered again whilst still executing
        e.preventDefault();
        //alert to confirm movie Title added to state
        alert("Movie: " + this.state.Title + " " + "Year: " + this.state.Year + " " + "Poster: " + this.state.Poster);
        console.log("Button clicked");
        console.log("Movie: " + this.state.Title + "   " + "Year: " + this.state.Year + "   " + "Poster: " + this.state.Poster);

        //create newMovie object with movie data
        const newMovie = {
            Title: this.state.Title,
            Year: this.state.Year,
            Poster: this.state.Poster
        }
        //post object created above to BackEnd server
        axios.post('http://localhost:4000/api/movies', newMovie)

            .then((res) => {
                console.log(res);
            })

            .catch((err) => {
                console.log(err);
            });

    }

    render() {
        return (
            //add form to div with submission button that invokes onSubmit method
            //use styling from App 
            <div className='App'>
                <form onSubmit={this.onSubmit}>

                    <div className='form-group'>{/*form-group styling*/}
                        <label>Movie Title Input</label>
                        {/*text input box, form-control styling, add value to state when (Title) input event triggered*/}
                        <input type='text' placeholder="Input Title here:" background-color="red" className='form-control'
                            value={this.state.Title} onChange={this.onChangeTitle}></input>
                    </div>

                    <div className='form-group'>
                        <label>Movie Year Input</label>
                        <input type='text' placeholder="Input Year here:" className='form-control'
                            value={this.state.Year} onChange={this.onChangeYear}></input>
                    </div>

                    <div className='form-group'>
                        <label>Movie Poster Input</label>
                        <textarea type='text' placeholder="Input Poster link here:" className='form-control'
                            value={this.state.Poster} onChange={this.onChangePoster}></textarea>
                    </div>

                    <div className='form-group'>
                        {/*submit button definition for adding input data*/}
                        <input type='submit' value='Submit New Movie' className='btn btn-primary'></input>
                    </div>
                </form>
            </div>
        );
    }
}