import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostNew extends Component {
  render() {
    return (
      <div>
        <h3>Create a Post!</h3>
        <form>
          <Field
            name="title" >
            {/* component={} > */}
          </Field>
        </form>
      </div>
    );
  }
}

export default reduxForm({
    form: 'PostNewForm'
}) (PostNew);