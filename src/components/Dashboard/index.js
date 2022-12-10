import React from 'react';
import axios from 'axios';

const Dashboard = () => {
  const API_Students= "http://localhost:4000/api/students";
  const getStudents = () => {
    return axios.get(API_Students).then((response) => response.data)
  }
  console.log(getStudents())
  const API_appointments= "http://localhost:4000/api/appointments";
  const getAppointments = () => {
    return axios.get(API_appointments).then((response) => response.data)
  }
  console.log(getAppointments())
  const API_courses= "http://localhost:4000/api/courses";
  const getCourses = () => {
    return axios.get(API_courses).then((response) => response.data)
  }
  console.log(getCourses())
  const API_tutors= "http://localhost:4000/api/tutors";
  const getTutors = () => {
    return axios.get(API_tutors).then((response) => response.data)
  }
  console.log(getTutors())
  const API_results= "http://localhost:4000/api/results";
  const getResults = () => {
    return axios.get(API_results).then((response) => response.data)
  }
  console.log(getResults())
  const user = "tutor"
  return (
    <div style={{backgroundColor: 'white', color:'black'}}>
      {user=="tutor"  && (
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
                <td>Otto</td>
                <td>@mdo</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
                <td>@mdo</td>

              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
                <td>@mdo</td>

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
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
      )}

        <div>

        </div>

{user=="student"  && (
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
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>

    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>

    </tr>
  </tbody>
        </table>
    </div>
  )}
  </div>
  )}

export default Dashboard;
