import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const [student, setStudent] = useState([]);
  const [tutors, setTutors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [results, setResults] = useState([]);
  const [courses, setCourses] = useState([]);
  const API_Students= "http://localhost:4000/api/students";
  const getStudents = () => {
    return axios.get(API_Students).then((response) => setStudent(response.data))
  }
  console.log(student)

  const API_appointments= "http://localhost:4000/api/appointments";
  const getAppointments = () => {
    return axios.get(API_appointments).then((response) => setAppointments(response.data))
  }
  
  const API_courses= "http://localhost:4000/api/courses";
  const getCourses = () => {
    return axios.get(API_courses).then((response) => setCourses(response.data))
  }
  
  const API_tutors= "http://localhost:4000/api/tutors";
  const getTutors = () => {
    return axios.get(API_tutors).then((response) => setTutors(response.data))
  }
  
  const API_results= "http://localhost:4000/api/results";
  const getResults = () => {
    return axios.get(API_results).then((response) => setResults(response.data))
  }
  
  useEffect(() => {
    getResults();
    getStudents();
    getTutors();
    getCourses();
    getAppointments();
  }, [])
  

  const user = "student"
  return (
    <div style={{backgroundColor: 'white', color:'black'}}>
      {user=="student"  &&  (
        <div>
          <div>Students</div>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">RegNo</th>
                <th scope="col">Courses</th>
                <th scope="col">Grade</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>5625</td>
                <td>DevOps</td>
                <td>B</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>7652</td>
                <td>Software Development</td>
                <td>C</td>

              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>8978</td>
                <td>Data science</td>
                <td>A</td>

              </tr>
            </tbody>
          </table>
          <div>Appoitnments</div>
          <table className="table">
            <thead className="thead-light">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Date</th>
                <th scope="col">Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>7.1.2023</td>
                <td>20 mins</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>22.12.2022</td>
                <td>2 hr</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>15.12.2022</td>
                <td>1 hr</td>
              </tr>
              <Link to="/Form">
            <button
              type='submit'
              class='btn btn-primary'
              className='create-account'
              // onClick={enrollUser}
            >
              Submitt Result
            </button>
          </Link>
            </tbody>
          </table>
        </div>
        
      )}

{/* {user=="student" && (
  <div>
    <div>Results</div>
        <table className="table">
  <thead className="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">Course Name</th>
      <th scope="col">Grade</th>
      <th scope="col">Marks</th>
    </tr>
  </thead>
  { student?.results?.map((result) => (
  <tbody>
    <tr>
      <th scope="row">{result.id}</th>
      <td>{result.course?.name}</td>
      <td>{result.grade}</td>
      <td>{result.percentage}%</td>
    </tr>
  </tbody>
  ))}
        </table>
    </div>
  )} */}
  </div>
  
  )}
export default Dashboard;
