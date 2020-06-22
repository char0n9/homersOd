import React from 'react';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
    
        this.state = {
            email: "mon@email.com",
            password: "monPassw0rd",
            passwordVerification:'',
            firstName: "James",
            lastName: "Bond",
        }
        this.updateEmailField = this.updateEmailField.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateEmailField = (event) => {this.setState({email: event.target.value})

    } 

    updatePasswordField = (event) => {
        this.setState({password: event.target.value})
    }
    updateLastNameField = (event) => {
        this.setState({lastName: event.target.value})
    }
    
    updateFirstNameField = (event) => {
        this.setState({firstName: event.target.value})
    }
    updatePasswordVerifictionField = (event) => {
        this.setState({passwordVerification: event.target.value})
    }

    handleSubmit = (e)=>{
        e.preventDefault()
        console.log(this.state)
    }
  render() {
    return(<div>
        <h1>{JSON.stringify(this.state,1,1)}</h1> 
        <form>
     <input type="email" name="email" onChange={this.updateEmailField}   />
     <input type="password" name="password" onChange={this.updatePasswordField}   />
     <input type="password" name="passworddbis" onChange={this.updatePasswordVerifictionField}   />
     <input type="text" name="lastname" onChange={this.updateLastNameField}   />
     <input type="text" name="firstname" onChange={this.updateFirstNameField}   />
  
    
     
     
     <input type="submit" value="Submit" onClick ={this.handleSubmit}/>
      </form>
    
    </div>);
  }
}