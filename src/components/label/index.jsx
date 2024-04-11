// Label component extends from shadcnui - https://ui.shadcn.com/docs/components/label

"use client";
import {Root} from "@radix-ui/react-label";
import * as React from "react";
import {cn} from "../../../utils/cfn";

export const Label = ({className, ref, ...props}) => (
  <Root
    ref={ref}
    className={cn(
      "text-sm font-medium text-white leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
);
