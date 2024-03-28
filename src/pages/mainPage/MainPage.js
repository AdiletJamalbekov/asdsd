import React, {useEffect, useState} from 'react';
import Header from "../../components/header/Header";
import User from "../user/User";
import Buttons from "../../components/Buttons/Buttons";
import Home from "../../components/Home/Home";
import Example from "../../components/Example/Example";
import Modal from "../../components/modal/Modal";
import TodoList from "../../components/todoList/TodoList";
import classes from '../../components/modal/Modal.module.css';
import Button from "../../components/button/Button";

const MainPage = () => {

    const navBar = ['Home', 'Contacts', 'About', 'Documents']

    const [show, setShow] = useState(false)
    const handleShow = () => {
        setShow(!show)
    }

    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'coding',
            completed: false
        },
        {
            id: 5,
            title: 'eat',
            completed: false
        },
        {
            id: 6,
            title: 'sleep',
            completed: false
        }
    ])
    // console.log(tasks)

    const [inputTask, setInputTask] = useState('')
    const onChangeInputTask = (e) => {
        setInputTask(e.target.value)
    }

    const handleAdd = () => {
        setTasks(prev =>[...prev, {
            id: tasks.length === 0 ? 1 : tasks[tasks.length-1].id+1,
            title: inputTask,
            completed: false
        }])
    }

    const handleDone = (id) => {
        // console.log(id)
        tasks.map(task => {
            if (task.id===id) {
                return task.completed = !task.completed
            }
        })
        setTasks([...tasks])
    }

    const handleEdit = (editTodo) => {
        console.log(editTodo)
        tasks.map(task => {
            if (task.id === editTodo.id) return task = editTodo.title
        })
        setTasks([...tasks])
    }

    const handleDelete = (id) => {
        setTasks(tasks.filter(tasks => tasks.id!==id))
    }

    useEffect(() => {
        console.log('useEffect')
    }, [tasks]);


    return (
        <React.Fragment>

            { show &&
                <Modal handleShow={handleShow}
                       onChangeInputTask={onChangeInputTask}
                       handleAdd={handleAdd}
                >
                    <h1 className={classes.header}>Modal</h1>
                </Modal>
            }
            <Button title={'Show'} action={handleShow}/>
            <Header navBar={navBar}/>
            <User/>
            <Buttons/>
            <Home index={'Hello World'}/>
            <Example/>
            <TodoList
                tasks={tasks}
                handleDelete={handleDelete}
                handleDone={handleDone}
                handleEdit={handleEdit}
            />
        </React.Fragment>
    );
};

export default MainPage;