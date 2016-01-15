import React, { Component, PropTypes } from 'react'
import TodoInput from './TodoInput'

class TodoApp extends Component{
  constructor(props){
      super(props)
      this.state = {
          todos: []
      }
  }

  handleSubmit(newTodo) {
      this.setState({todos: [newTodo, ...this.state.todos]});
  }

  handleDelete(deleteTodo) {
    const newTodos = this.state.todos.filter(
      (todo) => {
        return todo.id !== deleteTodo.id
      }
    )

    this.setState({todos: newTodos});
  }

render(){
  return(
    <div>
      <div>
        <TodoInput handleCreate={this.handleSubmit.bind(this)}/>
      </div>

      <div>
        <ul>
          {this.state.todos.map(
            (todo, i) => {
              return (<li key={todo.id}>{todo.body}
                <input type="button" value="delete" onClick={
                  ()=>{
                    this.handleDelete(todo)
                  }
                } />
                      </li>)
            }
          )}
        </ul>
      </div>
    </div>
  )
}

}

export default TodoApp
