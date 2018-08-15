import React, { Component } from 'react';
import Info from './components/info';
import Form from './components/form'
import './App.css';

let firebase = require ('firebase')
let  uid = require ('uuid')


// Initialize Firebase
let config = {
  apiKey: "AIzaSyAxtAn6kSM_Rv63ZJ9fPkgPVRID-xY6dr4",
  authDomain: "react-contact-form-7275e.firebaseapp.com",
  databaseURL: "https://react-contact-form-7275e.firebaseio.com",
  projectId: "react-contact-form-7275e",
  storageBucket: "react-contact-form-7275e.appspot.com",
  messagingSenderId: "263388818383"
};
firebase.initializeApp(config);
class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      contacts: []
    }

    this.getValue = this.getValue.bind(this);
  }

  getValue(e){
    //Get the value from the input feild and saved in object
     let newContacts = {
      id: uid.v1(),
      name: e.target.name.value,
      company: e.target.company.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      message: e.target.message.value
      };

      //Save a data in the state and Send to the data base (Firebase)
     this.setState({
       contacts: [...this.state.contacts, newContacts]
      }, () => {
        firebase.database().ref('/emailContacts').set({
          contacts: this.state.contacts
        })
        document.querySelector('.alert').style.display = 'block';
      });

      //Hied the successfully message after 2s
      setTimeout(() => {
        document.querySelector('.alert').style.display = 'none'; 
      },2000)
      
      e.preventDefault();
      e.target.reset();
  }
  render() {
    return (
      <div className="container">
      <h1 className="brand"><span>Contact</span> Form</h1>
      <div className="wrapper">
        <Info />
        <Form getValue={this.getValue}/>
      </div>
    </div>
    );
  }
}

export default App;
