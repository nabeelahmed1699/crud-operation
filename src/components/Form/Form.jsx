import React, { useState } from 'react';

import './Form.css';

const Form = ({ postData }) => {
  const [student, setStudent] = useState({
    studname: '',
    email: '',
  });

  function changeHandler(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setStudent({ ...student, [inputName]: inputValue });
  }

  function submitHandler(e) {
    e.preventDefault();
    const newStudent = {
      id: new Date().getTime().toString(),
      studname: student.studname,
      email: student.email,
    };
    postData(newStudent);
    setStudent({
      studname: '',
      email: '',
    });
  }
  return (
    <form onSubmit={submitHandler} className='form'>
      <h2 className='students-heading'>Add new student</h2>
      <div className='input'>
        <label htmlFor='name'>Name:</label>
        <input
          className='input-field'
          type='text'
          id='name'
          value={student.studname}
          name='studname'
          onChange={changeHandler}
          placeholder='e.g. xyz'
        />
      </div>
      <div className='input'>
        <label htmlFor='email'>email:</label>
        <input
          className='input-field'
          type='email'
          id='email'
          value={student.email}
          name='email'
          onChange={changeHandler}
          placeholder='example@example.com'
        />
      </div>
      <button type='submit' className='btn btn-accent'>
        Add
      </button>
      <button
        className='btn btn-accent-light'
        onClick={() =>
          setStudent({
            studname: '',
            email: '',
          })
        }
      >
        Cancel
      </button>
    </form>
  );
};

export default Form;
