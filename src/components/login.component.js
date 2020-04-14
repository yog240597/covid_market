import React, { Component } from "react";
import Home from "./home.component";
import { useHistory } from "react-router-dom";
export default class Login extends Component {
    constructor(props){
      super(props);
      this.state = {
        email: '',
        password:''
      
      }
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        
        e.preventDefault();
        console.log( this.state.email);
        console.log( this.state.password);

    fetch('http://ec2-13-232-58-108.ap-south-1.compute.amazonaws.com:9000/api/v1/login/', {
       method: 'POST',
       headers:{ 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*" },
       body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
         })
     })
      .then(res => res.json())
      .then(data => {
        console.log("sta",data)
        this.props.history.push('/home')
        
      })
      .catch(err => {
        console.log(err)
      });
    }



    render() {
        return (
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" value={this.state.email} name="email" className="form-control" onChange={this.onChange.bind(this)} placeholder="Enter " />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" value={this.state.password} name="password" className="form-control" onChange={this.onChange.bind(this)} placeholder="Enter " />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="button" onClick={this.handleSubmit} className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Don't have an account <a href="/sign-up">sign up?</a>
                </p>
            </form>
        );
    }
}
