import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setEmployees, employees }) => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false); 

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [phone, setPhone] = useState('');
  const [gender, setGender] = useState('');
  const [showEmployeeForm, setShowEmployeeForm] = useState(false); 

  const navigate = useNavigate();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const passwordRegex = /^\d{5}$/;
    if (email === 'evt@gmail.com' && password === '12345') {
      alert('Login Successful!');
      setIsLoggedIn(true);
      setLoginFailed(false); 
    } else {
      setLoginFailed(true); 
    }
  };

  const handleEmployeeSubmit = (event) => {
    event.preventDefault();
    const newEmployee = { name, id, phone, gender };
    setEmployees([...employees, newEmployee]);
    alert('Employee Form Submitted!');

    // Clear the form fields
    setName('');
    setId('');
    setPhone('');
    setGender('');

    navigate('/employees');
  };

  const handleRetryLogin = () => {
    setLoginFailed(false);
    setEmail('');
    setPassword('');
  };

  const handleShowEmployeeForm = () => {
    setShowEmployeeForm(true); // Show the employee form when button clicked
    setLoginFailed(false); // Reset login failed state
  };

  return (
    <div className="login-container">
      {loginFailed ? (
        <div className="login-failed">
          <h2>Login Failed!!!</h2>
          <p>Please Retry with valid Login Credentials!!!</p>
          <button className="btn btn-primary" onClick={handleRetryLogin}>
            <b>LOGIN</b>
          </button>
          <button className="btn btn-secondary" onClick={handleShowEmployeeForm}>
            <b>EMPLOYEE</b>
          </button>
        </div>
      ) : isLoggedIn || showEmployeeForm ? (
        <form className="login-form" onSubmit={handleEmployeeSubmit}>
          <h2><b>Employee Details</b></h2>
          <div className="mb-3">
            <label htmlFor="name" className="form-label" >Name:-</label>
            <input type="text" placeholder="Enter the Employee Name" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="mb-3">
            <label htmlFor="id" className="form-label" >ID:-</label>
            <input type="text" placeholder="Enter the Employee ID" className="form-control" id="id" value={id} onChange={(e) => setId(e.target.value)} pattern='\d{7}' title='Provide Valid ID'required />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Mobile Number:-</label>
            <input type="tel" placeholder="Enter valid Mobile Number" className="form-control" id="mobile" value={phone} onChange={(e) => setPhone(e.target.value)} pattern='\d{10}' title='Mobile Number must consists of 10 Digits' required />
          </div>
          <div className="mb-3">
            <label className="form-label">Gender:-</label>
            <div>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="genderMale" name="gender" value="Male" checked={gender === 'Male'} onChange={(e) => setGender(e.target.value)} required />
                <label htmlFor="genderMale" className="form-check-label">Male</label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="genderFemale" name="gender" value="Female" checked={gender === 'Female'} onChange={(e) => setGender(e.target.value)} required />
                <label htmlFor="genderFemale" className="form-check-label">Female</label>
              </div>
              <div className="form-check">
                <input type="radio" className="form-check-input" id="genderOther" name="gender" value="Other" checked={gender === 'Other'} onChange={(e) => setGender(e.target.value)} required />
                <label htmlFor="genderOther" className="form-check-label">Other</label>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100"><b>SUBMIT</b></button>
        </form>
      ) : (
        <form className="login-form" onSubmit={handleLoginSubmit}>
          <center><h2><b>ViswaTeja Hospital</b></h2></center>
          <center><h4>Login</h4></center>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"><b>Email address:</b></label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your valid email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title='Please enter a Valid Email Address'
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label"><b>Password:</b></label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter 5-Digit password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              pattern='\d{5}'
              title='Password must be exactly 5-Digits'
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100"><b>SUBMIT</b></button>
        </form>
      )}
      <div className="logo-container">
        <img src="/VT_logo.png" alt="Hospital Logo" className="hospital-logo" />
      </div>
    </div>
  );
};

export default Login;
