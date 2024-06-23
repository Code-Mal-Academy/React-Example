import { useState } from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const handleSubmit = async () => {
    const req = await fetch("http://localhost:8080/auth/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      //! Sesssion
      credentials: "include",
    });

    const res = await req.json();

    //! JWT
    // localStorage.setItem("accessToken", res.accessToken);
    setLoginMessage(res.msg);
  };

  return (
    <div className="register-form-container">
      <div className="register-form">
        {!loginMessage ? (
          <>
            <h2>Login</h2>
            <label>
              Email:
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button onClick={handleSubmit}>Login</button>
          </>
        ) : (
          <div className="success-message">
            <p>{loginMessage}</p>
            <Link to="/todo">
              <p>Login</p>
            </Link>
          </div>
        )}
      </div>
      <Link to="/register">
        <a>Go To Register</a>
      </Link>
    </div>
  );
};

export default LoginPage;
