import React, { Component } from 'react';
import { tasks } from '../tasks.json';

class Navigation extends Component{

	constructor() {
      super(); // Le digo que herede todo de los compenentes de react

      // Defino los datos o el estado de los datos
      this.state = {
        tasks  // seria lo mismo que escribir --> tasks: tasks 
      };

    }

	render(){
		return(
			<nav className="navbar nabvar-dark bg-dark">
                <a href="" className="text-white">
                    Tasks
                    <span className="badge badge-pill badge-light ml-2">
                        { this.state.tasks.length }
                    </span>
                </a>
            </nav>
		)
	}
} 

export default Navigation;