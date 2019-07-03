import React, { Component } from 'react';

class TasksForm extends Component{

	handleInput(e){
		console.log("Escribiendo");
	}

	render(){
		return(
			<div className="card">
	      <form className="card-body">
          <div className="form-group">
            <input type="text" name="title" placeholder="Titulo" onChange="{this.handleInput}" className="form-control" />
          </div>
          <div className="form-group">
            <input type="text" name="responsible" placeholder="Responsable" onChange="" className="form-control" />
          </div> 
          <div className="form-group">
            <input type="text" name="description" placeholder="Descripción" onChange="" className="form-control" />
          </div>
          <div className="form-group">
            <input type="text" name="priority" placeholder="Prioridad" onChange="" className="form-control" />
          </div>
	      </form>
	    </div>
		)
	}
}

export default TasksForm;