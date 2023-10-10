import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./Login.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPending, setIsPending] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsPending(true);

    // Simulate a login process (replace with actual login logic)
    setTimeout(() => {
      console.log("Email:", email);
      console.log("Password:", password);
      history.push("/Home");
      setIsPending(false);
    }, 2000);
  };

  return (
    <div className="Login">
      <h2 className="Login-h2">Welcome to our Portal! Login to your account</h2>
      <div className="Login-form">
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <input
              type="text"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="submit-button" type="submit" disabled={isPending}>
            {isPending ? (
              <>
                <span className="spinner"></span> Please wait...
              </>
            ) : (
              "Login"
            )}
          </button>
        </form>
        <Link to="./">Forgot Password?</Link>
      </div>
    </div>
  );
}

export default Login;
