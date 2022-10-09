import React from 'react';
import './App.css';
import "./Header.css";
import Article from './Article';
import Question from './Question';

import 'semantic-ui-css/semantic.min.css'
import { Form, Checkbox } from 'semantic-ui-react'

function App() {
  const [value, setValue] = React.useState('Question');
  return (
    <div className="App">
      <div>
        <div className="title">
          <h2>New Post</h2>
        </div>
        <div className="select">
          <div><h3>Select Post Type :</h3></div>
          <Form className="option">
            <Form.Field>
              <Checkbox
              radio
              label='Question'
              name='checkboxRadioGroup'
              value='Question'
              checked={value === 'Question'}
              onChange={(e, data) => setValue(data.value)}/>
            </Form.Field>
            <Form.Field>
              <Checkbox
              className="s2"
              radio
              label='Article'
              name='checkboxRadioGroup'
              value='Article'
              checked={value === 'Article'}
              onChange={(e, data) => setValue(data.value)}/>
            </Form.Field>
          </Form>
        </div>
      </div>
      <h3 className='bar'>What do you want to ask or share </h3>
      { value === "Question" ?
      <Question/>:
     <Article />}
    </div>
  );
}

export default App;