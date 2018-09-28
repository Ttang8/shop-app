import React, { Component } from 'react';

class SessionForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount () {
    this.props.clearErrors();
  }

  update(field){
    return event => this.setState({[field]: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    const user = this.state;
    this.props.processForm({user});
    this.state = {
      username: "",
      password: ""
    };
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error, idx) => (
          <li key={idx}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div>
        <div>
          {this.renderErrors()}
        </div>
        <form className="submitform" onSubmit={this.handleSubmit}>
          <div className="inputs">
            <input placeholder="Username" type="text" autoFocus="autofocus" value={this.state.username} onChange={this.update('username')}></input>
          </div>
          <div className="inputs">
            <input placeholder="Password" type="password" value={this.state.password} onChange={this.update('password')}></input>
          </div>
          <input className="login-button modal-button" type="submit" value="Submit"></input>
        </form>
      </div>
    );
  }

}

export default SessionForm;
