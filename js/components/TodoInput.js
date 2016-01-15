import React, { Component, PropTypes } from 'react'
import shortid from 'shortid'

class TodoInput extends Component{

  handleSubmit(e) {
      e.preventDefault();

      const body = this.refs.body.value.trim();
      const newTodo = {
          id: shortid.generate(),
          body
      };
      this.props.handleCreate(newTodo)
      this.refs.body.value = "";
  }

  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" ref="body" />
          <input type="submit" />
        </form>
      </div>
    );
  }

}

TodoInput.propTypes = {
    handleCreate: PropTypes.func.isRequired
}

export default TodoInput
