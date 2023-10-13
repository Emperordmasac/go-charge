import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { UserAuthFormForgotPassword } from "@/components/user-auth-form";

const ForgotPasswordPage = () => {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div className="flex flex-col space-y-2 ">
          <h1 className="text-[36px] font-semibold tracking-tight">
            Forgot Password
          </h1>
          <p className="text-[20px] text-[#8A8A8F]">
            Enter your email to receive an OTP to reset your password
          </p>
        </div>
        <UserAuthFormForgotPassword />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
