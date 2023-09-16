import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { UserAuthFormSetupAccount } from "@/components/user-auth-form";

const SetupAccountPage = () => {
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
          <h1 className="text-2xl font-semibold tracking-tight">
            Setup Your Account
          </h1>
          <p className="text-sm text-muted-foreground">
            Tell us a bit about yourself
          </p>
        </div>
        <UserAuthFormSetupAccount />
      </div>
    </div>
  );
};

export default SetupAccountPage;
