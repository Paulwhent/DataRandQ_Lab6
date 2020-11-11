import React from 'react';//import React to enable use of React library for single page application
import { Movies } from './movies';
import axios from 'axios';//import axios package to enable http requests (promise implementation)

export class Read extends React.Component {

    //state - object to get/store data (movies object) for use by this component (read)
    state = {
        movies: [] //movie information from connection to external web API using componentDidMount lifecycle hook
    };
                //use lifecycle hook function/method componentDidMount to signal component/sub-components have rendered correctly/make Api call
                //called each time component is active

                componentDidMount() {
                    //to set up 'promise' for json data from BackEnd server         
                    axios.get('http://localhost:4000/api/movies')
                        //for 'fullfilled' state
                        .then(
                            //anonymous method to get data in form of response if 'promise' fullfilled and update 'state' by populating movies array
                            (response) => {
                            })
                        //for 'rejected' state
                        .catch(
                            //anonymous method to indicate error encountered
                            (error)=>{console.log(error)}
                        );
                    }
    render() {
        return (
            //jsx (javascript in XML) code (allows HTML code in React, then transpiled to js) - Movies component in read 
            //create movies object in component Movies using state object that contains movie data in movies object from above
            <div>
                <h1 style={{ color: "red" }}>Featured Movies</h1>
                <Movies movies={this.state.movies}></Movies>
            </div>
        );
    }
}