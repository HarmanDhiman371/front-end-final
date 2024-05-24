import React from 'react';
import './Login.css'; // Import the CSS file

const LoginPage = () => {
    return (
        <div className="l-outer">
            <div className="l-background">
                <div className="shape"></div>
                <div className="shape"></div>
            </div>
            <div className="l-container">
                <img src="images/plane.png" alt="Moving Image" className="moving-image" height="250" width="350" />
            </div>
            <form className='l-form' >
                <img src="images/main.png" className="l-logo" alt="Journio Logo" />
                <h3 className='l-h3' >Login Here</h3>

                <label htmlFor="username" className='l-label'>Username</label>
                <input type="email" placeholder="Email or Phone" className='l-in'  id="l-username" />

                <label htmlFor="password" className='l-label'>Password</label>
                <input type="password" placeholder="Password" className='l-in' id="l-password" />

                <button className='log' >Log In</button>
                <div className="social">
                    <div className="go"><i className="fab fa-google"></i> Google</div>
                    <div className="fb"><i className="fab fa-facebook"></i> sign up</div>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
