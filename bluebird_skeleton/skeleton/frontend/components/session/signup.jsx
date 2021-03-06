import React from 'react'



class Signup extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username: "",
            password: "",
            email: "",

        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(type){
        return(e) => {
            this.setState({
                [type]: e.target.value });
        }
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.createNewUser(this.state)
    };

    render(){
        return (
            <div className='session-form'>
            <h2> Sign Up! </h2>
            <form>
                <label> Username:
                    <input
                    type='text'
                    value={this.state.username} 
                    onChange={this.handleInput('username')}></input>
                    </label>

                    <label> Password:
                    <input
                    type='password'
                    value={this.state.password} 
                    onChange={this.handleInput('password')}></input>
                    </label>

                    <label> Email:
                    <input
                    type='text'
                    value={this.state.email} 
                    onChange={this.handleInput('email')}></input>
                    </label>
            </form>
            </div>
        );
    };
};

export default Signup;