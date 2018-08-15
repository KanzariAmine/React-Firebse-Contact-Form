import React, { Component } from 'react';

class Form extends Component{
  render(){
    return(
      <div className="contact">
        <h3>Email Us</h3>
        <div className="alert">Your Message has been sent</div>
        
        <form id="contactForm" onSubmit={this.props.getValue}>
          <p>
            <label>Name</label>
            <input type="text" name="name" id="name" />
          </p>
          <p>
            <label>Company</label>
            <input type="text" name="company" id="company"/>
          </p>
          <p>
            <label>Email Address</label>
            <input type="email" name="email" id="email" />
          </p>
          <p>
            <label>Phone Number</label>
            <input type="text" name="phone" id="phone"/>
          </p>
          <p className="full">
            <label>Message</label>
            <textarea name="message" rows="5" id="message"></textarea>
          </p>
          <p className="full">
            <button type="submit">Submit</button>
          </p>
        </form>
      </div>
    )
  }
};

export default Form;