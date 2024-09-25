import useSignup from "../hooks/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const { emailInput, passwordInput, password2Input, handleSignup } =
    useSignup(setIsAuthenticated);

  return (
    <div>
      <h2>Signup</h2>
      <label>
        Email:
        <input {...emailInput} />
      </label>
      <br />
      <label>
        Password:
        <input {...passwordInput}/>
      </label>
      <br />
      <label>
        Password2:
        <input {...password2Input}/>
      </label>
      <br />
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
