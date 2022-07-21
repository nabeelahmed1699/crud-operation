import React from 'react';
import './Student.css';
const Student = ({ id, studname, email, enableEdit, remove }) => {
  return (
    <article className='student'>
      <div>
        <h3>{studname}</h3>
        <p className='email'>{email}</p>
      </div>
      <div className='btn-contaier'>
        <button
          className='btn btn-link btn-transparent btn-success'
          onClick={() => enableEdit()}
        >
          edit
        </button>
        <button
          className='btn btn-link btn-transparent btn-danger'
          onClick={() => remove()}
        >
          remove
        </button>
      </div>
    </article>
  );
};

export default Student;
