import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Home extends Component {
    constructor(props){
      super(props);
      this.state = {
        customer_name: '',
        customer_aadhar:'',
        date: '',
        timein:'',
        timeout: '',
        customer_mobile:'',
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
        console.log( this.state.customer_name);
        console.log( this.state.customer_mobile);
        console.log( this.state.date);
        console.log( this.state.timein);
    }

   
    render() {
        return (
            <form>
                <h3>Customer Registration</h3>

            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container">
                  <Link className="navbar-brand" to={"/sign-in"}>Covid market</Link>
                  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <Link className="nav-link" to={"/sign-in"}>Logout</Link>
                      </li>
                    </ul>
                  </div>
                </div>
            </nav>

                <div className="form-group">
                    <label>Customer name</label>
                    <input type="text"  className="form-control" name="customer_name" onChange={this.onChange.bind(this)} placeholder="Enter " />
                </div>

                <div className="form-group">
                    <label>Customer Aadhar</label>
                    <input type="text"  className="form-control" name="customer_aadhar" onChange={this.onChange.bind(this)} placeholder="Enter " />
                </div>

                <div className="form-group">
                    <label>Date</label>
                    <input type="Date"  className="form-control" name="date" onChange={this.onChange.bind(this)} placeholder="Enter" />
                </div>

                <div className="form-group">
                    <label>Time In</label>
                    <input type="Time"  className="form-control" name="timein" onChange={this.onChange.bind(this)} placeholder="Enter" />
                </div>

                <div className="form-group">
                    <label>Time Out</label>
                    <input type="Time"  className="form-control" name="timeout" onChange={this.onChange.bind(this)} placeholder="Enter" />
                </div>

                <div className="form-group">
                    <label>Customer mobile number</label>
                    <input type="text"  className="form-control" name="customer_mobile" onChange={this.onChange.bind(this)} placeholder="Enter" />
                </div>

                
                <button type="button" onClick={this.handleSubmit} className="btn btn-primary btn-block">Sign Up</button>
                
            </form>
        );
    }
}

