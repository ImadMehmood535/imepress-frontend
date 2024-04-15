import React from "react";
import InnerpageHeader from "../components/general/InnerpageHeader";
import ForgotPasswordForm from "../components/Forgot-Password/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <div className="ForgotPassword">
      <InnerpageHeader pageTitle="Forgot Password" breadcrums={"Reset Password"}  />
      <div className="container  mx-auto py-20 px-2.5 sm:px-0">
        <div className="max-w-[550px] mx-auto">
          <ForgotPasswordForm />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
