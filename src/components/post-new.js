import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostNew extends Component {
  renderField(field) { //see lesson 134 for discussion of Field etc.
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`;
    
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input 
          className="form-control"
          type="text"
          {...field.input} // adds event handlers automatically
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values){
    console.log(values);
    // call an action creator for the POST
    this.props.createPost(values, () => {
      this.props.history.push('/');
    });

  }
  
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h3>Create a Post!</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field
            label="Title"
            name="title"
            component={this.renderField} >
          </Field>
          <Field
            label="Categories"
            name="categories"
            component={this.renderField} >
          </Field>
          <Field
            label="Post"
            name="content"
            component={this.renderField} >
          </Field>
          <button type="submit" className="btn ntn-primary">Submit</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // onSubmit, this function will automatically be called
  // console.log(values) -> { title: 'asdf', categories: 'asdf', post: 'asdf' }
  const errors = {};
  // validate inputs
  if (!values.title){
    errors.title = "Enter a title!";
  }
  if (!values.categories){
    errors.categories = "Enter a category!";
  }
  if (!values.content){
    errors.content = "Enter a post!";
  }
  return errors; 
  // if empty object is returned, the form is good
  // if errors has any properties, form is invalid
}

export default reduxForm({
  validate,  
  form: 'PostNewForm'
}) (
  connect(null,{ createPost })(PostNew)
);