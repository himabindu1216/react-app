import React,{Component} from 'react';
import ReactDOM from 'react-dom'; 
import firebase from 'firebase';


class Register extends React.Component {

constructor(props) {
    super(props);
    this.state = {
    username:'',
    email:'',
    phone:'',
    dateofbirth:'',
    address:''
  };
  this.handleInputChange=this.handleInputChange.bind(this);
  this.handleSubmit=this.handleSubmit.bind(this);
}

handleInputChange(event) {
  const target=event.target;
  const value=target.value;
  const name=target.name;

  this.setState({
    [name]:value
  });
}

 handleSubmit(event){
  event.preventDefault();

  const listRef=firebase.database().ref('list');
  const list={
    username: this.state.username,
    email: this.state.email,
    phone: this.state.phone,
    dateofbirth:this.state.dateofbirth,
    address: this.state.address,
  }
  listRef.push(list);
 }
  

    
  render() {

  return (
    
    
     <form onSubmit={this.handleSubmit}>
      
       <h1> Create Account</h1>
       
       
     <label for="username">Name</label>
     <input type="text" name="username" id="name" value={this.state.username} onChange={this.handleInputChange}/>
    
          
     <label for="email">Email</label>
     <input  type="text" name="email" id="email" value={this.state.email} onChange={this.handleInputChange} />
     
     <label for="phone">Phone</label>
     <input  type="text" name="phone" id="phone" value={this.state.phone} onChange={this.handleInputChange} />
    
     <label for="dateofbirth">Date Of Birth</label>
     <input type="text" name="dateofbirth" id="dateofbirth" placeholder="Eg: May 12,1990" value={this.state.dateofbirth} onChange={this.handleInputChange} />

     <label for="address">Address</label>
     <textarea  id="address" name="address" rows="5" cols="70" placeholder="Where do you live?"value={this.state.address} onChange={this.handleInputChange}></textarea>
     <button type="submit">Register</button> 
     
     </form>
     
    
     
  );
}
}

export default Register;

