//Create Footer component
import React from 'react';//import React to enable use of React library for single page application
export class Footer extends React.Component {  //create Header class that inherits Component class from React 
                                               //and allow export for external use
    render() {//render method to render / draw content of div to screen
        return (
            //div with component content        
            <div>
                <h1>This is the Footer Component</h1>
            </div>
        );
    }
}