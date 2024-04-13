import React from 'react'
import InnerpageHeader from "../components/general/InnerpageHeader"
import Loginform from "../components/login/Loginform"

const LogIn = () => {
    return (
        <div className="login-page">
            <InnerpageHeader pageTitle="Login" />
            <div className="container  mx-auto py-20 px-2.5 sm:px-0">
                <div className="max-w-[550px] mx-auto">
                    <Loginform />
                </div>
            </div>
        </div>
    )
}

export default LogIn