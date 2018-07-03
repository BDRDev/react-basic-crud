import React, { Component } from 'react';

//reduxForm allows this form to communicate and connect to the reducer
//simmiliar to the connect helper
import { Field, reduxForm } from 'redux-form';


//this is regarding the props for the inputs

//name: what piece of state is the user editing
//component: takes a function or another component. Puprose of this is to return JSX to show what its
//supposed to look like on the screen. Visual Face


class PostsNew extends Component {

	renderField = (field) => {
		return (
			<div className="form-group">
				<label>{field.label}</label>
				<input
					className="form-control"
					type="text"
					{...field.input}			
				/>
			</div>
		) 
		
	};



	render(){
		return (
			<form>
				<Field
					label="title"
					name="title"
					component={this.renderField}
				/>

				<Field
					label="tags"
					name="tags"
					component={this.renderField}
				/>

				<Field
					label="Post Conent"
					name="content"
					component={this.renderField}
				/>
			</form>
		)

	}
}

//connects to the reducer
export default reduxForm({
	//Kind of like the name of the form, has to be unique. 
	//This is for showing more than one form at a time
	form: 'PostsNewForm'
})(PostsNew);