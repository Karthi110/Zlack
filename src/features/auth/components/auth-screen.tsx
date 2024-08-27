"use client";

import React, { useState } from "react";
import SignInCard from "./signin-card";
import SIgnUpCard from "./signup-card";
import { SignInFlow } from "../types";

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");
  return (
    <div className="h-full flex items-center justify-center bg-primary/60">
      <div className="md:h-auto md:w-[420px]">
        {state === "signIn" ? (
          <SignInCard setState={setState} />
        ) : (
          <SIgnUpCard setState={setState} />
        )}
      </div>
    </div>
  );
};

export default AuthScreen;
