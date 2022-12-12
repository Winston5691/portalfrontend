import React, { useRef, useState } from 'react';
import './Enroll.css';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
const baseApiUrl = 'http://localhost:4000/api';
function Form() {
  const course_idRef = useRef();
  const student_idRef = useRef();
  const gradeRef = useRef();
  // const [user, setUser] = useState([]);
  // console.log(user);

  const [course_id, setcourse_id] = useState([]);
  const [student_id, setstudent_id] = useState([]);
  const [grade, setgrade] = useState([]);

  const history = useHistory();
  function enrollUser(e) {
    e.preventDefault();
    console.log('Enroll Attempt');

    // =================TRIAL

    console.log(course_idRef.current.value);
    console.log(student_idRef.current.value);
    console.log(gradeRef.current.value);

    history.push('/dashboard');
    function handleAddItem(newUser) {
      // setItems([...items, newItem]);
      setcourse_id([course_idRef.current.value]);
      setstudent_id(student_idRef.current.value);
      setgrade(gradeRef.current.value);
    }

    fetch(`${baseApiUrl}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        first_name: course_id,
        last_name: student_id,
        name: course_id + ' ' + student_id,
        grade: grade,
      }),
    })
      .then((r) => r.json())
      .then((newUser) => handleAddItem(newUser));

    // =================TRIAL
  }

  return (
    <div className='sign'>
      <div className='signup-body'>
        <h2 className='signup'>Submitt student result</h2>
        <form onSubmit={enrollUser}>
          <div class='mb-3' className='input-fields'>
            <input
              type='text'
              class='form-control'
              id='exampleInputgrade1'
              aria-describedby='gradeHelp'
              placeholder='CourseID'
              ref={course_idRef}
              onChange={(e)=>setcourse_id(e.target.value)}
            />
            <input
              type='text'
              class='form-control'
              id='exampleInputgrade1'
              aria-describedby='gradeHelp'
              placeholder='Student name'
              ref={student_idRef}
              onChange={(e)=>setstudent_id(e.target.value)}

            />
            <input
              type='grade'
              class='form-control'
              id='exampleInputgrade1'
              aria-describedby='gradeHelp'
              placeholder='grade'
              ref={gradeRef}
              onChange={(e)=>setgrade(e.target.value)}
            />
            <input
              type='grade'
              class='form-control'
              id='exampleInputgrade1'
              aria-describedby='gradeHelp'
              placeholder='Result'
              ref={gradeRef}
              onChange={(e)=>setgrade(e.target.value)}
            />
          </div>
          <Link to="/login">
            <button
              type='submit'
              class='btn btn-primary'
              className='create-account'
              onClick={enrollUser}
            >
              Submitt Result
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}
export default Form;