import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [validEmail, setValidEmail] = useState("cecon.carlsen@unesp.br");
  const [validPassword, setValidPassword] = useState("1234");

  const [logged, setLogged] = useState(false);

  const handleSecretAuth = () => {
    if (email === validEmail && password === validPassword) setLogged(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <form
      className={!logged ? "login" : "login-logged"}
      onSubmit={handleSubmit}
    >
      <h3>Log In</h3>
      <label>Email</label>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <label>Password</label>
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <button type="submit" onClick={handleSecretAuth}>
        Log In
      </button>
    </form>
  );
};

export default Login;
