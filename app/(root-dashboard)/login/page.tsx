import React from "react";
import { SignIn } from "@clerk/nextjs/app-beta";

const LoginPage = () => {
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default LoginPage;
