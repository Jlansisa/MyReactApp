import React, { Component } from 'react'
import './Todolist.css';
import TodolistHeader from './TodoListHeader';
import TodoListItem from './TodoListItem';
import TodoListNewItem from './TodoListNewItem';

class Todolist extends Component {

    render () {

        const { todos, ...rest } = this.props;

       // Destructuring assignment syntax:
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
        return (
            <div>
                <TodolistHeader/>
                <TodoListNewItem {...rest}/>
                {
                    todos.map(todo => <TodoListItem key={todo.id}
                                                    {...todo}/>)
                }
            </div>
        )
    }
}

export default Todolist