import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {
  handleSubmit =(id)=> {
    this.props.removeTodo(id)
  }

  renderTodos = () => this.props.todos.map((todo) => <Todo key={todo.id} id={todo.id} text={todo.text} handleSubmit={this.handleSubmit}/>)

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeTodo: (id) => dispatch({type: "DELETE_TODO", payload: id})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
