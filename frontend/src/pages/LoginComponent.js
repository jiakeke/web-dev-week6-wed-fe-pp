import useLogin from "../hooks/useLogin";

const LoginComponent = ({ setIsAuthenticated }) => {
  const { emailInput, passwordInput, handleLogin} =
    useLogin(setIsAuthenticated);

  return (
    <div>
      <h2>Login</h2>
      <label>
        Username:
        <input {...emailInput} />
      </label>
      <br />
      <label>
        Password:
        <input {...passwordInput}/>
      </label>
      <br />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginComponent;
