"use server";

import { headers } from "next/headers";
import { auth } from "../auth";
import { inngest } from "../inngest/client";

export const signUpWithEmail = async ({
  email,
  password,
  fullName,
  country,
  investmentGoals,
  riskTolerance,
  preferredIndustry,
}: SignUpFormData) => {
  try {
    const resolvedAuth = await auth;
    const response = await resolvedAuth.api.signUpEmail({
      body: { email, password, name: fullName },
    });

    if (!response) {
      return {
        success: false,
        message: "Sign up failed: No response from auth provider",
      };
    }

    try {
      await inngest.send({
        name: "app/user.created",
        data: {
          email,
          name: fullName,
          country,
          investmentGoals,
          riskTolerance,
          preferredIndustry,
        },
      });
    } catch (error) {
      console.error("Failed to send welcome email event:", error);
    }
    return {
      success: true,
      message: "User signed up successfully",
      data: response,
    };
  } catch (e) {
    console.log("Error signing up user:", e);
    return { success: false, message: "Sign up failed" };
  }
};
export const signInWithEmail = async ({ email, password }: SignInFormData) => {
  try {
    const resolvedAuth = await auth;
    const response = await resolvedAuth.api.signInEmail({
      body: { email, password },
    });

    if (response) {
      return {
        success: true,
        message: "User signed in successfully",
        data: response,
      };
    }
  } catch (e) {
    console.log("Error signing in user:", e);
    return { success: false, message: "Sign in failed" };
  }
};

export const signOut = async () => {
  try {
    const resolvedAuth = await auth;
    await resolvedAuth.api.signOut({ headers: await headers() });
    return { success: true, message: "User signed out successfully" };
  } catch (e) {
    console.log("Error signing out:", e);
    return { success: false, message: "Sign out failed" };
  }
};
