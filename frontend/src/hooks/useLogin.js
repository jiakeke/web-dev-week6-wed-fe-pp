import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useField from './useField';

const useLogin = (setIsAuthenticated) => {
  const emailInput = useField("text");
  const passwordInput = useField("password");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await fetch("/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: emailInput.value, password:
        passwordInput.value }),
      });

      if (response.ok) {
        const user = await response.json();
        localStorage.setItem("user", JSON.stringify(user));
        console.log("User logged in successfully!");
        setIsAuthenticated(true);
        navigate("/");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return {
    emailInput,
    passwordInput,
    handleLogin,
  };
};

export default useLogin;
