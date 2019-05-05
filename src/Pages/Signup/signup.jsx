import React from 'react';
import './stylesign.css';

const signup = () => {
    function showpass() {
        var x = document.getElementById("password");
        if (x.type === "password") {
        x.type = "text";
        } else {
        x.type = "password";
        }
    }
    return (
        <div class="all">
            <div class="nav">
                <nav>
                    <div class="nav-wrapper blue-grey">
                    <a class="brand-logo center">SIGN UP</a>
                    </div>
                </nav>
            </div>
            
            <div class="cont">
                <p class="note"><span class="req">*</span> fields are required</p>
                <div class="row" >
                <form class="col s12 m12">

                <div class="row">
                    <div class="input-field col s6 m6">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="icon_prefix" type="text" class="validate" />
                    <label htmlFor="icon_prefix">First Name<span class="req">*</span></label>
                    </div>
                    <div class="input-field col s6 m6">
                    <input id="icon_telephone" type="tel" class="validate" />
                    <label htmlFor="icon_telephone">Last Name<span class="req">*</span></label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12 m12">
                        <i class="material-icons prefix">security</i>
                        <input id="password" type="password" class="validate" />
                        <label htmlFor="password">Password<span class="req">*</span></label>
                        <p>
                            <label>
                                <input type="checkbox" onClick={showpass} class="filled-in"/>
                                <span>Show Password</span>
                            </label>
                        </p>
                        </div>
                    </div>

                <div class="row">
                    <div class="input-field col s12 m12">
                    <i class="material-icons prefix">phone</i>
                    <input id="icon_telephone" type="tel" class="validate" />
                    <label htmlFor="icon_telephone">Telephone</label>
                    </div>
                </div>

                <div class="row">
                    <div class="input-field col s12 m12">
                    <i class="material-icons prefix">account_circle</i>
                    <input id="username" type="text" class="validate" />
                    <label htmlFor="username">Username<span class="req">*</span></label>
                    </div>
                </div>

                
                <div class="row center">
                    <button class="btn waves-effect waves-light blue-grey" type="submit" name="action">Sign up
                        <i class="material-icons right">send</i>
                    </button>
                </div>
                <div class="row center"> 
                    <p>Have an account already? </p>
                    {/* <a href="./signin.html"> Sign in here! </a> */}
                </div>  
                </form>
                </div>
            </div>
        </div>
    );
}

export default signup;