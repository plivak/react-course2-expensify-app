
import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box"> 
        <h1>Retire and Chill</h1>
            <p>Solve Your Retirement.</p>
            <p>
            <button onClick={startLogin} className="button">Login</button>
            </p>
        
        </div>
    </div>

);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);