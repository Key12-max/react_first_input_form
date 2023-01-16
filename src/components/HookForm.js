import React, {useState} from 'react';


const UserForm = (props) => {
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ confirmPassword, setConfirmPassword] = useState("");
    
    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();
        
        // shorthand ES6 syntax for building an object - see notes above
        const newUser = { firstName,lastName, email, password, confirmPassword };
        console.log("Welcome", newUser);
        setfirstName("");
        setlastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
    };
    
    const formDataDivStyle = {
        textAlign: "left", 
        width: "450px", 
        margin: "auto",
    }

    const inputDataDivStyle = {
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        border: "1px solid darkgrey",
        padding: "0px 10px",
        margin: "5px",
    }

    return(
        <div>
            <form onSubmit={ createUser } style ={{marginTop:"20px"}}>
                <div style={inputDataDivStyle}>
                    <label htmlFor="firstName">First Name: </label> 
                    <input type="text" value={firstName} onChange={ (e) => setfirstName(e.target.value) } />
                </div >
                <div style={inputDataDivStyle}>
                    <label htmlFor="lastName">Last Name: </label> 
                    <input type="text" value={lastName} onChange={ (e) => setlastName(e.target.value) } />
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor='email'>Email Address: </label> 
                    <input type="text" value={email} onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor='password'>Password: </label>
                    <input type="password" value={password} onChange={ (e) => setPassword(e.target.value) } />
                </div>
                <div style={inputDataDivStyle}>
                    <label htmlFor="confirmPassord">Confirm Password:</label>
                    <input 
                    type="password" 
                    name="confirmPassword" 
                    onChange={ (e) => setConfirmPassword(e.target.value) }
                    />
                </div>
            <input type="submit" value="Create User" />
            </form>

            <div style={ formDataDivStyle }>
                <h3 style={{ textAlign: 'center' }}>Your Form Data</h3>
                <p>
                    <label>First Name: </label>{ firstName }
                </p>
                <p>
                    <label>Last Name: </label>{ lastName }
                </p>
                <p>
                    <label>Email: </label>{ email }
                </p>
                <p>
                    <label>Password: </label>{ password }
                </p>
                <p>
                    <label>Confirm Password: </label>{ confirmPassword }
                </p>
            </div>
        </div>
        )
    }
export default UserForm;
