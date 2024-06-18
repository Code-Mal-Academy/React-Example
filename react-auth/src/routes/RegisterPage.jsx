import { useState } from "react";
import "./RegisterPage.css";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registerMessage, setRegisterMessage] = useState("");

  const handleSubmit = async () => {
    const req = await fetch("http://localhost:8080/auth/register", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const res = await req.json();
    setRegisterMessage(res.msg);
  };

  return (
    <div className="register-form-container">
      <div className="register-form">
        {!registerMessage ? (
          <>
            <h2>Register</h2>
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
            <button onClick={handleSubmit}>Register</button>
          </>
        ) : (
          <div className="success-message">
            <p>{registerMessage}</p>
            <Link to="/login">
              <p>Login</p>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterPage;
