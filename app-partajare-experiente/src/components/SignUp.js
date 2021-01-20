import React, { Component } from 'react'
class SignUp extends React.Component {
  render() {
    return (
    <div id="login-box">
      <div class="left">
        <h1>Sign up</h1>
        
        <input type="text" name="username" placeholder="Nume utilizator" />
        <input type="text" name="email" placeholder="E-mail" />
        <input type="password" name="password" placeholder="Parola" />
        <input type="password" name="password2" placeholder="Confirmare parola" />
        
        <button type="submit" name="signup_submit" value="Inregistrare" />
      </div>
      
      <div class="right">
        <span class="loginwith">Autentificare<br />retele de socializare </span>
        
        <button class="social-signin facebook">Autentificare prin Facebook</button>
        <button class="social-signin twitter">Autentificare prin LinkedIn</button>
        <button class="social-signin google">Autentificare prin Google+</button>
      </div>
      <div class="or">SAU</div>
    </div>
    )
  }
}
export default SignUp;