import React, { Fragment } from 'react';
import './App.css';
import Form from './Components/Form'

function App() {
  return (
    <Fragment>
      <h1 className='title' >Things That I need to do.</h1>
      <div className="App">
        <Form />
      </div>
    </Fragment>
  );
}

export default App;
