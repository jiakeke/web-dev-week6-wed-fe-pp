import useSignup from "../hooks/useSignup";

const SignupComponent = ({ setIsAuthenticated }) => {
  const { emailInput, passwordInput, handleSignup } =
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
      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
