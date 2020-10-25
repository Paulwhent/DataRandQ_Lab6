//Create Content component
import React from 'react';//import React to enable use of React library for single page application
export class Content extends React.Component { //create Header class that inherits Component class from React 
                                               //and allow export for external use
    render() {//render method to render / draw content of div to screen
        return (
            //div with component content
            <div>
                <h1 style ={{color:"red"}}>Hello World!</h1>
                <h2>It is {new Date().toLocaleTimeString('en-DUBLIN')}</h2>
                <h3>on</h3>
                <h2>{new Date().toLocaleDateString('en-DUBLIN')}</h2>
            </div>
        );
    }
}