import React, { Component } from "react";
import { Input } from "../Form";
import API from "../../utils/API"


class AdminCreateUser extends Component {

    state = {
        username: "",
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    }

    componentDidMount() {

    }


    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        event.preventDefault();

        var apiTags = this.state.tags;
        var lowerCaseTags = apiTags.toLowerCase();
        var splicedArr = lowerCaseTags.split(", ")
        console.log(splicedArr)

          API.createUser({
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password
        })
        .then(res => console.log("Successfully added user"))
        .catch(err => console.log)
    }

    

    render() {
        return (
            <div className="card bg-dark text-white">
                <form>
                    <h5>Input User Information Here</h5>
                    <Input value={this.state.username} onChange={this.handleInputChange} name="username" placeholder="Username goes here" />
                    <Input value={this.state.firstName} onChange={this.handleInputChange} name="firstName" placeholder="First name goes here" />
                    <Input value={this.state.lastName} onChange={this.handleInputChange} name="lastName" placeholder="Last name goes here" />
                    <Input value={this.state.email} onChange={this.handleInputChange} name="email" placeholder="Email goes here" />
                    <Input value={this.state.password} onChange={this.handleInputChange} name="password" placeholder="Password goes here" />
                   
                    <button onClick={this.handleFormSubmit}>Submit new User</button>
                </form>
            </div>
        )
    }
}

export default AdminCreateUser