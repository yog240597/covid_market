import React, { Component } from "react";

export default class SignUp extends Component {
    constructor(props){
      super(props);
      this.state = {
        bussiness_name: '',
        bussiness_address:'',
        bussiness_area: '',
        bussiness_mobile:'',
        owner_name: '',
        username:'',
        email:'',
        password: '',
        owner_aadhar:'',
        helper_name: '',
        helper_aadhar:''
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
        console.log( this.state.bussiness_mobile);
        console.log( this.state.password);
        fetch('http://ec2-13-232-58-108.ap-south-1.compute.amazonaws.com:9000/api/v1/usercreate/', {
       method: 'POST',
       headers:{ 'Content-Type': 'application/json',"Access-Control-Allow-Origin": "*" },
       body: JSON.stringify({
        bussiness_name: this.state.bussiness_name,
        bussiness_address: this.state.bussiness_address,
        bussiness_area: this.state.bussiness_area,
        bussiness_mobile: this.state.bussiness_mobile,
        owner_name: this.state.owner_name,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        owner_aadhar: this.state.owner_aadhar,
        helper_name: this.state.helper_name,
        helper_aadhar: this.state.helper_aadhar


         })
     })
      .then(res => res.json())
      .then(data => {
       console.log("data is",data)
       this.props.history.push('/sign-in')
       
        
      })
      .catch(err => {
        console.log(err)
      });
    }

   
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Bussiness name</label>
                    <input type="text"  className="form-control" name="bussiness_name" onChange={this.onChange.bind(this)} placeholder="Enter " />
                </div>

                <div className="form-group">
                    <label>Bussiness address</label>
                    <input type="text"  className="form-control" name="bussiness_address" onChange={this.onChange.bind(this)} placeholder="Enter " />
                </div>

                <div className="form-group">
                    <label>Bussiness area</label>
                    <input type="text"  className="form-control" name="bussiness_area" onChange={this.onChange.bind(this)} placeholder="Enter" />
                </div>

                <div className="form-group">
                    <label>Bussiness Mobile</label>
                    <input type="text"  className="form-control" name="bussiness_mobile" onChange={this.onChange.bind(this)} placeholder="Enter" />
                </div>

                <div className="form-group">
                    <label>Owner name</label>
                    <input type="text"  className="form-control" name="owner_name" onChange={this.onChange.bind(this)} placeholder="Enter" />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text"  className="form-control" name="username" onChange={this.onChange.bind(this)} placeholder="Enter" />
                </div>

                <div className="form-group">
                    <label>email</label>
                    <input type="text"  className="form-control" name="email" onChange={this.onChange.bind(this)} placeholder="Enter" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text"  className="form-control" name="password" onChange={this.onChange.bind(this)} placeholder="Enter" />
                </div>

                <div className="form-group">
                    <label>Owner Aadhar</label>
                    <input type="text"  className="form-control" name="owner_aadhar" onChange={this.onChange.bind(this)} placeholder="Enter" />
                </div>

                <div className="form-group">
                    <label>Helper name</label>
                    <input type="text"  className="form-control" name="helper_name" onChange={this.onChange.bind(this)} placeholder="Enter" />
                </div>

                <div className="form-group">
                    <label>Helper Aadhar</label>
                    <input type="text"  className="form-control" name="helper_aadhar" onChange={this.onChange.bind(this)} placeholder="Enter" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
        );
    }
}

