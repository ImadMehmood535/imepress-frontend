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

const ForgotPasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
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

  return (
    <>
      <div className="formarea">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="field-wrapper">
            <label className="font-bold">Reset your Password</label>
            <p className="text-[#121212] text-base">
              {" "}
              We will send you an email to reset your password
            </p>
            <div className="field-container mt-4">
              <input
                type="text"
                name="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              {errors?.email && (
                <p className="text-sm text-red-800">Email is required</p>
              )}
            </div>
          </div>

          <div className="field-container">
            <Button
              type="submit"
              isLoading={loading}
              className="w-[100%] h-[58px] text-1xl bg-zinc-950 text-white rounded-full"
            >
              Submit
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

export default ForgotPasswordForm;
