import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { API } from "../../api";
import { errorToast, successToast } from "../../hooks/useToast";
import useUserStore from "../../store/user";
import { setCookie } from "../../hooks/useCookies";
import { Link, useNavigate } from "react-router-dom";

const Loginform = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const { loginUser } = useUserStore();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await API.logInUser(data);
      successToast(response?.data?.message);
      setLoading(false);
      setCookie("token", response?.data?.data?.token);
      loginUser({ ...response?.data?.data, authorized: true });

      navigate("/");
    } catch (error) {
      setLoading(false);
      errorToast(error, "Can not log In at the moment");
    }
  };

  const [isShow, setIsShow] = useState(false);

  const handleShow = (isShow) => {
    setIsShow(!isShow);
  };
  return (
    <>
      <div className="formarea">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field-wrapper">
            <label>
              Username or email address<span className="text-red-700">*</span>
            </label>
            <div className="field-container">
              <input
                type="text"
                name="email"
                className={`w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-blue-500  ${errors?.email ? 'focus:border-red-800 focus:ring-red-500' : 'focus:border-themePrimary-0 focus:ring-blue-400'} text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out`}
                {...register("email", { required: true })}
              />
              {errors?.email && (
                <p className="text-sm text-red-800">Email is required</p>
              )}
            </div>
          </div>
          <div className="field-wrapper">
            <label>
              Password<span className="text-red-700">*</span>
            </label>
            <div className="field-container relative">
              <input
                type={isShow ? "text" : "password"}
                name="password"
                className={`w-full bg-white rounded border border-gray-300  focus:ring-2 focus:ring-blue-500  ${errors?.password ? 'focus:border-red-800 focus:ring-red-500' : 'focus:border-themePrimary-0 focus:ring-blue-400'} text-base outline-none text-gray-700 py-1 px-3 leading-10 transition-colors duration-200 ease-in-out`}
                {...register("password", { required: true })}
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center  leading-5 text-3xl">
                {isShow ? (
                  <FaEye
                    onClick={() => handleShow(isShow)}
                    className="cursor-pointer"
                  />
                ) : (
                  <FaEyeSlash
                    onClick={() => handleShow(isShow)}
                    className="cursor-pointer"
                  />
                )}
              </div>
              {errors?.password && (
                <p className="text-sm text-red-800">Password is required</p>
              )}
            </div>
          </div>
          <div className="field-wrapper">
            <div className="flex justify-between">
              <label className="block text-gray-500 font-bold my-4">
                <input
                  type="checkbox"
                  name="checkbox"
                  className="leading-loose text-pink-600"
                />
                <span className="py-2 text-sm text-gray-600 leading-snug">
                  {" "}
                  Remember Me{" "}
                </span>
              </label>
              <label className="block text-gray-500  my-4">
                <Link
                  to="#"
                  className="cursor-pointer tracking-tighter text-[#121212] border-b-2 border-[#121212] hover:border-[#A0A0A0]"
                >
                  <span>Forgot Your Password?</span>
                </Link>
              </label>
            </div>
          </div>
          <div className="field-container">
            <Button
              type="submit"
              isLoading={loading}
              className="w-[100%] h-[58px] text-1xl bg-zinc-950 text-white rounded-full"
            >
              Login
            </Button>
          </div>
          <div className="field-wrapper">
            <div className="flex justify-center gap-2">
              <label className="block text-[#A0A0A0] font-normal my-4 ">
                <span className="py-2 text-sm  leading-snug  ">
                  {" "}
                  Not a member?{" "}
                </span>
              </label>
              <label className="block text-gray-500  my-4">
                <Link
                  to="/sign-up"
                  className="cursor-pointer tracking-tighter text-[#121212] border-b-2 border-[#121212] hover:border-[#A0A0A0]"
                >
                  Register
                </Link>
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Loginform;
