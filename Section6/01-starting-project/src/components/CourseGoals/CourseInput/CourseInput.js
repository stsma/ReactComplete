import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, SetIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);

    if(event.target.value.trim().length > 0) {
      SetIsValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      SetIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{color: !isValid ? 'red': 'black'}}>Course Goal</label>
        <input type="text" style={{borderColor: !isValid ? 'red' : 'black', background: !isValid ? 'salmon' : 'transparent'}} onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
