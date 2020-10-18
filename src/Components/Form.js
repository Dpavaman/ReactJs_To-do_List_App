import React, { useState, Fragment } from 'react'
import Lists from './Lists'
import './Form.css'

const Form = () => {
    const [currentItem, setCurrentItem] = useState("")
    const [tasks, setTasks] = useState([
        { item: "To-do Task 1" }
    ])

    const inputChangeHandler = (e) => {
        setCurrentItem(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newTask = currentItem;
        if (newTask.trim().length !== 0) {
            const list = [...tasks, { item: newTask }];
            setTasks(list);
        }
        setCurrentItem("")
    }

    const deleteTask = (key) => {
        const filteredList = tasks.filter((item, index) => {
            return index !== key;
        })
        setTasks(filteredList);

    }

    return (
        <Fragment>
            <form id='to-do-list' onSubmit={submitHandler}>
                <input className='input' type="text" placeholder='Enter task to be added' value={currentItem} onChange={inputChangeHandler} />
                <button className='submit' type="submit">Submit</button>
            </form>

            {tasks.length === 0 ? <div>
                <h1 className='noItem'>Nothinhg is Here <br /> <small className='small'> use the Input Box to add new tasks <br /> click on "X" to remove a Task from the list </small></h1>

            </div> : <Lists tasks={tasks} deleteTask={deleteTask} />}
        </Fragment>
    )
}

export default Form