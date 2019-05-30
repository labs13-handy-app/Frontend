import React, { Component } from "react";
import { Link } from "react-router-dom";

class SignIn extends Component {
    constructor() {
        super();

        this.state = {
            email: "",
            password: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <div classname="FormSection">
                <form
                    onSubmit={this.handleSubmit}
                    className="FormFields"
                >
                    <div classname="FormFields">
                        <label classname="FormField_Label" htmlFor="email">
                            {" "}
                            mail{" "}
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="FormField_Input"
                            placeholder=" Email here"
                            name="user"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className="FormField">
                        <label className="FormField__Label" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="FormField__Input"
                            placeholder="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
                        />
                    </div>

                    <div className="FormField">
                        <button className="FormField_Button">Sign In</button>{" "}
                        <Link to="/" className="FormField__Link">
                            Account Creation
                        </Link>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;
