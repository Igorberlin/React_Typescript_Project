import React, { useState, useEffect } from 'react';
import { TodoForm } from '../components/TodoForm';
import { TodoList } from '../components/TodoList';
import { ITodo } from '../interfaces';


declare var confirm: (question: string) => boolean

export const TodosPage: React.FC = () => {
    const todosHistory = JSON.parse(localStorage.todos || '[]')

    const [todos, setTodos] = useState<ITodo[]>(todosHistory)


    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('todos') || "[]") as ITodo[]
    
    setTodos(saved)
    },[])

    useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
    },[todos])



    const addHandler = (title: string) => {
    const newTodo:ITodo = {
        title: title,
        id: Date.now(),
        completed: false
    }
    setTodos(prev=>[newTodo,...prev])
    // setTodos([newTodo, ...todos])
    }

    const toggleHandler = (id: number) => {
            setTodos(todos.map(item => {
                if (item.id === id) {
                item.completed=!item.completed
                }
                return item
        }))
    }

    const removeHandler = (id: number) => {
    const shouldRemove = confirm('Delete??')
    if (shouldRemove) {
        setTodos(prev=>prev.filter(todo=>todo.id !== id))
    }
    
    }

    return (
        <React.Fragment>
        <TodoForm onAdd={addHandler} />
        <TodoList
            todos={todos}
            onToggle={toggleHandler}
            onRemove={removeHandler}  
        />
    </React.Fragment>
    )
}
