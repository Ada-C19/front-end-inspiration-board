import React from 'react';
import NewUser from './NewUser';
import './LoginPage.css'

const LoginPage = ({verifyLogin, createUser, responseMessage, isResponseVisible, selectedTheme}) => {
    const [userRegistered, setUserRegistered] = React.useState('login')
    const [formFields, setFormFields] = React.useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormFields({ ...formFields, [e.target.name] : e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        verifyLogin(formFields);

        // send login info to server
        // create axios call in app.js that verifies username and password
        // run that function
    };

    const togglePage = (whichPage) => {
        setUserRegistered(whichPage);
        };
        
    return (
        <div className={`${selectedTheme}-main`}>
            {userRegistered === 'login' ? 
            <div className ={`${selectedTheme}-login-container`}>
                <h1>Inspiration Board</h1>
                {/* <h2>Login<span className='flicker-fast'> He</span><span className='flicker-slow'>re</span></h2> */}
                <form className={`${selectedTheme}-login-form`}onSubmit={handleSubmit}>
                    <label className='label1'>
                        Username: <br></br><br></br>
                        <input required name="username" type="text" value={formFields.username} onChange={handleChange} placeholder='username'/>
                    </label>
                    <br></br>
                    <label className='label2'>
                        Password: <br></br><br></br>
                        <input required name="password" type="password" value={formFields.password} onChange={handleChange} placeholder='password' />
                    </label>
                    <br></br>
                        <button className={`${selectedTheme}-button ${selectedTheme}-glow-on-hover login-submit-button`} type="submit">Submit</button>
                </form>
                {isResponseVisible && responseMessage !== null && responseMessage.trim() !== "" && (
                <h3 className={`${selectedTheme}-response`}> {responseMessage} </h3> )}
                <div className={`${selectedTheme}-login-help`}>
                    <p>Don't have an account? <button onClick={() => togglePage('register')} className={`${selectedTheme}-button ${selectedTheme}-glow-on-hover`}>Register</button></p>
                </div>
            </div> : <NewUser createUser={createUser} togglePage={togglePage} selectedTheme={selectedTheme}></NewUser>
            }
            
            
        </div>
    );
}

// LoginPage.propTypes = {
//     username: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
// };      

export default LoginPage;