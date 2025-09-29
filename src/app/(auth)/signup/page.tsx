"use client";

import FooterLink from "@/components/FooterLink";
import CountrySelectFields from "@/components/forms/CountrySelectFields";
import InputFields from "@/components/forms/InputFields";
import SelectFields from "@/components/forms/SelectFields";
import { Button } from "@/components/ui/button";
import {
  INVESTMENT_GOALS,
  PREFERRED_INDUSTRIES,
  RISK_TOLERANCE_OPTIONS,
} from "@/utils/contatns";
import React from "react";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm<SignUpFormData>({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      country: "IN",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log("Form Data:", data);
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  console.log("Errors:", errors);

  return (
    <>
      <h1 className="font-title mb-4"> Sign Up & Personalize</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Form fields will go here */}
        <InputFields
          name="fullName"
          label="Full Name"
          placeholder="Suman Kumar"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full Name is required", minLength: 2 }}
        />
        <InputFields
          name="email"
          label="Email"
          placeholder="contact@gmail.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: /^\w+@\w+\.\w+$/i,
            message: "Invalid email address",
          }}
        />
        <InputFields
          name="password"
          label="Password"
          placeholder="Enter a strong password"
          register={register}
          error={errors.password}
          validation={{ required: "Password is required", minLength: 8 }}
        />
        {/* Additional fields like country, investment goals, etc. can be added here */}
        <CountrySelectFields
          name="country"
          label="Country"
          error={errors.country}
          control={control}
          required
        />
        <SelectFields
          name="investmentGoals"
          placeholder="Select your investment goals"
          label="Investment Goals"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />
        <SelectFields
          name="riskTolerance"
          placeholder="Select your risk tolerance"
          label="Risk Tolerance"
          options={RISK_TOLERANCE_OPTIONS}
          control={control}
          error={errors.riskTolerance}
          required
        />
        <SelectFields
          name="preferredIndustry"
          placeholder="Select your preferred industry"
          label="Preferred Industry"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />
        <Button type="submit" className="yellow-btn w-full mt-5">
          {isSubmitting ? "Creating Account" : "Start Your Investment Journey"}
        </Button>
        <FooterLink
          text="Already have account"
          linkText="Sign In"
          href="/signin"
        />
      </form>
    </>
  );
};

export default SignUp;
