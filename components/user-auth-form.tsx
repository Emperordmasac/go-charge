"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { Icons } from "@/components/icons";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthFormSignIn({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={() => {}}>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Password</Label>
            <Input
              id="password"
              placeholder="Phone number"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <div className="flex flex-col gap-y-5 md:gap-y-0  justify-between md:flex-row">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                keep me logged in
              </label>
            </div>
            <div className="px-1 md:px-0">
              <Link
                href="/forgot-password"
                className="text-[12px] text-muted-foreground text-[#EF895F]"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export function UserAuthFormForgotPassword({
  className,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={() => {}}>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export function UserAuthFormResetPasword({
  className,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={() => {}}>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="email">OTP</Label>
            <Input
              id="otp"
              placeholder="Phone number"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">New Password</Label>
            <Input
              id="password"
              placeholder="Phone number"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Confirm Password</Label>
            <Input
              id="confirm-password"
              placeholder="Phone number"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export function UserAuthFormGetStarted({
  className,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={() => {}}>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              placeholder="name@example.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}

export function UserAuthFormSetupAccount({
  className,
  ...props
}: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={() => {}}>
        <div className="grid gap-6">
          <div className="grid gap-3">
            <Label htmlFor="email">First Name</Label>
            <Input
              id="first-name"
              placeholder="phonw number"
              type="text"
              autoCapitalize="none"
              autoComplete="text"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Last Name</Label>
            <Input
              id="last-name"
              placeholder="phonw number"
              type="text"
              autoCapitalize="none"
              autoComplete="text"
              autoCorrect="off"
            />
          </div>
          <div className="grid gap-3">
            <Label htmlFor="email">Password</Label>
            <Input
              id="password"
              placeholder="Phone number"
              type="password"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
          <button className={cn(buttonVariants())} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Continue
          </button>
        </div>
      </form>
    </div>
  );
}
