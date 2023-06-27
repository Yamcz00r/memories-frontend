import Input from "../components/Input";
import Form from "../components/Form";
import { FormEvent, useState } from "react";
import { ErrorState, TokenResponse } from "../type";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { setToken } from "../store/slice/auth";
import { useRegisterMutation, useLoginMutation } from "../store/api/auth";
import { useToast } from "@chakra-ui/react";

export default function Signup() {
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [register] = useRegisterMutation();
  const [login] = useLoginMutation();
  const [emailError, setEmailError] = useState<ErrorState>({
    isError: false,
    message: "",
  });
  const [passwordError, setPasswordError] = useState<ErrorState>({
    isError: false,
    message: "",
  });
  const [usernameError, setUsernameError] = useState<ErrorState>({
    isError: false,
    message: "",
  });

  const toast = useToast();
  const navigate = useNavigate();
  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    if (passwordError.isError || usernameError.isError || emailError.isError) {
      toast({
        title: "Your form contain errors",
        description: "Something went wrong. Check your values!",
        status: "error",
        position: "bottom-right",
        isClosable: true,
        duration: 9000,
      });
      return;
    }

    if (email.length === 0 || password.length === 0 || username.length === 0) {
      toast({
        title: "Your form contain errors",
        description: "Something went wrong. Check your values!",
        status: "error",
        position: "bottom-right",
        isClosable: true,
        duration: 9000,
      });
      return;
    }

    try {
      const result = await register({
        email,
        password,
        userName: username,
      });

      console.log(result);
      if (result.error) {
        const error = new Error(`${result.error?.data.message}`);
        error.statusCode = result.error.status;
        throw error;
      }

      const tokenResponse = await login({
        email: result.data.result.email,
        password,
      });

      console.log(tokenResponse);
      dispatch(setToken(tokenResponse.data.token));

      localStorage.setItem("token", tokenResponse.data.token);

      toast({
        title: "Success",
        description: "Successfully created a user",
        status: "success",
        position: "bottom-right",
        isClosable: true,
        duration: 9000,
      });
      navigate("/home");
    } catch (error: any) {
      toast({
        title: `Error ${error.statusCode}`,
        description: error.message,
        status: "error",
        position: "bottom-right",
        isClosable: true,
        duration: 9000,
      });
    }
  }

  function emailValidation(value: string) {
    const schema = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmail = schema.test(value);

    return isEmail;
  }

  function passwordValidation(value: string) {
    const schema = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const isValidPassword = schema.test(value);

    return isValidPassword;
  }

  function usernameValidation(value: string) {
    if (value.trim().length === 0) {
      return false;
    }
    return true;
  }

  return (
    <>
      <header className="p-7 mb-20">
        <div className="font-bold text-3xl md:text-4xl xl:text-3xl">
          Memories
        </div>
      </header>
      <section className="sm:w-1/2 md:w-3/5 xl:w-1/3 mx-auto">
        <div className="font-semibold text-2xl text-center mb-5 md:text-3xl xl:text-2xl">
          Sign Up
        </div>
        <Form type="signup" className="p-5 flex flex-col" onSubmit={onSubmit}>
          <Input
            setValue={setUsername}
            type="text"
            label="Username"
            validation={usernameValidation}
            setError={setUsernameError}
            error={usernameError}
          />
          <Input
            setValue={setEmail}
            type="email"
            label="Email"
            validation={emailValidation}
            setError={setEmailError}
            error={emailError}
          />
          <Input
            setValue={setPassword}
            type="password"
            label="Password"
            validation={passwordValidation}
            error={passwordError}
            setError={setPasswordError}
          />
          <div className="text-sm mb-6">
            <p className="text-gray-400">Password requirements</p>
            <ul className="list-disc list-inside">
              <li>Password must contain at least one lowercase letter</li>
              <li>Password must contain at least one uppercase letter</li>
              <li>Password must contain at least one digit</li>
              <li>Password must have at least 8 characters</li>
            </ul>
          </div>
        </Form>
        <div className="text-center p-3 mb-3">
          <Link
            className="transition-colors duration-150 border border-blue-700 p-3 rounded-lg hover:bg-blue-700 hover:text-slate-100"
            to="/"
          >
            Already created an account? Log In here!
          </Link>
        </div>
      </section>
    </>
  );
}
