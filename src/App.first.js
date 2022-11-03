import './App.css';
import { Component } from 'react';


/* CLASS THAT RETURNS HTML - Gives us access to state*/
class App extends Component {

    constructor() {
        //used to call the constructor method of the Component class
        //properties can be overriden if necessary
        super();

        //here we override the state property inherited from the Parent constructor from the Component class. We set the state of our App class to an object which can be used to dynamically change the state of our html.
        this.state = {
            string: 'Hello Marco'
        }
    }


    
    
    
    
    
    render() {
        return (
            //Here className is how you add a class="" attribute to html
            <div className="App">
              <header className="App-header">
                <p>
                  {/*Below we are calling the value of state.string which is 'Hello Marco' */}
                  { this.state.string }
                </p>

                {/* setting an onclick event listener on the button element
                    
                    onClick="function(){
                        return this.setState(
                            {string: 'Hello Dev'}
                        )
                    }"
                    
                */}
                <button onClick={ () => this.setState({ string: 'Hello Software Engineer'})}>Change Text</button>
              </header>
            </div>
        );
    }
}

//The class app has a method called render(){ return(html) } which will render the html that you pass to its return statement.

//In react you use the {} braces to add javascript code anywhere necessary within the html that will be rendered

//In react the setState(stateObject) is the only way we can modify a state.
// When setState() is called the component where the state changed gets re-rendered. The render(return()) method gets called again? 