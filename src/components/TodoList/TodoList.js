import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    render() {
        return (
            <div>
                <TodoItem done>react study</TodoItem>
                <TodoItem>Component Styling</TodoItem>
            </div>
        )
    }
}

export default TodoList;