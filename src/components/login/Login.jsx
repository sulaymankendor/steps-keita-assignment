import React from "react";
import { z } from "zod";
import Eye from "../../svg/Eye";
import { useState } from "react";
import EyeSlash from "../../svg/EyeSlash";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSelector, useDispatch } from "react-redux";
import { token } from "../../redux/authenticationTokenSlice";
function Login() {
  const count = useSelector((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const userLoginSchema = z.object({
    username: z.string().min(2, "username must have at least 2 characters"),
    password: z.string().min(4, "password must have at least 4 characters"),
  });
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userLoginSchema) });
  const onSubmit = (data) => {
    setIsLoggingIn(true);
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        dispatch(token(data));
        setIsLoggingIn(false);
        navigate("/dashboard");
      })
      .catch((error) => {
        setErrorMsg("The username or password you entered is not valid");
        setIsLoggingIn(false);
        console.error(error.message);
      });
  };
  return (
    <div className=" w-[40%] mx-auto mt-[30vh] bg-black">
      <h1 className="text-white text-2xl">Login</h1>
      <p className="text-gray-200 font-thin text-sm mb-5">
        Enter your log in details please
      </p>
      <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
        <input
          placeholder="username..."
          {...register("username")}
          className="bg-transparent mb-8 w-full transition-all border-gray-500 focus:border-gray-200 outline-none border-[0.5px] pl-2 py-2 rounded-lg text-white"
        />
        {errors.username && (
          <p className="text-red-400 text-sm -mt-6 mb-8">
            {errors.username?.message}
          </p>
        )}
        <div className="flex items-center  mb-8 border-gray-500 border-[0.5px] pl-2 py-[10px] rounded-lg">
          <input
            placeholder="password..."
            type={showPassword ? "text" : "password"}
            {...register("password")}
            className="bg-transparent transition-all w-full h-full  focus:border-gray-200 outline-none  rounded-lg text-white"
          />
          <button
            className="mr-4"
            onClick={() => {
              setShowPassword((showPassword) => !showPassword);
            }}
            type="button"
          >
            {showPassword ? <Eye /> : <EyeSlash />}
          </button>
        </div>
        {errors.password && (
          <p className="text-red-400 text-sm -mt-6 mb-8">
            {errors.password?.message}
          </p>
        )}
        {errorMsg && (
          <p className="text-red-400 text-sm -mt-6 mb-8">{errorMsg}</p>
        )}
        <button
          disabled={isLoggingIn}
          className="bg-sky-500 hover:bg-sky-400 transition-all text-white self-center px-12 py-2 rounded-md "
        >
          {isLoggingIn ? <p className="px-[15.5px]">...</p> : <p>Log in</p>}
        </button>
      </form>
    </div>
  );
}

export default Login;
