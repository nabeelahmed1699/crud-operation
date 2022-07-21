import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Form from '../components/Form/Form';
import Students from '../components/Students/Students';
import EditForm from '../components/EditForm/EditForm';
import StudentContext from '../Context/studentContext';
import './Home.css';

const url = 'http://localhost:3333/students';

const Home = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isEdit, setIsEdit] = useState(false);
  const [editObject, setEditObject] = useState({});

  function getData() {
    axios
      .get(url)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function (response) {
        setStudents(response.data);
        setisLoading(false);
      });
  }
  useEffect(() => {
    getData();
  }, [url]);

  // getting and posting the new Data
  function postData(newStudent) {
    if (newStudent.studname === '' || newStudent.email === '') {
      window.alert(`Empty student can't be added!`);
      throw new Error(`Empty student can't be added!`);
    }
    axios
      .post(url, newStudent)
      .then((res) => {
        getData();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  function startEditing(objectToUpdate) {
    setIsEdit(true);
    setEditObject(objectToUpdate);
  }
  function stopEditing() {
    setIsEdit(false);
  }

  function updateStudent(newStudent) {
    axios
      .put(`http://localhost:3333/students/${newStudent.id}`, newStudent)
      .then((res) => {
        getData();
      })
      .catch((error) => {
        console.error(error);
      });
    setIsEdit(false);
  }
  function removeStudent(studentToRemove) {
    axios
      .delete(`http://localhost:3333/students/${studentToRemove.id}`)
      .then((res) => {
        getData();
      })
      .catch((error) => {
        console.error(error);
      });
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <StudentContext.Provider value={{ students, startEditing, removeStudent }}>
      <header className='container'>
        <h1 className='heading'>CRUD Operation App</h1>
        <main className='main'>
          {isEdit ? (
            <EditForm
              stopEditing={stopEditing}
              updateStudent={updateStudent}
              editingObject={editObject}
            />
          ) : (
            <Form postData={postData} />
          )}
          <Students />
        </main>
      </header>
    </StudentContext.Provider>
  );
};

export default Home;
