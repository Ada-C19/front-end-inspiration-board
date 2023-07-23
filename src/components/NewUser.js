import React from 'react';

const NewUser = ({togglePage, createUser, selectedTheme}) => {
    const [formFields, setFormFields] = React.useState({
        firstName:'',
        lastName:'',
        username: '',
        password: '',
        // profilePic: '',
    });

    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name] : e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        createUser(formFields)

        
        // function that posts new user here
    };
        
    return (
        <div className ={`${selectedTheme}-main`}>
            <div className={`${selectedTheme}-login-container`}>
                <h2 className={`${selectedTheme}-new-user-heading`}>Register</h2> 
                <form className={`${selectedTheme}-registration-form`}onSubmit={handleSubmit}>
                    {/* <h2><span className='flicker-slow'>R</span>eg<span className='flicker-fast'>i</span>ster</h2> */}
                    <label className='firstName'>
                        First Name: <br></br><br></br>
                        <input required name="firstName" type="text" value={formFields.firstName} onChange={handleChange} placeholder='First Name'/>
                    </label>
                    <br></br>
                    <label className='lastName'>
                        Last Name:<br></br><br></br>
                        <input required name="lastName" type="text" value={formFields.lastName} placeholder='Last Name' onChange={handleChange}/>
                    </label>
                    <br></br>
                    <label className='username'>
                        Username:<br></br><br></br>
                        <input required name="username" type="text" value={formFields.username} onChange={handleChange} placeholder='Username'/>
                    </label>
                    <br></br>
                    <label className='password'>
                        Password:<br></br><br></br>
                        <input required name="password" type="password" value={formFields.password} onChange={handleChange} placeholder='Password' />
                    </label>
                    <br></br>
                        <button type="submit" className={`${selectedTheme}-button ${selectedTheme}-glow-on-hover submit-button`}>Submit</button>
                    {/* <label>
                        Profile Pic:
                        <input name="profilePic" type="img" value={formFields.profilePic} onChange={handleChange}/>
                    </label> */}
                </form>
                <div className={`${selectedTheme}-login-help registration-login-help`}>
                <p>Already have an account? <button onClick={() => togglePage('login')} className={`${selectedTheme}-button ${selectedTheme}-glow-on-hover`}>Login</button></p>
                </div>
            </div>
        </div>
    );
};
    export default NewUser;