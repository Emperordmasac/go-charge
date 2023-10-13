import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { UserAuthFormSignIn } from "@/components/user-auth-form";
import {
  girlImage,
  bigBoyImage,
  carImage,
  yellowImage,
  yellowTriangle,
  blackTriangle,
} from "@/components/image-icon";

const SignInPage = () => {
  return (
    <div className="container grid h-screen w-screen flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
      <div className="hidden h-full bg-[#000] lg:block">
        <div className="flex flex-col text-[#EF895F] ml-[100px] mt-[112px]">
          <h2 className="text-lg">
            Welcome to <span className="text-lg block">GoCharge.</span>
          </h2>
          <div className="ml-[121px] mt-[79px]">
            <Image
              src={girlImage}
              height="100"
              width="100"
              alt="girl-image-icon"
            />
          </div>
          <div className="ml-[544px] -mt-[100px]">
            <Image
              src={carImage}
              height="100"
              width="100"
              alt="girl-image-icon"
            />
          </div>
          <div className="flex ">
            <div className="ml-[80px] mt-[100px]">
              <Image
                src={blackTriangle}
                height="100"
                width="50"
                alt="girl-image-icon"
              />
            </div>
            <div className="ml-[10px] -mt-[50px]">
              <Image
                src={bigBoyImage}
                height="383"
                width="474"
                alt="girl-image-icon"
              />
            </div>
            <div className="ml-[10px] mt-[69px]">
              <Image
                src={yellowTriangle}
                height="100"
                width="50"
                alt="girl-image-icon"
              />
            </div>
          </div>
          <div className="ml-[208px] mt-[29px]">
            <Image
              src={yellowImage}
              height="100"
              width="100"
              alt="girl-image-icon"
            />
          </div>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2">
            <h1 className="text-[36px] font-semibold tracking-tight">
              Sign In
            </h1>
            <p className="text-[20px] text-muted-foreground">
              Input your login details
            </p>
          </div>
          <UserAuthFormSignIn />
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
