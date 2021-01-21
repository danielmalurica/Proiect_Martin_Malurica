import React, { Component } from 'react'
class SignIn extends React.Component {


  render() {
    return (
      <div id="signin-box">
        <div className="left">
          <h3>Înregistrare</h3>

          <input type="text" name="username" placeholder="Nume utilizator" />
          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Parolă" />
          <input type="password" name="password2" placeholder="Confirmare parolă" />

          <input type="submit" name="signup_submit" value="Înregistrare" />
        </div>

        <div className="right">
          <button className="social-signin facebook">Autentificare prin Facebook</button>
          <button className="social-signin linkedin">Autentificare prin LinkedIn</button>
          <button className="social-signin google">Autentificare prin Google+</button>
        </div>
        <div className="or">sau</div>
      </div>
    )
  }
}
export default SignIn;