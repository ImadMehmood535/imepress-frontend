import { Button } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import React, { useState } from "react";
import { FaCloudUploadAlt, FaEye, FaEyeSlash } from "react-icons/fa";
import { errorToast, successToast } from "../../hooks/useToast";
import { API } from "../../api";
import { setCookie } from "../../hooks/useCookies";
import useUserStore from "../../store/user";
import { useNavigate } from "react-router-dom";

const Signupform = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [image, setImage] = useState(null);
  const [upload, setUpload] = useState(null);
  const [loading, setLoading] = useState(false);
  const { loginUser } = useUserStore();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    delete data.image;
    delete data.confirmPassword;
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", upload);
      const responseImage = await API.uploadImage(formData);

      const response = await API.registerUser({
        ...data,
        imageUrl: responseImage?.data?.data,
      });
      setCookie("token", response?.data?.data?.token);
      successToast(response?.data?.message);
      loginUser({ ...response?.data?.data, authorized: true });
      setLoading(false);
      navigate("/");
      reset();
    } catch (error) {
      setLoading(false);
      errorToast(error, "Can not Sign Up");
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setUpload(file);
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const [isShow, setIsShow] = useState(false);
  const handleShow = (isShow) => {
    setIsShow(!isShow);
  };
  const password = watch("password");

  return (
    <>
      <div className="formarea">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid-cols-1 grid md:grid-cols-2 gap-4 mb-2">
            <div className="field-wrapper">
              <label>
                First Name<span className="text-red-700">*</span>
              </label>
              <div className="field-container">
                <input
                  type="text"
                  {...register("firstName", { required: true })}
                />
                {errors?.firstName && (
                  <p className="text-sm text-red-800">This field is required</p>
                )}
              </div>
            </div>
            <div className="field-wrapper">
              <label>
                Last Name<span className="text-red-700">*</span>
              </label>
              <div className="field-container">
                <input
                  type="text"
                  {...register("lastName", { required: true })}
                />
                {errors?.lastName && (
                  <p className="text-sm text-red-800">This field is required</p>
                )}
              </div>
            </div>
          </div>
          <div className="grid-cols-1 grid md:grid-cols-2 gap-4 mb-2">
            <div className="field-wrapper">
              <label>
                email address<span className="text-red-700">*</span>
              </label>
              <div className="field-container">
                <input type="text" {...register("email", { required: true })} />
                {errors?.email && (
                  <p className="text-sm text-red-800">This field is required</p>
                )}
              </div>
            </div>
            <div className="field-wrapper">
              <label>
                Phone Number<span className="text-red-700">*</span>
              </label>
              <div className="field-container">
                <input
                  type="text"
                  {...register("phoneNumber", { required: true })}
                />
                {errors?.phoneNumber && (
                  <p className="text-sm text-red-800">This field is required</p>
                )}
              </div>
            </div>{" "}
          </div>

          <div className="grid-cols-1 grid md:grid-cols-2 gap-4 mb-2">
            <div className="field-wrapper">
              <label>
                Password<span className="text-red-700">*</span>
              </label>
              <div className="field-container relative">
                <input
                  type={isShow ? "text" : "password"}
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
                  <p className="text-sm text-red-800">This field is required</p>
                )}
              </div>
            </div>
            <div className="field-wrapper">
              <label>
                Confirm Password<span className="text-red-700">*</span>
              </label>
              <div className="field-container relative  ">
                <input
                  type={isShow ? "text" : "password"}
                  {...register("confirmPassword", {
                    required: true,
                    validate: (value) => value === password,
                  })}
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
                {errors?.confirmPassword?.type === "required" && (
                  <p className="text-sm text-red-800">This field is required</p>
                )}
                {errors?.confirmPassword?.type === "validate" && (
                  <p className="text-sm text-red-800">Passwords do not match</p>
                )}
              </div>
            </div>
          </div>

          <div className="grid-cols-1 grid gap-4 mb-2">
            <div className="field-wrapper">
              <div className="flex items-center justify-center w-full relative">
                <label
                  htmlFor="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer "
                >
                  {image ? (
                    <img
                      src={image}
                      alt="Uploaded"
                      width={600}
                      height={50}
                      className="absolute object-cover object-center rounded-md h-64"
                    />
                  ) : (
                    <>
                      <FaCloudUploadAlt className="text-3xl text-gray-500 dark:text-gray-400" />
                      <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>{" "}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PNG, JPG
                      </p>
                    </>
                  )}
                  <input
                    id="dropzone-file"
                    {...register("image", { required: true })}
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {errors?.image && (
                <p className="text-sm text-red-800">Please upload an image</p>
              )}
            </div>
          </div>

          <div className="field-container">
            <Button
              type="submit"
              isLoading={loading}
              className="w-[100%] h-[58px] text-1xl bg-zinc-950 text-white rounded-full"
            >
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signupform;
