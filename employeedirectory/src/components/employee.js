import React, { Component } from "react";
import Table from "./table.js";
import API from "../utils/API.js";

//need to set up JSX to render single employee data

class Employee extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        API.getEmployees().then(({ data }) => {
            console.log(data.results)
            this.setState({ employees: data.results })
        })
    }

    render() {
        return (<Table employees={this.state.employees}/>)
    }
}

export default Employee