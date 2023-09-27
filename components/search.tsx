"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

interface SearchProps extends React.HTMLAttributes<HTMLFormElement> {}

export function Search({ className, ...props }: SearchProps) {
  function onSubmit(event: React.SyntheticEvent) {
    event.preventDefault();

    return toast({
      title: "Not Implemented",
      description: "We're still working on the search.",
    });
  }

  return (
    <form
      onSubmit={onSubmit}
      className={cn("relative w-full", className)}
      {...props}
    >
      <Input
        type="search"
        placeholder="search"
        className="h-10 w-full sm:w-64 sm:pr-12"
      />
    </form>
  );
}
