import React, { Component } from "react";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    //passing the initial state
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //firstName handler
  firstHandler = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  //lastName handler
  lastHandler = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  //email handler
  emailHandler = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  //comments handler
  commentsHandler = (event) => {
    this.setState({
      commentsHandler: event.target.value,
    });
  };

  //event handler
  handleSubmit(event) {
    alert(`${this.state.firstName} ${this.state.lastName} Added Successfully!`);
    console.log(this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      comments: "",
    });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h2>Contact Us:</h2>
          </div>
          <div>
            <label>First Name:</label>
            <div>
              <input
                name="firstName"
                type="text"
                value={this.state.firstName}
                onChange={this.firstHandler}
                placeholder="First Name..."
              />
            </div>
          </div>
          <div>
            <label>Last Name:</label>
            <div>
              <input
                name="lastName"
                type="text"
                value={this.state.lastName}
                onChange={this.lastHandler}
                placeholder="Last Name..."
              />
            </div>
          </div>
          <div>
            <div>
              <label>Email:</label>
              <div>
                <input
                  name="email"
                  type="text"
                  value={this.state.email}
                  onChange={this.emailHandler}
                  placeholder="Email..."
                />
              </div>
              <label>Comments:</label>
              <div>
                <textarea
                  cols="30"
                  rows="5"
                  name="comments"
                  onChange={this.commentsHandler}
                  placeholder="Comments..."
                >
                  {this.state.comments}
                </textarea>
              </div>
            </div>
          </div>
          <div>
            {/* <button type="submit">Submit</button> */}
            <input type="submit" name="Button" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}
