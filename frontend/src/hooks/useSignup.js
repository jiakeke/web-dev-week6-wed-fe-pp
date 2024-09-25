import { useNavigate } from "react-router-dom";
import useField from './useField';

const useSignup = function (setIsAuthenticated) {
  const emailInput = useField("text");
  const passwordInput = useField("password");
  const password2Input = useField("password");
  const navigate = useNavigate();

  const handleSignup = async () => {
    if (passwordInput.value !== password2Input.value) {
      console.error("Passwords do not match!");
      return; // Exit if passwords don't match
    }
    
    try {
      const response = await fetch("/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput.value, password:
        passwordInput.value }),
      });

      if (response.ok) {
        const user = await response.json();
        sessionStorage.setItem("user", JSON.stringify(user));
        console.log("User signed up successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  return {
    emailInput,
    passwordInput,
    password2Input,
    handleSignup,
  };
};

export default useSignup;
