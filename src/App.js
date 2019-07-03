import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Navigation from './components/Navigation';
import { tasks } from './tasks.json';
import TasksForm from './components/TasksForm.js';

class App extends Component {

    constructor(props) {
      super(); // Le digo que herede todo de los compenentes de react

      // Defino los datos o el estado de los datos
      this.state = {
        tasks  // seria lo mismo que escribir --> tasks: tasks 
      };

    }

    render(){
        console.log(this.state.tasks);

        const tasks = this.state.tasks.map((task, i) => {
            return(

                <div className="col-md-3">
                    <div className="card mt-4">
                        <div className="card">
                            <div className="card-header">
                                <h3>{ task.title }</h3>
                                <span className="badge badge-pill badge-danger lg-2">
                                    { task.priority }
                                </span>
                            </div>
                            <div className="card-body">
                                <p>{ task.description }</p>
                                <p><b>{ task.responsible }</b></p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="App">

                <nav className="navbar nabvar-dark bg-dark">
                    <a href="" className="text-white">
                        Tasks
                        <span className="badge badge-pill badge-light ml-2">
                            { this.state.tasks.length }
                        </span>
                    </a>
                </nav>
                {/*<Navigation />*/}
                
                
                <div className="container">
                    <div className="row mt-4">
                        <div className="col-md-3"><TasksForm /></div>
                        
                        { tasks }
                    </div>
                </div>    
                

                {/*<img src={logo} className="App-logo" alt="logo" />*/}

            </div>
        );
    }
        
}

export default App;