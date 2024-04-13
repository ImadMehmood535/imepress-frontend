import React from 'react'
import Signupform from "./Signupform"
import InnerpageHeader from '../general/InnerpageHeader';

const SignupPage = () => {
    return (
        <div className="signup-page ">
            <InnerpageHeader pageTitle="Create An Account" />
            <div className="container  mx-auto py-20 px-2.5 sm:px-0">
                <div className="max-w-[550px] mx-auto">
                    <Signupform />
                </div>
            </div>
        </div>
    )
}

export default SignupPage;