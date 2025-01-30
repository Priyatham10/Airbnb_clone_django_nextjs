'use client';

import Modal from "./Modal";

import { useState } from "react";
import useSignupModal from "@/app/hooks/useSignupModal";
import CustomButton from "../forms/CustomButton";

const SignupModal = () => {
    const signupModal = useSignupModal()

    const content = (
        <>

            <form className="space-y-4">
                <input placeholder="Your e-mail address" type="email" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>
                
                <input placeholder="Your password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>

                <input placeholder="Repeat password" type="password" className="w-full h-[54px] px-4 border border-gray-300 rounded-xl"/>

                <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                    Error!!
                </div>
                <CustomButton
                    label="Submit"
                    onClick={() => console.log("Sign up details submitted!")}
                />
            </form>
        </>
    )

    return (
        <Modal
            label="Sign up"
            close={signupModal.close}
            content={content}
            isOpen={signupModal.isOpen}
        />
    )
}

export default SignupModal;