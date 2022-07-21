import React, { useState } from 'react';
import './EditForm.css';

const Form = ({ updateStudent, stopEditing, editingObject }) => {
  const [student, setStudent] = useState({
    studname: editingObject.studname,
    email: editingObject.email,
  });

  function changeHandler(e) {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setStudent({ ...student, [inputName]: inputValue });
  }

  function submitHandler(e) {
    e.preventDefault();
    const newStudent = {
      ...editingObject,
      studname: student.studname,
      email: student.email,
    };
    updateStudent(newStudent);
    setStudent({
      studname: '',
      email: '',
    });
  }
  return (
    <form onSubmit={submitHandler} className='form edit-form'>
      <h2 className='students-heading'>Edit Student</h2>
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
        Update
      </button>
      <button className='btn btn-accent-light' onClick={stopEditing}>
        Cancel
      </button>
    </form>
  );
};

export default Form;
