"use client";

import FooterLink from "@/components/FooterLink";
import InputFields from "@/components/forms/InputFields";
import { Button } from "@/components/ui/button";
import React from "react";
import { useForm } from "react-hook-form";

const SignIn = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { email: "", password: "" }, mode: "onBlur" });

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log("Form Data:", data);
    } catch (error) {
      console.error("Error during sign in:", error);
    }
  };
  return (
    <>
      <h1 className="font-title mb-4">Log In Your Account</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Form fields will go here */}
        <InputFields
          register={register}
          name="email"
          label="Email"
          placeholder="Enter your email"
          error={errors.email}
          type="email"
          validation={{
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email",
            },
          }}
        />
        <InputFields
          register={register}
          name="password"
          label="Password"
          placeholder="Enter a strong password"
          error={errors.password}
          type="password"
          validation={{
            required: "Password is required",
            minLength: 8,
            message: "At least 8 characters",
          }}
        />
        <Button
          disabled={isSubmitting}
          type="submit"
          className="yellow-btn w-full mt-5"
        >
          Sign In
        </Button>
      </form>
      <FooterLink
        text="Don't have an account?"
        linkText="Sign Up"
        href="/signup"
      />
    </>
  );
};

export default SignIn;
