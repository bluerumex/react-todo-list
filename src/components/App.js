import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

const initialTodos = new Array(500).fill(0).map(
    (foo, idx) => ({id: idx, text: `schedule ${idx}`, done: false})
)

class App extends Component {
    state = {
        input: '',
        todos: initialTodos
    }

    id = 1;
    _getId = () => {
        return ++this.id;
    }

    _handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            input: value
        });
    }

    _handleInsert = () => {
        const { todos, input } = this.state;
        const newTodo = {
            text: input,
            done: false,
            id: this._getId()
        }
        this.setState({
            todos: [...todos, newTodo],
            input: ''
        });
    }

    _handleToggle = (id) => {
        console.log('_handleToggle');
        const { todos } = this.state;
        const idx = todos.findIndex(todo => todo.id === id);
        const toggled = {
            ...todos[idx],
            done: !todos[idx].done
        };
        this.setState({
            todos: [
                ...todos.slice(0, idx),
                toggled,
                ...todos.slice(idx+1, todos.length)
            ]
        });
    }

    _handleRemove = (id) => {
        console.log('_handleRemove');
        const { todos } = this.state;
        const idx = todos.findIndex(todo => todo.id ===id);
        this.setState({
            todos: [
                ...todos.slice(0, idx),
                ...todos.slice(idx+1, todos.length)
            ]
        });
    }

    render() {
        const { input, todos } = this.state;
        const { _handleChange, _handleInsert, _handleToggle, _handleRemove } = this;
        return (
            <PageTemplate>
                <TodoInput onChange={_handleChange} onInsert={_handleInsert} value={input} />
                <TodoList todos={todos} onToggle={_handleToggle} onRemove={_handleRemove} />
            </PageTemplate>
        )
    }
}

export default App;