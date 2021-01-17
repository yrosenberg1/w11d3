import  React from 'react';

class SessionForm extends React.Component{
 constructor(props){
     super(props);
    this.state = {
        username: "",
        password: ""
    }
this.handleSubmit = this.handleSubmit.bind(this)
this.handleUsername = this.handleUsername.bind(this)
this.handlePassword = this.handlePassword.bind(this)

 }
 handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
 }

 handleUsername(e) {
     this.setState({username: e.target.value})
 }

 handlePassword(e) {
    this.setState({password: e.target.value})
}

 render(){
     return (
     <>
        <form onSubmit={this.handleSubmit}>
            <label>username
                    <input type='text' value={this.state.username} onChange={this.handleUsername} />
           </label>

           <label>password
                    <input type='password' value={this.state.password} onChange={this.handlePassword} />
           </label>

        </form>
     </>
     )}
}