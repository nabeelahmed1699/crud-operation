import React, { useContext } from 'react';
import StudentContext from '../../Context/studentContext';
import Student from './Student/Student';
import './Students.css';
const Students = () => {
  const { students, startEditing, removeStudent } = useContext(StudentContext);

  const handleEditCase = (handleEditCase) => {
    startEditing(handleEditCase);
  };
  const remove = (studentToRemove) => {
    removeStudent(studentToRemove);
  };
  return (
    <section className='section student--section'>
      <h2 className='students-heading'>Student</h2>
      {students.map((student) => {
        return (
          <Student
            key={student.id}
            {...student}
            enableEdit={() => handleEditCase(student)}
            remove={() => remove(student)}
          />
        );
      })}
    </section>
  );
};

export default Students;
