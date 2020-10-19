import React from "react"

//create the JSX to render the table using data from employee.js

//need a sorting function

//need a filter function to view only employees where a certain attribute applies



function Table(props) {
    console.log(props.employees)
    return(
    <table class="table">
        <thead>
            <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Location</th>
            </tr>
        </thead>
        <tbody>
        {props.employees.map(employee => (
          <tr key={employee.id.value}>
              <td>{employee.name.first} {employee.name.last}</td>
              <td>{employee.email}</td>
              <td>{employee.phone}</td>
              <td>{employee.location.city}</td>
          </tr>
        ))}
        </tbody>
    </table>)
}

export default Table