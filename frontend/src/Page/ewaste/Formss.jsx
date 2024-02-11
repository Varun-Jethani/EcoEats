import React from "react";
import "./form.css";

import Cookies from "universal-cookie";

//instantiating Cookies class by creating cookies object
const cookies = new Cookies();

class Formss extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      formname: "E-Waste",
      firstName: "",
      lastName: "",
      eWasteType: "",
      productAge: "",
      contactNumber: "",
      addressLine1: "",
      addressLine2: "",
      pincode: ""
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/formfill/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": cookies.get("csrftoken"),
      },
      
      body: JSON.stringify(this.state)
    })
    console.log(this.state);
  }

  render(){
    return (
      <div className="full">
        <div className="left-form"></div>
        <div className="info-form">
          <div className="Text">
            <h1>Fill the Form Here</h1>
            <p>We need your accurate address to pick E-Waste from Your Home</p>
          </div>
          <div className="inputs">
            <form onSubmit={this.handleSubmit}>
              <input type="text" name="firstName" placeholder="First NAME" id="" onChange={this.handleChange} />
              <input type="text" name="lastName" placeholder="Last Name" id="" onChange={this.handleChange} />
              <input type="text" name="eWasteType" placeholder="E-Waste Type" id="" onChange={this.handleChange} />
              <input type="text" name="productAge" placeholder="How old is your product" id="" onChange={this.handleChange} />
              <input type="tel" name="contactNumber" placeholder="Contact Number" id="" onChange={this.handleChange} />
              <input type="text" name="addressLine1" placeholder="Address Line 1" id="" onChange={this.handleChange} />
              <input type="text" name="addressLine2" placeholder="Address Line 2" id="" onChange={this.handleChange} />
              <input type="number" name="pincode" placeholder="Pincode" id="" onChange={this.handleChange} />
              <button onClick={(e)=>this.handleSubmit(e)}>Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}


export default Formss;
