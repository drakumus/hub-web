import React, { Component } from 'react';
import logo from './images/logo.png';
import './App.css';

class LoginModule extends Component {
    render() {
        return (
            <div className="LoginModule">
                <div className="card" style={{margin: 'auto', marginTop: 8 + 'rem',padding: 3 + 'rem', maxWidth: 40 + 'rem', height: 'auto', boxShadow: "0 0 20px rgba(0, 0, 0, 0.5)"}}>
                    <div className="form-group row">
                        <img className="Logo" alt="logo" style={{maxWidth: 100+ '%', height: "auto"}} src={logo}/>
                    </div>
                    <div className="form-group row" style={{marginTop: 2 + "rem"}}>
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email:</label>
                        <div className="col-sm-10">
                            <input type="email" className="form-control" id="inputEmail3"/>
                        </div>
                    </div>
                    <div className="form-group row" style={{marginBottom: 2 + "rem"}}>
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password:</label>
                        <div className="col-sm-10">
                            <input type="password" className="form-control" id="inputPassword3"/>
                        </div>
                    </div>
                    <div className="form-group row">
                        <button type="button" className="btn btn-primary" style={{margin:"auto", height:3+"rem", minWidth: 30 + "%"}}>Submit</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginModule;
