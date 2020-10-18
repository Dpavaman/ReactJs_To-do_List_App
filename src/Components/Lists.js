import React, { Fragment } from 'react'
import './Lists.css'
import FlipMove from 'react-flip-move'

const Lists = (props) => {
    const listArray = props.tasks
    const removeTask = props.deleteTask

    const Item = listArray.map((item, index) => {
        return <div key={index} className='listArea' >
            <span className='bullet' > {index + 1} . </span>
            <p className='list' key={index} > {item.item} <span><button onClick={() => removeTask(index)} className='remove' type="submit">X</button></span>  </p>
        </div>
    })
    return (
        <Fragment>
            <FlipMove duration={300} easing='ease-in-out' >
                {Item}
            </FlipMove>
        </Fragment>
    )
}

export default Lists